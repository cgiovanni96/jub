import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import jobsQuery from '../../../queries/jobs'
import { JobType, QueryResponse } from '../../../utility'
import { PAGE_LIMIT } from '../../../utility/constants'
import { useGetPageList } from '../../../utility/hooks/useGetPageList'
import Job from './Job'

const Jobs: React.FC = ({}) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [paginatedJobs, setPaginatedJobs] = useState<JobType[]>([])
	const { isLoading, error, data: jobs } = useQuery<QueryResponse, Error>(
		'jobs',
		() => jobsQuery('hello')
	)

	const pageList = useGetPageList(currentPage)
	const jobPagination = () => {
		if (!jobs) return
		const beginning = (currentPage - 1) * PAGE_LIMIT
		const ending = currentPage * PAGE_LIMIT
		const slice: JobType[] = jobs.slice(beginning, ending)
		setPaginatedJobs([...slice])
	}

	useEffect(() => {
		jobPagination()
	}, [currentPage, jobs])

	if (isLoading) return <div>Loading</div>
	if (error || !jobs) return <div>An error has occurred</div>
	return (
		<Base>
			{paginatedJobs &&
				paginatedJobs.map((job) => {
					return <Job key={job.id} job={job} />
				})}
			<Pagination>
				{currentPage > 3 ? (
					<>
						<Page onClick={() => setCurrentPage(1)}>1</Page>
						<Divider>...</Divider>
					</>
				) : null}
				{pageList &&
					pageList.map((pg) => {
						return (
							<Page
								key={pg}
								current={currentPage === pg}
								onClick={() => setCurrentPage(pg)}
							>
								{pg}
							</Page>
						)
					})}
				{currentPage <= 8 ? (
					<>
						<Divider>...</Divider>
						<Page onClick={() => setCurrentPage(jobs.length / 5)}>
							{jobs.length / 5}
						</Page>
					</>
				) : null}
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
