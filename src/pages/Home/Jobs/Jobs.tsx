import React, { useEffect, useState } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { JobType } from '../../../utility'
import Job from './Job'

interface JobsProps {
	jobs: JobType[]
}

const Jobs: React.FC<JobsProps> = ({ jobs }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [paginatedJobs, setPaginatedJobs] = useState<JobType[]>([])
	const pageLimit = 5

	const pages = (): number[] => {
		const pagesList: number[] = []
		if (currentPage === 1) pagesList.push(...[1, 2, 3])
		else if (currentPage % 10 === 0)
			pagesList.push(...[currentPage - 2, currentPage - 1, currentPage])
		else pagesList.push(...[currentPage - 1, currentPage, currentPage + 1])
		return pagesList
	}

	const jobPagination = () => {
		const beginning = (currentPage - 1) * pageLimit
		const ending = currentPage * pageLimit
		const slice: JobType[] = jobs.slice(beginning, ending)
		setPaginatedJobs([...slice])
	}

	useEffect(() => {
		jobPagination()
	}, [currentPage])

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
				{pages().map((pg) => {
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
