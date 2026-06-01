import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1B3D2F",
          dark: "#0F2619",
          light: "#2A5A45",
        },
        ember: {
          DEFAULT: "#E86A33",
          light: "#F08A5C",
          dark: "#C4521F",
        },
        cream: {
          DEFAULT: "#F7F4EF",
          dark: "#EDE8DF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        topo: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c8 12 15 18 15 25s-7 13-15 25c-8-12-15-18-15-25S22 17 30 5z' fill='none' stroke='%23ffffff' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
