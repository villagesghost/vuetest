/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "linear-gradient(0deg, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.68)), url('/images/bg.png')",
        project: "url('/images/project.png')",
        btnyellow: "linear-gradient(126deg, #fff787 24%, #e6b82b 76%, #c17d22 100%)",
        yellowUnder: "linear-gradient(0deg, #FFF787 26.953125%, rgba(255,247,135,0.6310160427807487) 53.90625%, rgba(187,213,214,0) 100%)",
        footer: "url('/images/ironpatern.png')"
      },
      borderWidth: {
        3: '3px',
        5: '5px'
      },
      colors: {
        gray: {
          8: '#8e8e8f',
          'ef': '#eff1f2'
        },
        yellow: {
          DEFAULT: '#FFF787',
          'f1': '#F1ECD3',
          'ec': '#ECD567',
          'e6': '#E6B82B',
          'ff': '#fff787'
        },
        pink: {
          DEFAULT: '#a0138e'
        }
      },
      fontFamily: {
        dinneuze: ["cust1", "sans-serif"],
        forum: ["cust2", "sans-serif"],
        cust3: ["cust3", "sans-serif"],
        avenir: ["cust4", "sans-serif"],
      },
      fontSize: {
        11: '0.688rem',
        15: '0.938rem',
        38: '2.375rem',
        40: '2.5rem',
        50: '3.125rem',
        55: '3.438rem'
      },
      height: {
        50: '3.125rem'
      },
      maxWidth: {
        310: '19.375rem',
        585: '36.563rem',
        616: '38.5rem'
      },
      minHeight: {
        380: '23.75rem',
        530: '33.125rem'
      },
      strokeWidth: {
        3: '3px'
      },
      opacity: {
        23: 0.23,
        34: 0.34
      }
    },
  },
  plugins: [],
}
