import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { JobType } from '../../../utility'
import Job from './Job'

interface JobsProps {
	jobs: JobType[]
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
	return (
		<Base>
			{jobs.map((job) => {
				return <Job key={job.id} job={job} />
			})}
		</Base>
	)
}

export default Jobs

const Base = styled.div`
	${up('lg')} {
		flex: 5;
	}
`
