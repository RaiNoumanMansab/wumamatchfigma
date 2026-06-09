import defaultTheme from 'tailwindcss/defaultTheme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: {
          50:  '#F9F8F4',
          100: '#F9F8F4',
          200: '#0F9598',
          300: '#0F9598',
          400: '#0F9598',
          500: '#0F9598',
          600: '#0F9598',
          700: '#1C1B19',
          800: '#1C1B19',
          900: '#1C1B19',
          950: '#1C1B19',
        },
        gold: {
          DEFAULT: '#9B7A5B',
          light:   '#9B7A5B',
          dark:    '#9B7A5B',
          subtle:  '#F9F8F4',
        },
        brand: {
          teal:    '#0F9598',
          accent:  '#0F9598',
          gold:    '#9B7A5B',
          cream:   '#F9F8F4',
          sand:    '#F9F8F4',
          white:   '#FFFFFF',
          darkTeal: '#1C1B19',
          charcoal: '#1C1B19',
        },
      },
      boxShadow: {
        'glow-teal':  '0 0 25px rgba(15,149,152,0.25)',
        'glow-gold': '0 0 25px rgba(155,122,91,0.25)',
        'soft': '0 4px 20px rgba(28, 27, 25, 0.05)',
        'luxury': '0 20px 40px rgba(28, 27, 25, 0.08)',
      },
      backgroundImage: {
        'radial-teal':  'radial-gradient(ellipse at center, rgba(15,149,152,0.15) 0%, transparent 70%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(155,122,91,0.12) 0%, transparent 70%)',
      },
      borderColor: {
        'teal-dim':   'rgba(15,149,152,0.12)',
        'teal-mid':   'rgba(15,149,152,0.3)',
        'gold-dim':   'rgba(155,122,91,0.12)',
      },
      animation: {
        'float-heart': 'floatHeart linear infinite',
        'shimmer':     'shimmer 3s linear infinite',
        'soft-pulse':  'softPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
