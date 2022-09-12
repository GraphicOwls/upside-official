/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./layout/**/*.{js,jsx,ts,tsx}',
		'./sections/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
		container: {
			center: true,
		},
	},
	plugins: [],
}
