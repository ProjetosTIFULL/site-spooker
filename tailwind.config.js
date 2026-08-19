/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          bg:        '#0a0a0a',
          surface:   '#111111',
          card:      '#1a1a1a',
          primary:   '#7c3aed',
          secondary: '#a855f7',
          text:      '#f1f5f9',
          muted:     '#94a3b8',
        },
      },
    },
  },
  plugins: [],
}
