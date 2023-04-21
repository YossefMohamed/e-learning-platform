/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3d5a80",
        secondary: "#4f73a4",
        tertiary: "#00865e",
        light: "#fff",
        tprimary: "#000",
        tsecondary: "#4a4a96",
        ttertiary: "#4f73a4",
        tmuted: "#999797",
        tinverse: "#fff",
      },
    },
  },
  plugins: [],
};
