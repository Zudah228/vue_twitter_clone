module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true,
    },
    darkMode: false,
    extend: {},
    colors: {
      blue: '#1DA1F2',
      darkblue: '#2795D9',
      lightblue: '#EFF9FF',
      dark: '#657786',
      light: '#AAB8C2',
      lighter: '#E1E8ED',
      lightest: '#F5F8FA',
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
