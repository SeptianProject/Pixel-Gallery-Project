/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '430px',
      md: '784px',
      lg: '1280px',
    },
    extend: {
      colors: {
        'dark': '#1E1E1E',
        'secondary': '#6E6D7A',
        'hijau': '#364C31',
        'darkBlue': '#3D3D4E'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'right': '8px 5px 6px 0 rgba(0, 0, 0, 0.3)',
        'bottom-green': '0 4px 1px 1px rgba(54, 76, 49, 1)',
        'bottom-dark': '0 4px 2px 0.5px rgba(30, 30, 30, 0.8)'
      }
      // animation: {
      //   'slide-in-left': 'slideInLeft 0.8s ease-out',
      //   'slide-in-right': 'slideInRight 0.8s ease-out',
      //   'slide-in-bottom': 'slideInBot 0.8s ease-out'
      // },
      // keyframes: {
      //   slideInLeft: {
      //     '0%': { transform: 'translateX(-20%)', opacity: 0 },
      //     '100%': { transform: 'translateX(0)', opacity: 1 },
      //   },
      //   slideInRight: {
      //     '0%': { transform: 'translateX(20%)', opacity: 0 },
      //     '100%': { transform: 'translateX(0)', opacity: 1 }
      //   },
      //   slideInBot: {
      //     '0%': { transform: 'translateY(40%)', opacity: 0 },
      //     '100%': { transform: 'translateY(0)', opacity: 1 },
      //   }
      // }
    },
  },
  plugins: [],
}

