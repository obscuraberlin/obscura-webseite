import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Farbsystem laut Master-Prompt
        canvas: "#F8F8F5", // Warm White (Primär)
        surface: "#FFFFFF", // Sekundär
        soft: "#F0F0EC", // Soft Grey
        line: "#E5E5DF", // Border
        ink: "#101010", // Text
        lime: "#C7FF18", // Signature Color
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Hero-Typografie
        hero: ["clamp(2.6rem, 7vw, 6.2rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        display: ["clamp(2rem, 4.5vw, 3.6rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "20px",
        xl2: "28px",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
