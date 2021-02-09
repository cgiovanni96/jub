import React, { FC } from 'react'
import styled from 'styled-components'

const Hero: FC = ({}) => {
	return (
		<Base>
			<Form>
				<Input placeholder={'Title, companies, expertise or benefits'} />
				<SearchButton>Search</SearchButton>
			</Form>
		</Base>
	)
}

export default Hero

const Base = styled.div`
	width: 100%;
	border-radius: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 150px;
	margin-bottom: 2rem;
	background-color: #f2f2f2;
	background-image: url('./hero.png');
`

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	width: 70%;
	background: ${({ theme }) => theme.palette.accent.default};
	font-size: ${({ theme }) => theme.typo.size.small};
	color: ${({ theme }) => theme.palette.text.secondary};
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
`

const Input = styled.input`
	flex: 1;
	border: none;
	padding-left: 0.5rem;
	border-radius: 0.5rem 0 0 0.5rem;

	&::placeholder {
		color: ${({ theme }) => theme.palette.text.secondary};
		font-size: ${({ theme }) => theme.typo.size.small};
	}
`

const SearchButton = styled.button`
	border: none;
	margin: 0.4rem;
	padding: 1rem 2rem;
	color: white;
	background: ${({ theme }) => theme.palette.accent.primary};
	font-size: ${({ theme }) => theme.typo.size.medium};
	border-radius: 0.5rem;
`
