# Deploy – Obscura Website (Next.js 15)

## Schnellster Weg: Vercel (empfohlen)
1. https://vercel.com/new öffnen, mit GitHub anmelden
2. Repo `obscura-webseite` importieren
3. Branch wählen: `claude/obscura-berlin-relaunch-mwlxk4` (oder vorher in `main` mergen)
4. Environment Variable setzen:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = <euer Web3Forms Access Key>
5. Deploy klicken → Live-URL wie `obscura-xxx.vercel.app`
6. Danach Domain `www.obscura-berlin.de` unter Settings → Domains verbinden

Framework wird automatisch als Next.js erkannt.
Build: `npm run build` · Output: automatisch.

## Lokal ansehen
    npm install
    npm run dev      # http://localhost:3000
