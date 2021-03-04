import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const renderers = {
	link: (arg: any) => {
		return <Link href={arg.href}>{arg.node.children[0].value}</Link>
	},

	paragraph: (arg: any) => {
		return <Paragraph> {arg.node.children[0].value}</Paragraph>
	}
}

interface TextProps {
	text: string
}

const Text: React.FC<TextProps> = ({ text }) => {
	console.log('Inside of Text')
	return (
		<ReactMarkdown plugins={[[gfm]]} renderers={renderers}>
			{text}
		</ReactMarkdown>
	)
}

export default Text

const Link = styled.a`
	color: inherit;
	font-weight: bold;
`

const Paragraph = styled.p`
	margin: 0.5rem 0;
	line-height: 1.2rem;
`
