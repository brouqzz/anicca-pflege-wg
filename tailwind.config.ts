import type { Config } from "tailwindcss";

/**
 * Tailwind-Konfiguration für Anicca Pflege WG
 * Design: Premium, ruhig – Beige, Salbei, Blau, Gold
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Basis (aus globals.css Variablen – eine Quelle für Farben)
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Premium-Palette: direkt nutzbar z.B. bg-sage-100, text-gold-600
        beige: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#e8dfd2",
          300: "#d4c4b0",
          400: "#b8a088",
          500: "#9c8268",
        },
        sage: {
          50: "#f4f6f4",
          100: "#e3e8e3",
          200: "#c7d1c6",
          300: "#a3b2a1",
          400: "#7d8f7a",
          500: "#5f6f5c",
        },
        navy: {
          50: "#f0f2f5",
          100: "#dde1e8",
          200: "#b8c1cf",
          300: "#8a9aaf",
          400: "#5c7190",
          500: "#3d5170",
          600: "#2d3d58",
          700: "#243247",
        },
        gold: {
          50: "#fdf9f0",
          100: "#f9efd6",
          200: "#f2dcac",
          300: "#e8c278",
          400: "#dba54a",
          500: "#c98f2e",
          600: "#a87224",
        },
      },
      fontFamily: {
        // Serif für Headlines (elegant, vertrauensvoll)
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        // Sans für Fließtext (gut lesbar)
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1" }],
        "display": ["2.5rem", { lineHeight: "1.2" }],
        "lead": ["1.25rem", { lineHeight: "1.6" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      boxShadow: {
        "soft": "0 4px 24px -4px rgba(0, 0, 0, 0.08)",
        "premium": "0 8px 40px -8px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};
export default config;
