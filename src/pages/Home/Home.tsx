import React, { FC, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { defaultQuery, IQuery, QueryContext } from '../../context/QueryContext'
import Hero from './Hero'
import Jobs from './Jobs/Jobs'
import Side from './Side'

const Home: FC = ({}) => {
	const [query, setQuery] = useState<IQuery>(defaultQuery)
	return (
		<QueryContext.Provider value={{ query, setQuery }}>
			<Base>
				<Hero />
				<Main>
					<Side />
					<Jobs />
				</Main>
			</Base>
		</QueryContext.Provider>
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
