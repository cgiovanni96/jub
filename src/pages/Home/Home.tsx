import React, { FC, Fragment } from 'react'
import { useQuery } from 'react-query'
import jobs from '../../queries/jobs'
import { QueryResponse } from '../../utility'
import Job from './Job'

const Home: FC = ({}) => {
	const { isLoading, error, data } = useQuery<QueryResponse, Error>(
		'jobs',
		jobs
	)

	if (isLoading) return <div>Loading</div>

	if (error) return <div>An error has occurred</div>

	return (
		<>
			{data &&
				data.map((job) => {
					return (
						<Fragment key={job.id}>
							<Job job={job} />
						</Fragment>
					)
				})}
		</>
	)
}

export default Home
