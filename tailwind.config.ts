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
        white: "var(--white)",
        "off-white": "var(--off-white)",
        bill: "var(--bill)",
        dusk: "var(--dusk)",
        dawn: "var(--dawn)",
        sunflower: "var(--sunflower)",
        danger: "var(--danger)",
        yellow: "var(--yellow)",
        turqoise: "var(--turqoise)",
        beige: "var(--beige)",
        exercise: "var(--exercise)",
        game: "var(--game)",
        books: "var(--books)",
        lifestyle: "var(--lifestyle)",
        entertainment: "var(--entertainment)",
        music: "var(--music)",
        "grey-10": "var(--grey-10)",
        "grey-50": "var(--grey-50)",
        "grey-100": "var(--grey-100)",
        menu: "var(--menu)",
        logo: "var(--logo)",
        "login-surface": "var(--login-surface)",
        "loginbar-foreground": "var(--loginbar-foreground)",
        "loginbar-surface": "var(--loginbar-surface)",
        "button-surface": "var(--button-surface)",
        "searchbar-foreground": "var(--searchbar-foreground)",
        "button-foreground": "var(--button-foreground)",
        "homescreen-bg": "var(--homescreen-bg)",
        "gradient-top": "var(--gradient-top)",
        "gradient-bottom": "var(--gradient-bottom)",
        "loading-gradient-top": "var(--loading-gradient-top)",
        "loading-gradient-bottom": "var(--loading-gradient-bottom)",
      },
    },
  },
  plugins: [],
};
export default config;
