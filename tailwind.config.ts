import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "var(--black)",
        purple: "var(--purple)",
        babyblue: "var(--babyblue)",
        dawn: "var(--dawn)",
        midnight: "var(--midnight)",
        sunflower: "var(--sunflower)",
        olive: "var(--olive)",
        "off-white": "var(--off-white)",
        "purple-light": "var(--purple-light)",
      },
    },
  },
  plugins: [],
};
export default config;
