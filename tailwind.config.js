/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Rowdies", 'serif'],
        lora: ["Crete Round", 'serif'],
      },
    },
  },
  plugins: [],
}