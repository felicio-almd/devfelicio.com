/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        // ... paths
    ],
    theme: {
        extend: {
            colors: {
                'custom-text': '#030f0b',
                'custom-background': '#f2fcf8',
                'custom-primary': '#39d39d',
                'custom-secondary': '#91d0e7',
                'custom-accent': '#5a9dda',
            },
            fontFamily: {
                headline: ['Montserrat', ...defaultTheme.fontFamily.sans],
                body: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}