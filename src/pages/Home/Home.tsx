import React, { FC } from 'react'
import { useQuery } from 'react-query'
import jobs from '../../queries/jobs'

const Home: FC = ({}) => {
	const { isLoading, error, data } = useQuery('jobs', jobs)

	if (isLoading) return <div>Loading</div>

	if (error) return <div>An error has occurred</div>

	return <div> Home</div>
}

export default Home
