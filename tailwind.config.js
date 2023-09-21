/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '30': '30deg',
        '60': '60deg',
      },
    },
    fontFamily: {
      signature: ['Poppins'],
    }
  },
  plugins: [
    require('tailwindcss-3d'): NodeRequire

  ],
}

