/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '32px',
          lg: '64px',
        }
      },
      fontFamily: {
        "poppins": ['Poppins'],
      },
      colors: {
        'primary': '#CBA772',
        'sec': '#212B35'
      }
    },
  },
  plugins: [],
}

