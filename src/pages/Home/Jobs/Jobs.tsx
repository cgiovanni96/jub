import React, { useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { JobType } from '../../../utility'
import Job from './Job'

interface JobsProps {
	jobs: JobType[]
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
	const [page, setPage] = useState(0)
	const [paginatedJobs, setPaginatedJobs] = useState<JobType[]>([])
	const pageLimit = 5

	const jobPagination = () => {
		const slice: JobType[] = jobs.slice(page, page + pageLimit)
		setPaginatedJobs(slice)
	}

	useEffect(() => {
		jobPagination()
	}, [page])

	return (
		<Base>
			{paginatedJobs &&
				paginatedJobs.map((job) => {
					return <Job key={job.id} job={job} />
				})}
			<Pagination>
				{paginatedJobs.map((_, id) => {
					return (
						<Page current={id === page} key={id} onClick={() => setPage(id)}>
							{page + id}
						</Page>
					)
				})}
				<Divider>...</Divider>
				<Page>{jobs.length / 5}</Page>
			</Pagination>
		</Base>
	)
}

export default Jobs

const Base = styled.div`
	${up('lg')} {
		flex: 5;
	}
`

const Pagination = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 2rem;
	font-family: ${({ theme }) => theme.typo.family.main};
	font-size: ${({ theme }) => theme.typo.size.small};
`

interface PageProps {
	readonly current?: boolean
}

const Page = styled.a<PageProps>`
	display: flex;
	padding: 0.8rem 1rem;
	margin: 0 0.4rem;
	color: ${(props) =>
		props.current ? '#FFFFFF' : props.theme.palette.text.secondary};
	border: 1px solid
		${(props) =>
			props.current
				? props.theme.palette.accent.primary
				: props.theme.palette.text.secondary};
	background: ${(props) =>
		props.current ? props.theme.palette.accent.primary : 'transparent'};
	border-radius: 0.4rem;
	transition: all ${({ theme }) => theme.transitions.small} ease-in-out;
	cursor: pointer;

	&:hover {
		border-color: ${({ theme }) => theme.palette.accent.primary};
		color: ${(props) =>
			props.current ? null : props.theme.palette.accent.primary};
	}
`

const Divider = styled.span`
	margin: 0 0.4rem;
	color: ${({ theme }) => theme.palette.text.secondary};
	font-size: ${({ theme }) => theme.typo.size.medium};
`
