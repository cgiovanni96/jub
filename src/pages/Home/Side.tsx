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
					<LocationInput />
				</Location>
				<LocationList>
					<Radio type="radio" />
					<RadioLabel>City</RadioLabel>
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

const Form = styled.form``
const Type = styled.div``
const Location = styled.div``
const Label = styled.div``
const LocationInput = styled.input``
const LocationList = styled.div``
const Radio = styled.input``
const RadioLabel = styled.label``
