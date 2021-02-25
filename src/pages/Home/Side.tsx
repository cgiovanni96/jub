import React, { FC, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { QueryContext } from '../../context/QueryContext'

export type City = {
	id: string
	name: string
}

type FormData = {
	type: string
	location: string
}

const Side: FC = ({}) => {
	const { register, handleSubmit } = useForm<FormData>()
	const { query, setQuery } = useContext(QueryContext)

	const [cities] = useState<City[]>([
		{ id: 'london', name: 'London' },
		{ id: 'amstedam', name: 'Amsterdam' },
		{ id: 'new+york', name: 'New York' },
		{ id: 'berlin', name: 'Berlin' }
	])

	const onSubmit = handleSubmit(({ type, location }) => {
		if (setQuery)
			setQuery({ location, type: !!type, description: query.description })
	})
	return (
		<Base>
			<Form onSubmit={onSubmit}>
				<Type>
					<Check type="checkbox" id="type" name="type" ref={register} />
					<CheckLabel htmlFor="type">Full Time</CheckLabel>
				</Type>

				<Location>
					<Label>LOCATION</Label>
					<LocationInput
						placeholder={'City, state, zip code or country'}
						name="city"
						id="city"
						defaultValue=""
					/>
				</Location>
				<LocationList>
					{cities.map((city, id) => (
						<ListElement key={id}>
							<Radio
								type="radio"
								name="location"
								value={city.id}
								ref={register}
							/>
							<RadioLabel htmlFor={city.id}>{city.name}</RadioLabel>
						</ListElement>
					))}
				</LocationList>

				<input type="submit" value="submit" />
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
const Type = styled.div`
	display: flex;
	align-items: center;
`

const Check = styled.input``

const CheckLabel = styled.label`
	margin-left: 0.5rem;
`

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
