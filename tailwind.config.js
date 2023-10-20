const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundOpacity: {
				15: '0.15',
			},
			colors: {
				gray: {
					50: '#f9fafb',
					100: '#d6d6d6',
					200: '#adadad',
					300: '#848484',
					400: '#5b5b5b',
					500: '#323232',
					600: '#282828',
					700: '#1e1e1e',
					800: '#141414',
					900: '#0a0a0a',
				},
				primary: {
					100: '#d6d6d6',
					200: '#adadad',
					300: '#848484',
					400: '#5b5b5b',
					500: '#323232',
					600: '#282828',
					700: '#1e1e1e',
					800: '#141414',
					900: '#0a0a0a',
				},
			},

		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
