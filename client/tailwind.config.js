/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{html,js,jsx}"
          ],
  theme: {
    extend: {backgroundImage: {
      'cover-pic': "url('/src/assets/background.jpg')",
    },
  },
  },
  plugins: [],
}