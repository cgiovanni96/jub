import { DefaultTheme } from 'styled-components/'

const theme: DefaultTheme = {
	palette: {
		bg: '#F6F7FB',
		accent: {
			primary: '#1E86FF',
			secondary: '#334680',
			default: '#FFFFFF'
		},
		text: {
			title: '#282538',
			primary: '#334680',
			secondary: '#B9BDCF'
		}
	},
	typo: {
		family: { accent: "'Poppins', sans-serif;", main: "'Roboto', sans-serif;" },
		size: {
			title: '24px',
			big: '18px',
			medium: '16px',
			small: '12px'
		},
		weight: {
			bold: 700,
			regular: 400
		}
	}
}

export default theme
