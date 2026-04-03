/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0C10',
        card: 'rgba(31, 40, 51, 0.6)',
        primary: '#66FCF1',
        secondary: '#45A29E',
        text: '#C5C6C7',
        textDark: '#1a1a2e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
