/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "base": '#1DD100'
            }
        },
    },
    plugins: [require("daisyui")],
}