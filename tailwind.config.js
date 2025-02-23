/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '420px', // adjust pixel value as needed
    },
  },
  plugins: [],
}

