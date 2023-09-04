import defaultTheme from 'windicss/defaultTheme';

export const colors: Record<string, Record<number, string>> = {
	...defaultTheme.colors,
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
		50: '#a9a9a9',
		100: '#919191',
		200: '#8f8f8f',
		300: '#666666',
		400: '#555555',
		500: '#444444',
		600: '#363636',
		700: '#292929',
		800: '#222222',
		900: '#1c1c1c',
	},
  yellow: "#feee76",
  red: "#f5143d",
};
