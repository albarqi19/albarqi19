/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5A3D',
        secondary: '#4A7C59',
        accent: '#F7C52D',
        background: '#F8FAFC',
        text: '#1A202C',
        errors: '#E53E3E',
        success: '#38A169',
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
        serif: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
