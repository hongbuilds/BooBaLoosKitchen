import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f7f7f7',
          200: '#e5e7eb',
          300: '#d1d5db',
          500: '#6b7280',
          600: '#4b5563',
          900: '#111827'
        }
      }
    },
  },
  plugins: [typography],
}
