/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./public/**/*.html",
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'ev-1': '#5f2a62',
        'ev-2': '#a976c3',
        'ct-green': '#a0de59',
        'ev-4': '#466b5a',
        'ev-5': '#f5c024',
        'ev-6': '#201B22',
        'ev-7': '#161912',
        'ev-8': '#F7F7ED',
        'ct-purple': '#821CBA'
      }
    }
  },
  plugins: [],
}