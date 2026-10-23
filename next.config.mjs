/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    /* Sicherheits-Header. Sie muessen hier stehen und nicht in einer
       .htaccess: die Seite laeuft als Node-Anwendung hinter Passenger,
       die .htaccess im Dokumentenstamm enthaelt nur die Passenger-
       Konfiguration und wird von Hostinger verwaltet. */
    const sicherheit = [
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      {
        key: "Permissions-Policy",
        value: "geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), interest-cohort=()",
      },
      {
        /* Die Startseite und die Leistungsseiten enthalten eingebettete
           Skripte und Stile, deshalb ist 'unsafe-inline' noetig. Alles
           Uebrige ist auf die eigene Herkunft begrenzt. */
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'self'",
          "form-action 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob:",
          "media-src 'self' data: blob:",
          "font-src 'self' data:",
          "connect-src 'self' https://api.web3forms.com https://formsubmit.co",
          "frame-src 'none'",
          "worker-src 'self' blob:",
          "manifest-src 'self'",
          "upgrade-insecure-requests",
        ].join("; "),
      },
    ];

    return [
      { source: "/:pfad*", headers: sicherheit },
      {
        /* Medien und Schriften aendern sich nicht mehr: dauerhaft
           zwischenspeichern, das entlastet den Server bei Lastspitzen. */
        source: "/media/:datei*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
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
