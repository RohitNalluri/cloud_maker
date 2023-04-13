//basic front end

//install the required dependencies:

```bash
yarn create next-app your-app-name
cd your-app-name
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

//update the tailwind.config.js with:

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
```;
