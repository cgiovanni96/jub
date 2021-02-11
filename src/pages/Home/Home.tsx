import React, { FC } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import Hero from './Hero'
import Jobs from './Jobs/Jobs'
import Side from './Side'

const Home: FC = ({}) => {
	return (
		<Base>
			<Hero />
			<Main>
				<Side />
				<Jobs />
			</Main>
		</Base>
	)
}

export default Home

const Base = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	${up('sm')} {
		flex-direction: row;
	}
`
