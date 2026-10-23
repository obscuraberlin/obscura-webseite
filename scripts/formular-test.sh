#!/usr/bin/env bash
# Startet die gebaute Next-Anwendung und laesst den Formular-Funktionstest
# dagegen laufen. Vorher muss 'npm run build' gelaufen sein.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
printf '#!/bin/sh\ncat > "%s/mail.txt"\n' "$TMP" > "$TMP/sendmail.sh"
chmod +x "$TMP/sendmail.sh"
npx next start -p 8790 >"$TMP/next.log" 2>&1 &
PID=$!
trap 'kill $PID 2>/dev/null; rm -rf "$TMP"' EXIT
sleep 8
node "$ROOT/scripts/formular-test.js" http://127.0.0.1:8790
ERG=$?
exit $ERG
