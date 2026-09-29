#!/usr/bin/env bash
# Startet einen lokalen PHP-Server ueber dem Projekt und laesst den
# Formular-Funktionstest dagegen laufen. Der Mailversand wird dabei
# abgefangen und nicht wirklich verschickt.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
printf '#!/bin/sh\ncat > "%s/mail.txt"\n' "$TMP" > "$TMP/sendmail.sh"
chmod +x "$TMP/sendmail.sh"
php -d sendmail_path="$TMP/sendmail.sh" -S 127.0.0.1:8790 -t "$ROOT" >"$TMP/php.log" 2>&1 &
PID=$!
trap 'kill $PID 2>/dev/null; rm -rf "$TMP"' EXIT
sleep 2
node "$ROOT/scripts/formular-test.js" http://127.0.0.1:8790
ERG=$?
exit $ERG
