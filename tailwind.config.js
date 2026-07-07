/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        "paper-alt": "#FAFAFA",
        ink: "#111111",
        "ink-soft": "#4A4A4A",
        void: "#0A0A0A",
        "void-alt": "#141414",
        fog: "#F5F5F5",
        "fog-soft": "#A0A0A0",
        blue: { DEFAULT: "#0066FF", glow: "#3D8BFF" },
        magenta: { DEFAULT: "#FF007F", glow: "#FF4FD8" },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        giant: "clamp(3.2rem, 10vw, 11rem)",
        display: "clamp(2.5rem, 7vw, 6rem)",
        h2: "clamp(2rem, 5vw, 3.5rem)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-90deg) scale(0.6)", opacity: "0" },
          "100%": { transform: "rotate(0deg) scale(1)", opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "rotate-in": "rotateIn 0.5s ease",
      },
    },
  },
  plugins: [],
};
