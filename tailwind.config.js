/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./"],
  theme: {
    extend: {

=======
  content: ["./src/html/*.html.", "./index.html"],
  theme: {
    extend: {
        backgroundImage: {
          'hero-pattern': "url('/assetes/BG.png')",
          'hero-pattern': "url('/assetes/bek.png')",
          'hero-pattern':"url('/assetes/rasm.jpg')",
        }
>>>>>>> 0258896a72cdc2668211f5e84f9d03e6e4cad68f
    },
  },
  plugins: [],
}