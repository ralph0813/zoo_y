const defaultConfig = require('tailwindcss/defaultConfig')
const defaultSpacing = defaultConfig.theme.spacing

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'iphone': '375px',
        'xs': '500px',
      },
      height: {
        120: '30rem',
        160: '40rem',
      },
      minHeight: {
        ...defaultSpacing,
      },
      colors: {
        brand: {
          light: '#76b3e8',
          DEFAULT: '#64a6d4',
          dark: '#4c91ba',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@rvxlab/tailwind-plugin-ios-full-height'),
  ],
}
