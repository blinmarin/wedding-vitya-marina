/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base': '#F5F5F5',
        'accent': '#FF6B8B',
        'mint': '#2DE2A0',
        'deep': '#0A2342',
        'sunny': '#FFD166',
      },
      fontFamily: {
        'impact': ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        'display': ['Lobster', 'cursive'],
        'body': ['Nunito', 'sans-serif'],
        'pixel': ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'pop': 'pop 0.3s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        pop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
