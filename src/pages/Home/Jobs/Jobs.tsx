import React from 'react'
import { JobType } from '../../../utility'
import Job from './Job'

interface JobsProps {
	jobs: JobType[]
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
	return (
		<>
			{jobs.map((job) => {
				return <Job key={job.id} job={job} />
			})}
		</>
	)
}

export default Jobs
