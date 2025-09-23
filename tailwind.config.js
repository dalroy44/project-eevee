/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7F8FC',
        'card': '#FFFFFF',
        'text-primary': '#1A202C',
        'text-secondary': '#A0AEC0',
        'accent': '#6B46C1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
