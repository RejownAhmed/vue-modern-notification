/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
  ],
  darkMode: ['class', '[theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        danger: 'rgb(var(--color-danger) / <alpha-value>)',
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        info: 'rgb(var(--color-info) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)', // Body bg
        card: 'rgb(var(--color-card) / <alpha-value>)', // Components bg
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'default': '12px',
      },
      boxShadow: {
        default: "0 5px 20px 0 rgba(0,0,0,0.1)",
        primary:'0 10px 20px -10px var(--primary)',
        success:'0 10px 20px -10px var(--success)',
        secondary:'0 10px 20px -10px var(--secondary)',
        warning:'0 10px 20px -10px var(--warning)',
        danger:'0 10px 20px -10px var(--danger)',
      },
      fontSize: {
        default: ".85rem"
      }
    },
    fontFamily: {
      sans: "'Poppins',-apple-system,BlinkMacSystemFont,Segoe UI,'Roboto',Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    },
  },
  plugins: [
  ],
}

