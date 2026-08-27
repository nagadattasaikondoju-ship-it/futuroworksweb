/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFFF00',
          50: '#FFFFE0',
          100: '#FFFFB8',
          200: '#FFFF85',
          300: '#FFFF52',
          400: '#FFFF1F',
          500: '#FFFF00',
          600: '#D0D006',
          700: '#A6A600',
          800: '#737300',
          900: '#474700',
          muted: '#D0D006'
        },
        brand: {
          yellow: '#FFFF00',
          yellowMuted: '#D0D006',
          black: '#000000',
          darkBg: '#050505',
          card: '#0D0D0D',
          cardElevated: '#141414',
          border: '#1F1F1F',
          borderLight: '#2C2C2C',
          cream: '#DEDBC8',
          textLight: '#F5F5F5',
          textSecondary: '#A0A0A0'
        }
      },
      fontFamily: {
        sans: ['Almarai', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(255,255,0,0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(255,255,0,0.6))' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
