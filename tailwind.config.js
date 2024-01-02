/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      brightness:{
        '1000':'11'
      },
      colors:{
        'bgDark':'#141D2F',
        'textColor':'#FFFFFF',
        'lightBlue':'#0079FF',
        'lightBlueHover':'#60ABFF',

        'bgMain':'#1E2A47',
        'grisEspe':'#697C9A',
        'bgLight':'#F6F8FF',

        'textLight':'#4B6A9B',
        'textLight2':'#2B3442',        
        'textTitle':'#2B3442',        
      },
      fontFamily:{
        'monoSpace':['Space Mono', 'monospace']
      },
      minWidth:{
        'content':'min-content'
      }
    },
  },
  plugins: [],
}
