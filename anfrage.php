<?php
/* Versand der Formular-Anfragen ueber den eigenen Server (Hostinger).
   Kein Fremddienst, keine Freischaltung noetig. Antwortet als JSON.

   Schutzmassnahmen:
   - nur POST, nur JSON, begrenzte Groesse
   - Honigtopf-Feld (_honey)
   - Bremse je IP-Adresse (Anzahl pro Stunde und pro Tag)
   - Pflichtfelder und Laengenpruefung
   - keine Kopfzeilen-Einschleusung (Betreff und Antwortadresse bereinigt)
*/

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('Cache-Control: no-store');

const EMPFAENGER      = 'info@obscura-berlin.de';
const MAX_BYTES       = 24576;   /* 24 KB Nutzlast reichen fuer ein Formular */
const MAX_FELDER      = 40;
const MAX_FELDLAENGE  = 4000;
const LIMIT_STUNDE    = 5;       /* Anfragen je IP pro Stunde  */
const LIMIT_TAG       = 20;      /* Anfragen je IP pro Tag     */

function raus(bool $ok, string $text, int $code = 200): void {
  http_response_code($code);
  echo json_encode(['success' => $ok, 'message' => $text], JSON_UNESCAPED_UNICODE);
  exit;
}

/* --- Absender erkennen (hinter Proxy/CDN) ---------------------------- */
function herkunft(): string {
  foreach (['HTTP_CF_CONNECTING_IP', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'] as $k) {
    if (!empty($_SERVER[$k]) && filter_var($_SERVER[$k], FILTER_VALIDATE_IP)) {
      return $_SERVER[$k];
    }
  }
  if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $erste = trim(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0]);
    if (filter_var($erste, FILTER_VALIDATE_IP)) return $erste;
  }
  return '0.0.0.0';
}

/* --- Bremse: zaehlt Anfragen je IP in einer Datei --------------------- */
function bremse(string $ip): void {
  $ordner = sys_get_temp_dir() . '/obs-anfragen';
  if (!is_dir($ordner)) @mkdir($ordner, 0700, true);
  if (!is_dir($ordner)) return;                     /* kein Schreibrecht: nicht blockieren */

  $datei = $ordner . '/' . hash('sha256', $ip) . '.txt';
  $jetzt = time();

  $griff = @fopen($datei, 'c+');
  if (!$griff) return;
  @flock($griff, LOCK_EX);

  $inhalt = stream_get_contents($griff);
  $zeiten = array_filter(array_map('intval', preg_split('/\s+/', (string)$inhalt, -1, PREG_SPLIT_NO_EMPTY)));
  $zeiten = array_values(array_filter($zeiten, fn($t) => $jetzt - $t < 86400));

  $letzte_stunde = count(array_filter($zeiten, fn($t) => $jetzt - $t < 3600));
  $zuviel = $letzte_stunde >= LIMIT_STUNDE || count($zeiten) >= LIMIT_TAG;

  if (!$zuviel) $zeiten[] = $jetzt;

  ftruncate($griff, 0);
  rewind($griff);
  fwrite($griff, implode("\n", array_slice($zeiten, -100)));
  @flock($griff, LOCK_UN);
  fclose($griff);

  /* Alte Dateien gelegentlich aufraeumen */
  if (random_int(1, 50) === 1) {
    foreach (glob($ordner . '/*.txt') ?: [] as $alt) {
      if (is_file($alt) && $jetzt - (int)@filemtime($alt) > 172800) @unlink($alt);
    }
  }

  if ($zuviel) {
    header('Retry-After: 3600');
    raus(false, 'Zu viele Anfragen. Bitte melde dich direkt unter info@obscura-berlin.de oder +49 30 28678956.', 429);
  }
}

/* --- Eingang pruefen -------------------------------------------------- */
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') raus(false, 'Nur POST', 405);

$laenge = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($laenge > MAX_BYTES) raus(false, 'Anfrage zu gross', 413);

bremse(herkunft());

$roh = file_get_contents('php://input', false, null, 0, MAX_BYTES + 1);
if ($roh === false || strlen($roh) > MAX_BYTES) raus(false, 'Anfrage zu gross', 413);

$d = json_decode((string)$roh, true);
if (!is_array($d) && !empty($_POST)) $d = $_POST;
if (!is_array($d) || count($d) === 0) raus(false, 'Keine Daten', 400);
if (count($d) > MAX_FELDER) raus(false, 'Zu viele Felder', 400);

/* Honigtopf: gefuellt = Bot. Still mit Erfolg antworten, damit der Bot
   nicht merkt, dass er erkannt wurde. */
if (!empty($d['_honey'])) raus(true, 'ok');

/* --- Inhalte einsammeln ---------------------------------------------- */
$antwort = '';
foreach (['_replyto', 'E-Mail', 'email'] as $k) {
  if (!empty($d[$k]) && is_string($d[$k]) && filter_var($d[$k], FILTER_VALIDATE_EMAIL)) {
    $antwort = $d[$k];
    break;
  }
}

$zeilen = [];
foreach ($d as $k => $v) {
  if (!is_string($k) || strncmp($k, '_', 1) === 0) continue;
  if (is_array($v)) $v = implode(', ', array_filter($v, 'is_scalar'));
  if (!is_scalar($v)) continue;
  $k = mb_substr(preg_replace('/[\x00-\x1F\x7F]/u', ' ', $k) ?? '', 0, 80);
  $v = mb_substr(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', (string)$v) ?? '', 0, MAX_FELDLAENGE);
  $zeilen[] = $k . ': ' . trim($v);
}
if (count($zeilen) === 0) raus(false, 'Keine Inhalte', 400);

$zeilen[] = '';
$zeilen[] = '---';
$zeilen[] = 'Gesendet: ' . date('d.m.Y H:i:s');
$zeilen[] = 'Seite: ' . mb_substr((string)($_SERVER['HTTP_REFERER'] ?? '-'), 0, 300);
$text = implode("\n", $zeilen);

/* --- Betreff und Kopfzeilen (ohne Einschleusungs-Risiko) -------------- */
$betreff = 'Neue Anfrage über obscura-berlin.de';
if (!empty($d['_subject']) && is_string($d['_subject'])) {
  $betreff = mb_substr(preg_replace('/[\r\n\x00]/u', ' ', $d['_subject']) ?? '', 0, 150);
}

$kopf  = "From: OBSCURA Website <noreply@obscura-berlin.de>\r\n";
if ($antwort !== '') {
  $kopf .= 'Reply-To: ' . str_replace(["\r", "\n", "\0"], '', $antwort) . "\r\n";
}
$kopf .= "Content-Type: text/plain; charset=UTF-8\r\n";
$kopf .= "MIME-Version: 1.0\r\n";
$kopf .= "Auto-Submitted: auto-generated\r\n";

$gesendet = @mail(EMPFAENGER, '=?UTF-8?B?' . base64_encode($betreff) . '?=', $text, $kopf);
if (!$gesendet) raus(false, 'Serverversand fehlgeschlagen', 502);

raus(true, 'ok');
