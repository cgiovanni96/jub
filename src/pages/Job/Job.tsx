import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { JobType } from '../../utility'
import jobQuery from '../../queries/job'
import styled from 'styled-components'
import Text from '../../components/Text'
import { up } from 'styled-breakpoints'
import { formatDistanceToNow } from 'date-fns'

const Job: FC = ({}) => {
	const { id } = useParams()
	const { isLoading, error, data: job } = useQuery<JobType, Error>('job', () =>
		jobQuery(id)
	)

	if (isLoading) return <div>Loading...</div>
	if (error || !job) return <div>Something went wrong...</div>

	return (
		<Base>
			<Side>
				<Back>
					<RouterLink to="/">Back to search </RouterLink>
				</Back>
				<Info>
					<span>HOW TO APPLY</span>
					<SideLink href={job.how_to_apply}>Apply here</SideLink>
				</Info>
			</Side>

			<Main>
				<Header>
					<TitleSection>
						<Row>
							<Title>{job.title}</Title>
							<Type>{job.type}</Type>
						</Row>
						<Time>
							{formatDistanceToNow(Date.parse(job.created_at), {
								addSuffix: true
							})}
						</Time>
					</TitleSection>
					<CompanySection>
						<Logo src={job.company_logo} alt={'logo'} />
						<Col>
							<Company>{job.company}</Company>
							<Location>{job.location}</Location>
						</Col>
					</CompanySection>
				</Header>

				<Description>
					<Text text={job.description} />
				</Description>
			</Main>
		</Base>
	)
}

export default Job

const Base = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	font-family: ${({ theme }) => theme.typo.family.accent};
	${up('sm')} {
		flex-direction: row;
	}
`

const Side = styled.aside`
	flex: 1;
`

const SideLink = styled.a`
	font-weight: bold;
	color: inherit;
	text-decoration: none;
`

const Back = styled.span`
	& a {
		text-decoration: none;
		color: ${({ theme }) => theme.palette.accent.primary};
	}
`

const Info = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;

	& > span {
		display: inline-block;
		margin: 1rem 0;
		color: ${({ theme }) => theme.palette.text.secondary};
		font-weight: ${({ theme }) => theme.typo.weight.bold};
	}
`

const Main = styled.main`
	font-family: ${({ theme }) => theme.typo.family.main};
	${up('sm')} {
		flex: 3;
	}
`

const Header = styled.header`
	display: flex;
	flex-direction: column;
`

const TitleSection = styled.div`
	display: flex;
	flex-direction: column;
`

const Row = styled.div`
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`

const CompanySection = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
`

const Logo = styled.img`
	width: 50px;
	height: auto;
`

const Col = styled.div`
	margin-left: 1rem;
	display: flex;
	flex-direction: column;
`

const Title = styled.h2`
	color: ${({ theme }) => theme.palette.text.title};
	font-size: ${({ theme }) => theme.typo.size.title};
`

const Type = styled.span`
	display: inline-block;
	padding: 0.3rem;
	margin-left: 1rem;
	border: 1px solid ${({ theme }) => theme.palette.accent.secondary};
	border-radius: 0.3rem;
	font-size: ${({ theme }) => theme.typo.size.small};
`

const Time = styled.span`
	color: ${({ theme }) => theme.palette.text.secondary};
	font-size: ${({ theme }) => theme.typo.size.small};
`

const Company = styled.h3`
	color: ${({ theme }) => theme.palette.text.title};
	font-size: ${({ theme }) => theme.typo.size.big};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
`

const Location = styled.span`
	color: ${({ theme }) => theme.palette.text.secondary};
	font-size: ${({ theme }) => theme.typo.size.small};
`

const Description = styled.div`
	color: ${({ theme }) => theme.palette.accent.secondary};
	font-size: ${({ theme }) => theme.typo.size.medium};
`
