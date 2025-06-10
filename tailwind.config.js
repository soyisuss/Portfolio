/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Color principal de acento
                accent: '#6668FF',
                'accent-hover': '#5A5CE6',
                'accent-muted': '#4A4BCC',

                // Escala de grises basada en #1C1C1E
                background: '#1C1C1E',          // Fondo principal
                'background-alt': '#2C2C30',    // Secciones alternas (más claro)
                'background-hover': '#3C3C42',  // Estados hover (aún más claro)
                'background-light': '#4C4C54',  // Elementos destacados

                // Texto - principalmente blanco con variaciones
                'text-main': '#FFFFFF',         // Texto principal
                'text-muted': '#A1A1A6',        // Texto secundario (gris claro)
                'text-dark': '#8E8E93',         // Texto menos prominente

                // Bordes sutiles
                border: '#3A3A3E',
            }
        },
    },
    plugins: [],
}
