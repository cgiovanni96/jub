import React, { FC } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import jobs from '../../queries/jobs'
import { QueryResponse } from '../../utility'
import Hero from './Hero'
import Jobs from './Jobs/Jobs'

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
			<Jobs jobs={data} />
		</Base>
	)
}

export default Home

const Base = styled.div`
	width: 100%;
	margin: 0 1rem;
	display: flex;
	flex-direction: column;
`
