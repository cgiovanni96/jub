import React, { FC } from 'react'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'

const Side: FC = ({}) => {
	return (
		<Base>
			<Form>
				<Type>Full Time</Type>
				<Location>
					<Label>LOCATION</Label>
					<LocationInput placeholder={'City, state, zip code or country'} />
				</Location>
				<LocationList>
					<ListElement>
						<Radio type="radio" />
						<RadioLabel>City</RadioLabel>
					</ListElement>
				</LocationList>
			</Form>
		</Base>
	)
}

export default Side

const Base = styled.div`
	display: flex;
	flex-direction: column;
	${up('sm')} {
		flex: 2;
	}
`

const Form = styled.form`
	font-family: ${({ theme }) => theme.typo.family.main};
	font-size: ${({ theme }) => theme.typo.size.medium};
	& > * {
		margin: 1.2rem 0;
	}
`
const Type = styled.div``
const Location = styled.div``
const Label = styled.div`
	color: ${({ theme }) => theme.palette.text.secondary};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	margin-bottom: 0.5rem;
`
const LocationInput = styled.input`
	width: 90%;
	border: none;
	padding: 1rem 0;
	padding-left: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

	&::placeholder {
		color: ${({ theme }) => theme.palette.text.secondary};
	}
`
const LocationList = styled.div`
	display: flex;
	flex-direction: column;
`

const ListElement = styled.div`
	display: flex;
	align-items: end;
	padding: 0.2rem 0;
`

const Radio = styled.input``
const RadioLabel = styled.label`
	margin-left: 0.5rem;
`
