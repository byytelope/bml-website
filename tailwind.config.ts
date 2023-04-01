import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sofia-pro)"],
      },
      colors: {
        "bml-red": "#e01b22",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
