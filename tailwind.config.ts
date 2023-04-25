import { type Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        body: ["var(--font-inter)"],
      },
      colors: {
        "xanny-accent": "#FDFD96",
        "xanny-bg": "#A7C7E7",
        "xanny-text": "#1A1A1A",
      },
    },
  },
  plugins: [forms, scrollbar],
} satisfies Config;
