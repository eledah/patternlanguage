/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    fontFamily: {
      'sans': ['Sahel', 'system-ui'],
      'serif': ['Sahel', 'Georgia'],
      'mono': ['Sahel', 'SFMono-Regular'],},
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-rtl')],
}

