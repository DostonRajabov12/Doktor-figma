/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.html.", "./index.html"],
  theme: {
    extend: {
        backgroundImage: {
          'hero-pattern': "url('/assetes/BG.png')",
          'hero-pattern': "url('/assetes/bek.png')",
          'hero-pattern':"url('/assetes/rasm.jpg')",
        }
    },
  },
  plugins: [],
}