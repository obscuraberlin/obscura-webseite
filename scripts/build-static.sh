#!/usr/bin/env bash
# Baut das statische Upload-Paket fuer Hostinger (public_html) aus der
# fertigen Seite public/site.html + den Leistungs-Unterseiten aus preview/.
# Die Reel-Videos aus public/media werden fuer das Web verkleinert.
#
# Nutzung:  bash scripts/build-static.sh [AUSGABEORDNER]
# Ergebnis: <AUSGABEORDNER>/ mit index.html, Unterseiten, media/, robots.txt,
#           sitemap.xml, .htaccess, og-image.jpg  -> Inhalt in public_html hoch.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-$ROOT/dist}"
# ffmpeg (imageio-Binary, falls kein System-ffmpeg vorhanden)
FF="$(command -v ffmpeg || echo /usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2)"

rm -rf "$OUT"; mkdir -p "$OUT/media"

# Startseite + Leistungs-Unterseiten
cp "$ROOT/public/site.html" "$OUT/index.html"
for p in foto-videoproduktion marketing-beratung mitarbeitergewinnung \
         social-media-mitgliedschaft werbeanzeigen-ads; do
  cp "$ROOT/preview/$p.html" "$OUT/$p.html"
done

# Reels fuer das Web optimieren (720px breit, gute Qualitaet, Ton behalten)
REELS=("spectre.mp4" "Reel1_BudgetClient.MP4" "sanji kensington reel.mp4" \
       "mission karriere ad.mp4" "steal lusso.mp4" "cufflinks produkt video.mp4" \
       "cullinan.mp4" "spreewald therme.mp4")
for f in "${REELS[@]}"; do
  "$FF" -y -i "$ROOT/public/media/$f" \
    -vf "scale=720:-2:force_original_aspect_ratio=decrease" \
    -c:v libx264 -crf 26 -preset veryfast -c:a aac -b:a 128k \
    -movflags +faststart "$OUT/media/$f" -loglevel error
done

# OG-Bild + Favicon
"$FF" -y -i "$ROOT/public/og.png" -q:v 3 "$OUT/og-image.jpg" -loglevel error
cp "$ROOT/public/icon.png" "$OUT/favicon.png"

# robots.txt
cat > "$OUT/robots.txt" <<'ROBOTS'
User-agent: *
Allow: /
Sitemap: https://www.obscura-berlin.de/sitemap.xml
ROBOTS

# sitemap.xml
cat > "$OUT/sitemap.xml" <<'SITEMAP'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.obscura-berlin.de/</loc><priority>1.0</priority></url>
  <url><loc>https://www.obscura-berlin.de/social-media-mitgliedschaft.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.obscura-berlin.de/foto-videoproduktion.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.obscura-berlin.de/werbeanzeigen-ads.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.obscura-berlin.de/mitarbeitergewinnung.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.obscura-berlin.de/marketing-beratung.html</loc><priority>0.8</priority></url>
</urlset>
SITEMAP

# .htaccess: HTTPS+www erzwingen, Kompression, Caching
cat > "$OUT/.htaccess" <<'HTACCESS'
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^ https://www.obscura-berlin.de%{REQUEST_URI} [L,R=301]

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml text/plain application/xml
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
</IfModule>

ErrorDocument 404 /index.html
HTACCESS

echo "Fertig: $OUT"
