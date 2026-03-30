/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B1224',
          800: '#111A2F',
          700: '#16223C'
        },
        accent: {
          500: '#FF6B4A',
          400: '#FF8A6B',
          300: '#FFC7B4'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 10px 80px rgba(255, 107, 74, 0.15)',
        panel: '0 15px 50px rgba(0, 0, 0, 0.35)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 0.8 }
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        gradientShift: 'gradientShift 10s ease infinite'
      }
    }
  },
  plugins: []
};
