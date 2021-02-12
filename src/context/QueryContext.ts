import { createContext } from 'react'

export interface IQuery {
	description?: string
	location?: string
	type?: boolean
}
export interface IQueryContext {
	query: IQuery
	setQuery?: React.Dispatch<React.SetStateAction<IQuery>>
}

export const defaultQuery: IQuery = {
	description: undefined,
	location: undefined,
	type: undefined
}

export const QueryContext = createContext<IQueryContext>({
	query: defaultQuery
})
