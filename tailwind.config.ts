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
        primary: "#0A192F",
        secondary: "#7B61FF",
        accent: "#FF61D8",
        background: "#112240",
        text: "#CCD6F6",
        textDark: "#8892B0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty: {
        height: "height",
      },
      transform: {
        "perspective-1000": "perspective(1000px)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    transform: true,
  },
  safelist: [
    "perspective-1000",
    "transform-style-3d",
    "backface-hidden",
    "rotate-y-180",
  ],
} as Config;

export default config;
