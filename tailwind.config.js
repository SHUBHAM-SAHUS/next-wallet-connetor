/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx,html,css,scss}',
    './src/components/**/*.{js,jsx,ts,tsx,html,css,scss}',
    './src/containers/**/*.{js,jsx,ts,tsx,html,css,scss}',
  ],
  darkMode: true,
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [require('tw-elements/dist/plugin')],
};
