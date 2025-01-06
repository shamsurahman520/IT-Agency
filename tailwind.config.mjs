/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customOrange: "#d86101", // Added custom color
        customGray: "rgb(100, 100, 100)",
      },
      keyframes: {
        "border-transform": {
          "0%": { "border-radius": "63% 37% 54% 46% / 55% 48% 52% 45%" },
          "100%": { "border-radius": "37% 53% 46% 54% / 48% 58% 45% 52%" },
        },
      },
      animation: {
        "border-transform":
          "border-transform 2s linear infinite alternate forwards",
      },
    },
  },
  plugins: [],
};
