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
          50:  'rgb(var(--color-brand-cream) / <alpha-value>)',
          100: 'rgb(var(--color-brand-cream) / <alpha-value>)',
          200: 'rgb(var(--color-brand-teal) / <alpha-value>)',
          300: 'rgb(var(--color-brand-teal) / <alpha-value>)',
          400: 'rgb(var(--color-brand-teal) / <alpha-value>)',
          500: 'rgb(var(--color-brand-teal) / <alpha-value>)',
          600: 'rgb(var(--color-brand-teal) / <alpha-value>)',
          700: 'rgb(var(--color-brand-charcoal) / <alpha-value>)',
          800: 'rgb(var(--color-brand-charcoal) / <alpha-value>)',
          900: 'rgb(var(--color-brand-charcoal) / <alpha-value>)',
          950: 'rgb(var(--color-brand-charcoal) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--color-brand-gold) / <alpha-value>)',
          light:   'rgb(var(--color-brand-gold) / <alpha-value>)',
          dark:    'rgb(var(--color-brand-gold) / <alpha-value>)',
          subtle:  'rgb(var(--color-brand-cream) / <alpha-value>)',
        },
        brand: {
          teal:    'rgb(var(--color-brand-teal) / <alpha-value>)',
          accent:  'rgb(var(--color-brand-teal) / <alpha-value>)',
          gold:    'rgb(var(--color-brand-gold) / <alpha-value>)',
          cream:   'rgb(var(--color-brand-cream) / <alpha-value>)',
          sand:    'rgb(var(--color-brand-cream) / <alpha-value>)',
          white:   'rgb(var(--color-white) / <alpha-value>)',
          darkTeal: 'rgb(var(--color-brand-dark-teal) / <alpha-value>)',
          charcoal: 'rgb(var(--color-brand-charcoal) / <alpha-value>)',
          accentGold: 'rgb(var(--color-accent-gold) / <alpha-value>)',
          tealDeep: 'rgb(var(--color-brand-teal-deep) / <alpha-value>)',
          tealMid: 'rgb(var(--color-brand-teal-mid) / <alpha-value>)',
        },
      },
      boxShadow: {
        'glow-teal':  '0 0 25px rgba(var(--color-brand-teal), 0.25)',
        'glow-gold': '0 0 25px rgba(var(--color-brand-gold), 0.25)',
        'soft': '0 4px 20px rgba(var(--color-brand-charcoal), 0.05)',
        'luxury': '0 20px 40px rgba(var(--color-brand-charcoal), 0.08)',
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
