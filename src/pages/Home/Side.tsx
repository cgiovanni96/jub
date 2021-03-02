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

type LocationFormData = {
	city: string
}

const Side: FC = ({}) => {
	const { register, handleSubmit } = useForm<FormData>()
	const {
		register: registerLocation,
		handleSubmit: handleSubmitLocation
	} = useForm<LocationFormData>()
	const { query, setQuery } = useContext(QueryContext)

	const [cities, setCities] = useState<City[]>([
		{ id: 'london', name: 'London' },
		{ id: 'amstedam', name: 'Amsterdam' },
		{ id: 'new+york', name: 'New York' },
		{ id: 'berlin', name: 'Berlin' }
	])

	const onSubmit = handleSubmit(({ type, location }) => {
		if (setQuery)
			setQuery({ location, type: !!type, description: query.description })
	})

	const onSubmitLocation = handleSubmitLocation(({ city }) => {
		const cityId = city.toLowerCase().replaceAll(' ', '+')
		setCities([...cities, { id: cityId, name: city }])
	})

	console.log('cities', cities)

	return (
		<Base>
			<Form id="form" onSubmit={onSubmit}></Form>
			<LocationForm
				id="locationForm"
				onSubmit={onSubmitLocation}
			></LocationForm>

			<Type>
				<Check type="checkbox" id="type" name="type" ref={register} />
				<CheckLabel htmlFor="type">Full Time</CheckLabel>
			</Type>

			<Location>
				<Label>LOCATION</Label>
				<LocationWrapper>
					<LocationInput
						placeholder={'City, state, zip code or country'}
						name="city"
						id="city"
						defaultValue=""
						ref={registerLocation}
					/>

					<LocationButton type="submit" value="+" form={'locationForm'} />
				</LocationWrapper>
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

			<FormButton type="submit" value="Submit" form={'form'} />
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
	font-family: ${({ theme }) => theme.typo.family.main};
	font-size: ${({ theme }) => theme.typo.size.medium};
`

const Form = styled.form``
const Type = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
`

const Check = styled.input``

const CheckLabel = styled.label`
	margin-left: 0.5rem;
`

const Location = styled.div``

const LocationForm = styled.form`
	/* display: flex; */
`

const LocationButton = styled.input`
	margin: 0 1rem;
	color: ${({ theme }) => theme.palette.text.secondary};
	background: ${({ theme }) => theme.palette.accent.default};
	border: none;
	padding: 0 1.5rem;
	border-radius: 0.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	cursor: pointer;
`

const Label = styled.div`
	color: ${({ theme }) => theme.palette.text.secondary};
	font-weight: ${({ theme }) => theme.typo.weight.bold};
	margin-bottom: 0.5rem;
`

const LocationWrapper = styled.div`
	display: flex;
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
	margin: 1rem 0;
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

const FormButton = styled.input`
	margin: 0 2rem;
	color: ${({ theme }) => theme.palette.text.primary};
	background: ${({ theme }) => theme.palette.accent.default};
	border: none;
	padding: 1rem 0;
	border-radius: 0.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	cursor: pointer;
`
