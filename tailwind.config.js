/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'primaria': ['"Roboto"', 'sans-serif'],
      },
      colors: {
        'primario': 'var(--texto-primario)',
        'secundario': 'var(--texto-secundario)',
        'fundo-card': 'var(--fundo-card)',
        'link-primario': 'var(--link-primario)',
        'escuro': 'var(--texto-escuro)',
      },
      width: {
        '1560': '1560px',
        '780': '780px',
        '160': '160px',
      },
      height: {
        '468': '468px',
        '238': '238px',
        '160': '160px',
      },
    },
  },
  plugins: [],
}
