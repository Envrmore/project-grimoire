/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins",
      },
      backgroundImage: {
        'pattern1': "url('/media/pattern1.svg')",
        'pattern2': "url('/media/pattern2.svg')",
        'sliderbg': "url('/media/sliderbg.svg')",
        'contactbg': "url('/media/contactbg.svg')",
      }
    },
  },
  plugins: [],
}

