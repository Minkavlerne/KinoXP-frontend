/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                'carousel': '500px', // Adjust this value to your desired height
              },
            colors: {
                "kino-red": "var(--kino-red)",
                "kino-blue": "var(--kino-blue)",
                "kino-grey": "var(--kino-grey)",
                "kino-white": "var(--kino-white)",
            },
        },
    },
    plugins: [],
};
