import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        gold: {
          // Accent scale. Name kept as "gold" so existing classes keep working; values are the blue palette.
          // 200 / 500 / 700 are the supplied #BBE1FA / #3282B8 / #0F4C75
          50: "#eef7fe",
          100: "#dceffc",
          200: "#bbe1fa",
          300: "#8cc6ee",
          400: "#5ba5d6",
          500: "#3282b8",
          600: "#1f6697",
          700: "#0f4c75",
          800: "#0b3a5b",
          900: "#082b44",
        },
        obsidian: {
          50: "#f2f6f9",
          100: "#dde6ec",
          200: "#bccbd5",
          300: "#8ca0ad",
          400: "#5e7482",
          500: "#3a4d59",
          600: "#26363f",
          700: "#1b262c",
          800: "#0f161b",
          900: "#0a0f13",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url('/images/noise.svg')",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
