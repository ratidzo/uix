import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          100: '#FAFAFA',
          200: '#CBD4E6',
          300: '#A1B0CC',
          400: '#7C8DB0',
          500: '#657491',
          600: '#6E7491',
          700: '#52556F',
          800: '#36374A',
          900: '#27273F'
        }, 

        primary: {
          'purple-blue': '#605DEC',
          'blue': '#407AEA',
          'purple-dark': '#1513A0'
        }, 

        accent: {
          'purple-light': '#BCBAF7',
          'purple-extralight': '#E9E8FC',
          'purple-white': '#F6F6FE',
          'pink': 'EB568C'
        },

        status: {
          'green': '#00BC9A',
          'dark-green': '#00B666',
          'danger': 'EB5757'
        }
      }
    },
  },
  plugins: [],
}
export default config
