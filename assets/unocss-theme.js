window.__unocss = {
    theme: {
        colors: {
            "brand": {
                DEFAULT: "#35a3ae",
                50: "#E8F6F8",
                100: "#D4EFF2",
                200: "#A9E0E5",
                300: "#7ED0D8",
                400: "#53C1CB",
                500: "#35A3AE",
                600: "#2B858D",
                700: "#20636A",
                800: "#154246",
                900: "#0B2123",
                950: "#050F10"
            }
        },
    },
    shortcuts: [
        [/^btn-(.*)$/, ([, c]) =>
            `px-3 py-2 flex flex-row items-center justify-center gap-1 rounded-lg
            bg-${c}-500 text-${c}-100 hover:bg-${c}-600 hover:text-${c}-100
            disabled:opacity-50`],
        {
            'cinema': `relative mb-12 mt-8 flex flex-col items-center justify-center overflow-hidden
                rounded-xl bg-gradient-to-br from-green-400 to-brand-500
                w-full min-h-20 p-5 rounded-lg cursor-pointer border-2 border-black
                hover:from-brand-200 hover:to-brand-400 hover:text-black`,
            'cinema-active': `from-brand-300 to-brand-600 border-2 border-yellow drop-shadow-lg shadow shadow-yellow `
        }
    ],
    preflights: [
    {
        getCSS: ({theme}) => {
        return `
            a {
                color: ${theme.colors.blue['400']}!important;
            }
            a:hover {
                color: ${theme.colors.blue['500']}!important;
                text-decoration: underline!important;
            }
            .nominee {
                border: 1px solid transparent;
            }
            .nominee:has(input:checked) {
                background-color: ${theme.colors.yellow['500']};
                border: 1px solid ${theme.colors.yellow['500']};
            }
        `
        },
    },
    ]
}