/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: 0, transform: 'translateY(40px) scale(0.95)' },
          '80%':  { opacity: 1, transform: 'translateY(-4px) scale(1.02)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}

