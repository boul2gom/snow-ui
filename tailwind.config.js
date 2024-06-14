/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: { extend: {} },
  plugins: [],
}