/** @type {import('tailwindcss').Config} */

import { group } from "console";

const textStyles = require("./src/styles/textStyles");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "720px",
        lg: "960px",
        xl: "1200px",
        // "2xl": "1920px", // Adicionando um novo breakpoint
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(225deg, #5390E3 8.12%, #1357B3 92.21%)",
        "gradient-2": "linear-gradient(225deg, #1B69D2 0%, #07346F 100%)",
      },
      colors: {
        customBlue: {
          light: "var(--blue-light)",
          normal: "var(--blue)",
          dark: "var(--blue-dark)",
        },
        customWhite: {
          light: "var(--white-light)",
          normal: "var(--white)",
          dark: "var(--white-dark)",
        },
        customBlack: {
          light: "var(--black-light)",
          normal: "var(--black)",
          dark: "var(--black-dark)",
        },
        customGray: {
          gray_2: "var(--gray-2)",
          gray_3: "var(--gray-3)",
          gray_4: "var(--gray-4)",
          gray_5: "var(--gray-5)",
          gray_6: "var(--gray-6)",
          gray_7: "var(--gray-7)",
        },
        customAuxiliary: {
          red: "var(--red)",
          yellow: "var(--yellow)",
          green: "var(--green)",
        },
      },
      fontSize: {
        ...textStyles, // Importando as configurações de texto
      },
    },
  },
  plugins: [],
};
