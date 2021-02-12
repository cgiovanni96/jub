import { IQuery } from '../context/QueryContext'

const stringifyQuery = (query: IQuery): string => {
	let queryString = '&'

	if (query.description)
		queryString = queryString + `description=${query.description}`
	if (query.location) queryString = queryString + `location=${query.location}`
	if (query.type) queryString = queryString + `full_time=true`

	if (queryString === '&') queryString = ''
	return queryString
}

export default stringifyQuery
