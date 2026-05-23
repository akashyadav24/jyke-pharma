/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe1fe',
          300: '#93cefd',
          400: '#60b1fa',
          500: '#3b91f6',
          600: '#2374ec',
          700: '#1c5dd8',
          800: '#1d4daf',
          900: '#1e4389',
          950: '#172a55',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        ink: {
          900: '#0b1b34',
          800: '#16263f',
          700: '#243650',
          600: '#3b4a66',
          500: '#5a6a86',
          400: '#8390a8',
          300: '#b6bfcf',
          200: '#d8dde6',
          100: '#eef1f6',
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15, 42, 99, 0.08)',
        card: '0 12px 40px rgba(15, 42, 99, 0.10)',
        glow: '0 20px 60px rgba(35, 116, 236, 0.25)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(1200px 600px at 80% -10%, rgba(96,177,250,0.20), transparent 60%), radial-gradient(900px 500px at -10% 30%, rgba(6,182,212,0.12), transparent 60%)',
        'brand-gradient':
          'linear-gradient(135deg, #1c5dd8 0%, #2374ec 50%, #06b6d4 100%)',
        'soft-gradient':
          'linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-12px) translateX(6px)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
