/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#F3134E',
      'secundary': '#FEBA59',
      'personBlack': '#212121',
      'personWhite': '#F0F0F0',
      'red': '#A51E15',
      'black': '#000',
      'white': '#fff',
      'gray': {
        200 : '#e5e7eb',
        300 : '#d1d5db',
        500 : '#6b7280',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
