import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			bg: string
			accent: {
				primary: string
				secondary: string
				default: string
			}
			text: {
				title: string
				primary: string
				secondary: string
			}
		}

		typo: {
			family: {
				accent: string
				main: string
			}
			size: {
				title: string
				big: string
				medium: string
				small: string
			}

			weight: {
				bold: number
				regular: number
			}
		}
	}
}
