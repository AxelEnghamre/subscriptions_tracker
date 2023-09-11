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
        "knapp-text": "var(--purple-light)",
        träning: "var(--träning)",
        spel: "var(--spel)",
        böcker: "var(--böcker)",
        livsstil: "var(--livsstil)",
        nöje: "var(--nöje)",
        musik: "var(--musik)",
        button: "var(--button)",
        ikoner: "var(--ikoner)",
        bill: "var(--bill)",
        menu: "var(--menu)",
        dawn: "var(--dawn)",
        rader: "var(--rader)",
        sunflower: "var(--sunflower)",
        "off-white": "var(--off-white)",
        health: "var(--health)",
        game: "var(--game)",
        lifestyle: "var(--lifestyle)",
        music: "var(--music)",
        entertainment: "var(--entertainment)",
        danger: "var(--danger)",
        midnight: "var(--midnight)",
        text: "var(--text)",
      },
    },
  },
  plugins: [],
};
export default config;
