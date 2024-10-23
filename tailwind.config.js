/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '27FB6B',
        secondary: {
          100: '#CD4154',
          200: '#888883',
          300: '#F8EFEF',
        }
      },
      fontFamily: {
        body: ['Raleway']
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '60%': { transform: 'translateY(-20px)' }, // Adjust for how much bounce you want
        },
      },
      animation: {
        bounce: 'bounce 4s infinite', // You can control the duration and repetition here
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
