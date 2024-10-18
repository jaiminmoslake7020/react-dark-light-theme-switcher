/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/**/*.{ts,tsx}", "./playground/**/*.{ts,tsx}", "index.html"],
  theme: {
    extend: {
      keyframes: {
        oneTimeEscape: {
          '0%': { transform: 'translateY(-2rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        oneTimeEscapeL: {
          '0%': { transform: 'translateX(-2rem)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        oneTimeEscapeR: {
          '0%': { transform: 'translateX(2rem)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
      },
      animation: {
        oneTimeEscape: 'oneTimeEscape 1s linear',
        oneTimeEscapeL: 'oneTimeEscapeL 1s linear',
        oneTimeEscapeR: 'oneTimeEscapeR 1s linear',
      },
      colors: {
        "theme-btn": {
          bg: "rgb(var(--color-theme-btn-bg) / <alpha-value>)",
          text: "rgb(var(--color-theme-btn-text) / <alpha-value>)",
          border: "rgb(var(--color-theme-btn-border) / <alpha-value>)",
          active: {
            bg: "rgb(var(--color-theme-btn-active-bg) / <alpha-value>)",
            text: "rgb(var(--color-theme-btn-active-text) / <alpha-value>)",
            border: "rgb(var(--color-theme-btn-active-border) / <alpha-value>)",
          }
        },
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)"
      }
    },
  },
  plugins: [],
}
