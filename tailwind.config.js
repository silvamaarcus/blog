/** @type {import('tailwindcss').Config} */

const textStyles = require("./src/styles/textStyles");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px", // Substituindo o breakpoint padrão "sm"
        md: "720px", // Substituindo o breakpoint padrão "md"
        lg: "960px", // Substituindo o breakpoint padrão "lg"
        xl: "1200px", // Substituindo o breakpoint padrão "xl"
        // "2xl": "1920px", // Adicionando um novo breakpoint
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(225deg, #5390E3 8.12%, #1357B3 92.21%)",
        "gradient-2": "linear-gradient(225deg, #1B69D2 0%, #07346F 100%)",
      },
      colors: {
        customBlue: {
          light: "#5390E3",
          DEFAULT: "#1B69D2",
          dark: "#1357B3",
        },
      },
      fontSize: {
        ...textStyles, // Importando as configurações de texto
      },
    },
  },
  plugins: [],
};
