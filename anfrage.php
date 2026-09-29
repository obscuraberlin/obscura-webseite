<?php
/* Versand der Formular-Anfragen ueber den eigenen Server (Hostinger).
   Kein Fremddienst, keine Freischaltung noetig. Antwortet als JSON. */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function raus($ok, $text, $code = 200) {
  http_response_code($code);
  echo json_encode(array('success' => $ok, 'message' => $text), JSON_UNESCAPED_UNICODE);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') raus(false, 'Nur POST', 405);

$roh = file_get_contents('php://input');
$d = json_decode($roh, true);
if (!is_array($d) && !empty($_POST)) $d = $_POST;
if (!is_array($d) || !count($d)) raus(false, 'Keine Daten', 400);

/* Honigtopf: gefuellt = Bot, still schlucken. */
if (!empty($d['_honey'])) raus(true, 'ok');

$empfaenger = 'info@obscura-berlin.de';
$betreff = isset($d['_subject']) && $d['_subject'] !== ''
  ? $d['_subject'] : 'Neue Anfrage über obscura-berlin.de';

/* Antwortadresse nur uebernehmen, wenn sie sauber ist (kein Header-Schmuggel). */
$antwort = '';
foreach (array('_replyto', 'E-Mail', 'email') as $k) {
  if (!empty($d[$k]) && filter_var($d[$k], FILTER_VALIDATE_EMAIL)) { $antwort = $d[$k]; break; }
}

$zeilen = array();
foreach ($d as $k => $v) {
  if (substr($k, 0, 1) === '_') continue;
  if (is_array($v)) $v = implode(', ', $v);
  $zeilen[] = $k . ': ' . trim((string)$v);
}
if (!count($zeilen)) raus(false, 'Keine Inhalte', 400);

$zeilen[] = '';
$zeilen[] = '---';
$zeilen[] = 'Gesendet: ' . date('d.m.Y H:i:s');
$zeilen[] = 'Seite: ' . (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '-');
$text = implode("\n", $zeilen);

$betreff = str_replace(array("\r", "\n"), ' ', $betreff);
$kopf  = "From: OBSCURA Website <noreply@obscura-berlin.de>\r\n";
if ($antwort !== '') $kopf .= "Reply-To: " . str_replace(array("\r", "\n"), '', $antwort) . "\r\n";
$kopf .= "Content-Type: text/plain; charset=UTF-8\r\n";
$kopf .= "MIME-Version: 1.0\r\n";

$gesendet = @mail($empfaenger, '=?UTF-8?B?' . base64_encode($betreff) . '?=', $text, $kopf);
if (!$gesendet) raus(false, 'Serverversand fehlgeschlagen', 502);

raus(true, 'ok');
