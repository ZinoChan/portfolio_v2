const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                
                main: ['Poppins', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                primary: "#06FBCE",
                // secondary: "#EA525C",
                // dark: "#191C1D",
                // "dark-gray": "#272A2A"
              
            },
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