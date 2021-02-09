import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import jobs from '../../queries/jobs'
import { QueryResponse } from '../../utility'
import Hero from './Hero'
import Jobs from './Jobs/Jobs'
import Side from './Side'

const Home: FC = ({}) => {
	const { isLoading, error, data } = useQuery<QueryResponse, Error>(
		'jobs',
		jobs
	)

	if (isLoading) return <div>Loading</div>

	if (error || !data) return <div>An error has occurred</div>

	return (
		<Base>
			<Hero />
			<Main>
				<Side />
				<Jobs jobs={data} />
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
