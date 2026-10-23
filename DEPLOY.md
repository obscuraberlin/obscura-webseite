# Deploy – OBSCURA Website

Die Seite ist **statisch**: HTML, Medien und eine einzige PHP-Datei
(`anfrage.php`) fuer den Formularversand. Kein Build-Schritt, kein
Node.js auf dem Server, keine Datenbank.

## Was ausgeliefert wird

| Datei / Ordner | Zweck |
|---|---|
| `index.html` | Startseite |
| `foto-videoproduktion.html` u. a. | Leistungsseiten |
| `anfrage.php` | Formularversand ueber den eigenen Server |
| `media/` | Videos und Bilder der Website |
| `.htaccess` | Sicherheits-Header, Sperren, Caching |
| `robots.txt`, `sitemap.xml`, `llms.txt` | Auffindbarkeit |
| `og-image.jpg`, `favicon.png` | Linkvorschau und Symbol |

**Nicht** ausgeliefert werden `quellen/` (Kamera-Originale), `scripts/`,
`docs/`, `marketing/`, `preview/` und `node_modules/`. Die `.htaccess`
sperrt diese Pfade zusaetzlich.

## Hochladen

### Weg A – Hostinger GIT
hPanel → Websites → Verwalten → Erweitert → GIT → **Deploy**.
Branch: `claude/obscura-berlin-relaunch-mwlxk4`, Verzeichnis: `public_html`.

### Weg B – Upload-Paket bauen
    bash scripts/build-static.sh
Erzeugt `dist/`. Inhalt nach `public_html` hochladen.

## Nach dem Hochladen pruefen

1. `https://www.obscura-berlin.de/anfrage.php` aufrufen →
   erwartet `{"success":false,"message":"Nur POST"}`
2. `https://www.obscura-berlin.de/.env` → erwartet 404
3. `https://www.obscura-berlin.de/quellen/` → erwartet 404
4. Testanfrage ueber das Formular abschicken → Mail muss ankommen

## Tests vor dem Deploy

    npm run test:formular     # Funktionstest der Formulare (21 Pruefungen)

Laeuft taeglich automatisch; benoetigt PHP und playwright-core.

## Web3Forms (Ausweichweg)

Der Versand laeuft vorrangig ueber `anfrage.php`. Als Rueckfallebene kann
Web3Forms genutzt werden. Dafuer in der Seite vor dem Versand-Modul
setzen:

    <script>window.OBS_WEB3FORMS_KEY = "<Schluessel>";</script>

Der Schluessel ist kein Geheimnis (er laeuft ohnehin im Browser), gehoert
aber trotzdem nicht in oeffentliche Dokumentation.
