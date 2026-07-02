import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1FA870',
          dark: '#0E7A4F',
          darker: '#0A5C3B',
          light: '#E7F6EE',
          pale: '#F4FBF7',
        },
        ink: '#1B2620',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-garamond)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
