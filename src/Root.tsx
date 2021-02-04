import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import GlobalStyles from './theme/GlobalStyles'
import Router from './Router'

const Root: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Router />
		</ThemeProvider>
	)
}

export default Root
