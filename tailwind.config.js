const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: { 
                main: ['Poppins', ...defaultTheme.fontFamily.sans],
                lora: ['Lora', ...defaultTheme.fontFamily.serif]
            },

            colors: {
                primary: "#06FBCE",
                'dark-theme': "#1B1F22",
                'dark-gray': "#313538"
            },
            gridTemplateColumns: {
                'auto-1': ' repeat(1, minmax(0, auto))',
               'auto-2': ' repeat(2, minmax(0, auto))',
              }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
          
        },

    },
    plugins: [],
}