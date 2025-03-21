/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "custom-xl": "1150px",
      },

      keyframes: {
        checkmark: {
          "0%": { "stroke-dashoffset": -30 },
          "100%": { "stroke-dashoffset": 200 },
        },
      },
      animation: {
        checkmark: "checkmark 1s ease-in-out normal",
      },
      colors: {
        default: "rgb(var(--color-default) / <alpha-value>)",
        neutral: "rgb(var(--color-neutral) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        "dark-gray": "#333",

        "partner-text": "#EE8E2E",

        "dnt-orange": {
          50: "#fef9f1",
          100: "#fbedd5",
          200: "#f8d2a0",
          300: "#f5b261",
          400: "#f38620",
          500: "#d76609",
          600: "#b64a07",
          700: "#843006",
          800: "#591f08",
          900: "#321306",
        },
      },
    },
    fontFamily: {
      sans: [
        '"InterVariable"',
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ["ui-serif", "Georgia"],
      mono: [
        '"JetBrains Mono"',
        "monospace",
        "ui-monospace",
        "Menlo",
        "Monaco",
        '"Cascadia Mono"',
        '"Segoe UI Mono"',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Fira Mono"',
        '"Droid Sans Mono"',
        '"Courier New"',
      ],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
