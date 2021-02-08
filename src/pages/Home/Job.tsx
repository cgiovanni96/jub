import { formatDistanceToNow } from 'date-fns'
import React from 'react'
import styled from 'styled-components'
import { JobType } from '../../utility'

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
				<Title>{job.title}</Title>
				<Footer>
					<Type>{job.type}</Type>
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
	margin-bottom: 1em;
	padding: 1em 2em;
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.palette.accent.default};
	border-radius: 0.5em;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const Logo = styled.div`
	width: 90px;
	height: 90px;
	position: relative;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: fill;
	}
`
const Info = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
	font-family: ${({ theme }) => theme.typo.family.main};
	color: ${({ theme }) => theme.palette.text.primary};
`
const Company = styled.div`
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`
const Title = styled.h2`
	font-weight: ${({ theme }) => theme.typo.weight.regular};
`
const Footer = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Type = styled.div`
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
