import { createContext } from 'react'

export interface IQueryContext {
	query: string
	setQuery?: React.Dispatch<React.SetStateAction<string>>
}

export const QueryContext = createContext<IQueryContext>({ query: '' })
