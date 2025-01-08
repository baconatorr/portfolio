/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        glow: '0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff',
      },
    },
  },
  plugins: [],
}
