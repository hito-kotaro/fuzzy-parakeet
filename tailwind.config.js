module.exports = {
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        base: '#F1F3F5',
        link: '#4B72E0',
        primary: '#F9801D',
      },
      lineHeight: {
        12: '48px',
        16: '64px',
      },
      spacing: {
        '70%': '70vh',
        '75%': '75vh',
        '95%': '95vh',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
