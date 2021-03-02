import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { JobType } from '../../utility'
import jobQuery from '../../queries/job'
import styled from 'styled-components'

const Job: FC = ({}) => {
	const { id } = useParams()
	const { isLoading, error, data: job } = useQuery<JobType, Error>('job', () =>
		jobQuery(id)
	)

	if (isLoading) return <div>Loading...</div>
	if (error || !job) return <div>Something went wrong...</div>

	return <Base>{job.title}</Base>
}

export default Job

const Base = styled.div``
