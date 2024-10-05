/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            padding: '2rem',
            center: true,
        },
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                primary: '#3490dc',
                dark: '#212121',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), 'prettier-plugin-tailwindcss'],
}
