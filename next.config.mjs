/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Bestehende URLs des alten Auftritts beim Relaunch abfangen (301).
    // PLACEHOLDER: Mit den tatsächlichen Alt-URLs von obscura-berlin.de ergänzen,
    // sobald diese vorliegen. Beispiele:
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
