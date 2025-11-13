/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2ff',
          200: '#b9e3ff',
          400: '#93c5fd',
          500: '#82caff',
          600: '#60a5fa',
          700: '#3b82f6',
          800: '#2563eb',
          900: '#1e40af',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2ff',
          500: '#82caff',
          600: '#60a5fa',
          700: '#3b82f6',
          900: '#1e40af',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(12px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(130, 202, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(130, 202, 255, 0.4)' },
        },
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      lineHeight: {
        tighter: '1.1',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neumorphism': '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        'neumorphism-inset': 'inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff',
        'glow': '0 0 20px rgba(130, 202, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(130, 202, 255, 0.4)',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}