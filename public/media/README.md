# Medien bereitstellen (Bilder & Videos)

Lege deine echten Dateien einfach in die passenden Unterordner. Alles unter
`public/` ist danach live unter `https://www.obscura-berlin.de/media/...`
erreichbar.

## Ordner & Verwendung

| Ordner                 | Wofür                                             |
|------------------------|---------------------------------------------------|
| `hero/`                | 4 Vorschau-Kacheln oben im Hero (hochformat 9:16) |
| `reels/`               | Reels für die Content-Bibliothek                  |
| `filme/`               | Imagefilme / Unternehmensfilme                    |
| `projekte/`            | Projekt-Cases (Rolls-Royce, Riller & Schnauck …)  |
| `team/`                | Team-/Portraitfotos (hochformat 4:5)              |
| `testimonials/`        | Video-Testimonials + Kundenstimmen                |
| `logos/`               | Kundenlogos als SVG/PNG                            |
| `studio/`              | Office- & Fotostudio-Aufnahmen                     |
| `og/`                  | Social-Sharing-Bild (falls eigenes gewünscht)     |

## Empfohlene Formate

- **Bilder:** WebP oder AVIF (Fallback JPG). Breite ~1600px reicht für Kacheln.
- **Videos:** MP4 (H.264) für breite Kompatibilität, zusätzlich WebM optional.
  Immer mit Vorschaubild (Poster-JPG gleicher Name), z. B.
  `reels/reel-1.mp4` + `reels/reel-1.jpg`.
- Videos NICHT riesig: möglichst < 5–8 MB pro Clip, damit die Seite schnell bleibt.

## Wie werden sie eingebunden?

Die Platzhalter-Kacheln akzeptieren echte Medien über `src` (Bild) bzw.
`video` + `poster`. Sag mir einfach, welche Datei zu welcher Stelle gehört –
oder benenne sie nach dem Schema unten, dann verdrahte ich sie:

- `hero/reel-1..4.jpg`
- `team/maher.jpg`, `team/marcel.jpg`
- `projekte/rolls-royce.jpg`, `projekte/riller-schnauck.jpg`,
  `projekte/sjs-carstyling.jpg`, `projekte/kensington.jpg`
- `reels/reel-1.mp4` (+ `reel-1.jpg`), `filme/imagefilm.mp4` (+ `.jpg`)
- `logos/rolls-royce.svg`, `logos/riller-schnauck.svg` …
