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
					100: '#eaeaeb',
					200: '#cacbcd',
					300: '#a7a9ac',
					400: '#696c71',
					500: '#282d34',
					600: '#24292f',
					700: '#181b20',
					800: '#121518',
					900: '#0c0e10',
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
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
