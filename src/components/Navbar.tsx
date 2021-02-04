import React, { FC } from 'react'
import styled from 'styled-components'

const Navbar: FC = ({}) => {
	return (
		<Base>
			<Title>
				<span>Github</span> Jobs
			</Title>
		</Base>
	)
}

export default Navbar

const Base = styled.div`
	width: 80%;
	margin: 3rem 0;
	margin-left: auto;
`

const Title = styled.h1`
	color: ${({ theme }) => theme.palette.text.title};
	font-family: ${({ theme }) => theme.typo.family.accent};
	font-size: ${({ theme }) => theme.typo.size.title};
	font-weight: ${({ theme }) => theme.typo.weight.regular};

	& > span {
		font-weight: ${({ theme }) => theme.typo.weight.bold};
	}
`
