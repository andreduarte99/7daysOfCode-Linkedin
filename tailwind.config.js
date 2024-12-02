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
        'input': 'var(--input)',
      },
      width: {
        '1560': '1560px',
        '780': '780px',
        '160': '160px',
        '34': '34px',
  
      },
      height: {
        '468': '468px',
        '238': '238px',
        '160': '160px',
        '34': '34px',

      },
      padding: {
        '28': '28rem',
      },
      spacing: {
        '94': '23rem',
        '25': '7rem',
      },
      gridTemplateColumns:{
        '2': 'auto 1fr'
      }
    },
  },
  plugins: [],
}
