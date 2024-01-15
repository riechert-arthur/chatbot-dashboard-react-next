import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body-gradient': 'conic-gradient(at right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))'
      },
    },
  },
  plugins: [],
}
export default config
