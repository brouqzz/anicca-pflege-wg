import type { Config } from "tailwindcss";

/**
 * Anicca Pflege WG — Editorial-Luxury Design System
 * Warm paper backgrounds · ink typography · clay accent · espresso drama
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
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* Warm paper / bone — backgrounds */
        paper: {
          50:  "#fcfbf7",
          100: "#f7f4ed",
          200: "#efeadf",
          300: "#e3dccb",
          400: "#d3c8b2",
        },

        /* Warm ink — text & deep neutrals */
        ink: {
          50:  "#f4f2ee",
          100: "#e4e0d8",
          200: "#c4bcae",
          300: "#9c9281",
          400: "#74695a",
          500: "#544b3f",
          600: "#3a332a",
          700: "#28231c",
          800: "#1a1611",
          900: "#110e0a",
        },

        /* Clay — the single warm accent */
        clay: {
          50:  "#f8efe8",
          100: "#eed9c9",
          200: "#ddb89e",
          300: "#c8946f",
          400: "#b3744c",
          500: "#995b38",
          600: "#7d4a2e",
        },

        /* Espresso — dramatic dark panels */
        espresso: {
          DEFAULT: "#14110c",
          800: "#1c1812",
          700: "#272118",
        },

        /* ── Legacy families (kept so /haus & /rechtliches stay intact) ── */
        cream:  { 50:"#fefcf8",100:"#faf6ef",200:"#f3ebe0",300:"#e8ddd0" },
        beige:  { 50:"#faf8f5",100:"#f5f0e8",200:"#e8dfd2",300:"#d4c4b0",400:"#b8a088",500:"#9c8268" },
        forest: { 50:"#f2f5f2",100:"#e0e8df",200:"#b8ccb5",300:"#8aab86",400:"#5e8459",500:"#3d6338",600:"#2f4d2c",700:"#213820" },
        sage:   { 50:"#f4f6f4",100:"#e3e8e3",200:"#c7d1c6",300:"#a3b2a1",400:"#7d8f7a",500:"#5f6f5c" },
        charcoal:{50:"#f5f4f2",100:"#e8e6e2",200:"#cdc9c1",300:"#aba59a",400:"#857d70",500:"#6b6358",600:"#524c43",700:"#3b362f",800:"#28241e",900:"#1a1714" },
        navy:   { 50:"#f0f2f5",100:"#dde1e8",200:"#b8c1cf",300:"#8a9aaf",400:"#5c7190",500:"#3d5170",600:"#2d3d58",700:"#243247" },
        stone:  { 50:"#faf9f7",100:"#f2f0ed",200:"#e4e0d9",300:"#cdc7bc" },
        gold:   { 50:"#fdf9f0",100:"#f9efd6",200:"#f2dcac",300:"#e8c278",400:"#dba54a",500:"#c98f2e",600:"#a87224" },
      },

      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "display-2xl": ["clamp(3.5rem, 11vw, 8.5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(2.75rem, 7vw, 5.5rem)", { lineHeight: "1.0",  letterSpacing: "-0.025em" }],
        "display-lg":  ["clamp(2.25rem, 5vw, 4rem)",   { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display":     ["clamp(2rem, 3.5vw, 3rem)",    { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "display-sm":  ["clamp(1.625rem, 2.5vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "kicker":      ["0.72rem", { lineHeight: "1", letterSpacing: "0.28em" }],
        "lead":        ["1.3rem", { lineHeight: "1.7" }],
      },

      letterSpacing: {
        widest2: "0.28em",
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "36": "9rem",
        "44": "11rem",
      },

      maxWidth: {
        "8xl": "88rem",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      boxShadow: {
        "soft":    "0 2px 16px -4px rgba(26,22,17,0.08)",
        "card":    "0 18px 60px -24px rgba(26,22,17,0.22)",
        "premium": "0 32px 90px -36px rgba(26,22,17,0.32)",
        "lift":    "0 40px 120px -40px rgba(26,22,17,0.45)",
      },

      animation: {
        "fade-up":   "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in":   "fadeIn 0.6s ease-out forwards",
        "marquee":   "marquee 38s linear infinite",
        "kenburns":  "kenburns 16s ease-in-out infinite alternate",
        "morph":     "morph 16s ease-in-out infinite",
        "morph-slow":"morph 22s ease-in-out infinite reverse",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenburns: {
          "0%":   { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%", transform: "rotate(0deg) scale(1)" },
          "33%":      { borderRadius: "58% 42% 38% 62% / 63% 51% 49% 37%", transform: "rotate(12deg) scale(1.06)" },
          "66%":      { borderRadius: "37% 63% 56% 44% / 49% 62% 38% 51%", transform: "rotate(-10deg) scale(0.97)" },
        },
      },
      transitionTimingFunction: {
        "lux": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: { "400": "400ms", "600": "600ms" },
    },
  },
  plugins: [],
};

export default config;
