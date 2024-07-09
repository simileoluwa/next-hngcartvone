import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-image.png')",
        // "footer-texture": "url('/images/footer-texture.png')",
      },
      colors: {
        primary: "#9137CE",
        secondary: "#827789",
        myBlack: "#242127",
        myGray: "#5B595F",
        myPink: "#9137CE",
        myLightPink: "#D3A5F2",
      },
    },
  },
  plugins: [],
};
export default config;
