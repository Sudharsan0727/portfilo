/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#080512", // Very dark violet/black
                surface: "#120d21",     // Slightly lighter for cards
                primary: "#8b5cf6",     // Violet
                secondary: "#fb7185",   // Rose/Pink for gradients
                accent: "#6366f1",      // Indigo
            },
            fontFamily: {
                sans: ['"Readex Pro"', 'sans-serif'],
                display: ['"Readex Pro"', 'sans-serif'],
            },
            backgroundImage: {
                'purple-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
                'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
            }
        },
    },
    plugins: [],
}
