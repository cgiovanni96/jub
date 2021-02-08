import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import GlobalStyles from './theme/GlobalStyles'
import Router from './Router'
import { QueryClientProvider } from 'react-query'
import client from './client/client'

const Root: React.FC = () => {
	return (
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Router />
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default Root
