import React, { FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { up } from 'styled-breakpoints'
import styled from 'styled-components'
import { QueryContext } from '../../context/QueryContext'

type DescriptionFormType = {
	description: string
}

const Hero: FC = ({}) => {
	const { register, handleSubmit } = useForm<DescriptionFormType>()
	const { setQuery } = useContext(QueryContext)
	const onSubmit = handleSubmit(({ description }) => {
		if (setQuery) setQuery({ description })
	})
	return (
		<Base>
			<Form onSubmit={onSubmit}>
				<Input
					placeholder={'Title, companies, exper...'}
					name={'description'}
					defaultValue={''}
					ref={register}
				/>
				<SearchButton type={'submit'} value={'Search'} />
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
	width: 90%;
	background: ${({ theme }) => theme.palette.accent.default};
	font-size: ${({ theme }) => theme.typo.size.small};
	color: ${({ theme }) => theme.palette.text.secondary};
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
	${up('sm')} {
		width: 70%;
	}
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

const SearchButton = styled.input`
	border: none;
	margin: 0.4rem;
	color: white;
	width: 140px;
	height: 45px;
	background: ${({ theme }) => theme.palette.accent.primary};
	font-size: ${({ theme }) => theme.typo.size.medium};
	border-radius: 0.5rem;
	${up('sm')} {
		/* padding: 1rem 2rem; */
	}
`
