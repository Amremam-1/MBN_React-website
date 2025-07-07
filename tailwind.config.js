module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // تأكد أن هذا المسار يشمل كل ملفاتك
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#fafafa ",
        lightText: "#000",
        grayText: "#48494b",
        orangeText: "#fca311 ",
        darkBg: "#1c1c1b",
        darkText: "#a0a0a0",
      },
    },
  },
  plugins: [],
}
