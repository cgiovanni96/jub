import { formatDistanceToNow } from 'date-fns'
import React from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import { JobType } from '../../../utility'

interface JobProps {
	job: JobType
}

const Job: React.FC<JobProps> = ({ job }) => {
	return (
		<Base>
			<Logo>
				<img src={job.company_logo} alt={'Not Found'} />
			</Logo>
			<Info>
				<Company>{job.company}</Company>
				<Title>
					<RouterLink to={`/job/${job.id}`}>{job.title}</RouterLink>
				</Title>
				<Footer>
					<TypeBox>
						<Type>{job.type}</Type>
					</TypeBox>
					<Box>
						<Where>{job.location}</Where>
						<When>
							{formatDistanceToNow(Date.parse(job.created_at), {
								addSuffix: true
							})}
						</When>
					</Box>
				</Footer>
			</Info>
		</Base>
	)
}

export default Job

const Base = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.palette.accent.default};
	border-radius: 0.5em;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	${up('sm')} {
		padding: 1rem;
	}
`

const Logo = styled.div`
	width: 90px;
	height: 90px;
	padding: 1em;
	position: relative;
	display: flex;
	background: #f2f2f2;
	margin-left: 1rem;

	${up('sm')} {
		margin-left: 0;
	}

	& > img {
		display: inline-block;
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
`
const Info = styled.div`
	margin: 1rem 0;
	margin-left: 1rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-size: ${({ theme }) => theme.typo.size.small};
	font-family: ${({ theme }) => theme.typo.family.main};
	color: ${({ theme }) => theme.palette.text.primary};
	${up('sm')} {
		margin: 0;
		margin-left: 1rem;
	}
`
const Company = styled.div`
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`
const Title = styled.h2`
	margin-top: 1rem;
	font-size: ${({ theme }) => theme.typo.size.big};
	font-weight: ${({ theme }) => theme.typo.weight.regular};

	& > * {
		color: inherit;
		text-decoration: none;
	}
`
const Footer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;

	${up('sm')} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`

const TypeBox = styled.div`
	display: flex;
`

const Type = styled.div`
	margin: 1rem 0;
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.palette.accent.secondary};
`
const Box = styled.div`
	color: ${({ theme }) => theme.palette.text.secondary};
`
const Where = styled.span``
const When = styled.span`
	margin-left: 1rem;
`
