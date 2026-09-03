/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    // Die Startseite wird als fertige, in sich geschlossene Seite aus
    // public/site.html ausgeliefert (statt der alten Komponenten-Startseite).
    return {
      beforeFiles: [{ source: "/", destination: "/site.html" }],
    };
  },
  async redirects() {
    // Bestehende URLs des alten Auftritts beim Relaunch abfangen (301),
    // damit Rankings/Backlinks erhalten bleiben. Bei Bedarf um weitere
    // konkrete Alt-URLs der bisherigen Website ergänzen.
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/leistungen", destination: "/#leistungen", permanent: true },
      { source: "/projekte", destination: "/#projekte", permanent: true },
      { source: "/ueber-uns", destination: "/#team", permanent: true },
      { source: "/kontakt", destination: "/#kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
