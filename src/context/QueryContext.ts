import { createContext, useContext } from 'react'

export interface IQueryContext {
	query: string
	setQuery: (query: string) => void
}

export const QueryContext = createContext<IQueryContext>({
	query: '',
	setQuery: () => console.warn('No query provided')
})

export const useQueryContext = useContext(QueryContext)
