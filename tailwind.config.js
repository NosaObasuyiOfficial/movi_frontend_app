/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        movi_green: "#68C939",
      },
      brightness: {
        '1': '0.8',
      },
      fontFamily:{
        movi_font_one: "Requiem",
        movi_font_two: "Fredericka-the-great",
        movi_font_three: "Open-Sans"
      },
      backgroundImage: {
        'black-fade': 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.85) 100%)',
        'fade-dark-gradual': 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.5) 63%, rgba(0,0,0,0.2) 78%, rgba(0,0,0,0) 90%)',
      },
      screens: {
        eight_h_screen: { 'max': '835px' },
        six_h_screen: { 'max': '700px' },
        five_h_screen: { 'max': '500px' },
        four_h_screen: { 'max': '400px' },
        three_h_screen: { 'max': '320px' },
      },
    },
  },
  plugins: [],
}

