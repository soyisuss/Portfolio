/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Acentos principales
                accent: '#545DFF',
                'accent-hover': '#7B84FF',
                'accent-muted': '#2D37A3',

                // Secundario armónico
                secondary: '#3B653B',
                'secondary-hover': '#59A765',
                'secondary-muted': '#2E4F2E',

                // Fondos
                background: '#0F0F1A',
                'background-alt': '#1C1C2B',
                'background-hover': '#2A2A3F',

                // Texto
                'text-main': '#DDE1F0',
                'text-muted': '#9CAAC0',
                'text-heading': '#F1F3F9',
                white: '#FFFFFF',

                // Bordes
                border: '#2F2F44',
            }

        },
    },
    plugins: [],
}
