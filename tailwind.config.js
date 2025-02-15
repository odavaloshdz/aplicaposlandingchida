/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0511F2',    // color-theme_logo-1
        secondary: '#2A398C',  // color-theme_logo-2
        accent: '#04B2D9',     // color-theme_logo-3
        highlight: '#F25835',  // color-theme_logo-4
        dark: '#0D0D0D',       // color-theme_logo-5
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'fadeInUp': 'fadeInUp 1s ease-out forwards',
        'slideIn': 'slideIn 1s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.2)',
          },
        },
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        'none': 'none',
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};