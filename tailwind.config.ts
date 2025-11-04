import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a202c",
        "dark-card": "#2d3748",
        "brand-green": "#38A169",
        "brand-gray": "#A0AEC0",
        "brand-light": "#F7FAFC",

        "light-bg": "#F7FAFC",
        "light-card": "#FFFFFF",
        "light-text": "#2D3748",
        "light-gray": "#718096",
      },
      backgroundImage: {
        "dark-gradient":
          "radial-gradient(circle, rgba(45,55,72,0.5) 0%, rgba(26,32,44,1) 75%)",
      },
    },
  },
  plugins: [],
};
export default config;
