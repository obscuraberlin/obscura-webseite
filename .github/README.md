# Hinweis zum Deploy

Die Website wird **nicht** über GitHub Actions ausgeliefert.

Hostinger baut und startet die Anwendung selbst: Bei jedem Push auf
`claude/obscura-berlin-relaunch-mwlxk4` zieht Hostinger den Stand,
führt `npm run build` aus und startet die Node-Anwendung neu.
Einstellung: hPanel → Websites → Verwalten → Erweitert → GIT.

Der frühere FTP-Workflow wurde entfernt. Er scheiterte bei jedem Push,
weil die Zugangsdaten nie hinterlegt waren, und hätte beim Hochladen
die laufende Anwendung überschrieben.
