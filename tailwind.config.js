/** @type {import('tailwindcss').Config} */
export default {
  content:  ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        18: 'repeat(18, minmax(0, 1fr))',
        19: 'repeat(19, minmax(0, 1fr))'
      }
    },
    fontSize: {
      'nan': '0.4rem',
      'peq': '0.5rem',
      'med': '0.65rem',
    }
  },
  plugins: [],
}

