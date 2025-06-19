import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
