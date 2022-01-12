module.exports = {
  content: ['index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), //
    require('@tailwindcss/forms'),
  ],
}
