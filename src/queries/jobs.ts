import { JOBS_URI } from '../client/constants'
import { IQuery } from '../context/QueryContext'
import { QueryResponse } from '../utility'
import stringifyQuery from '../utility/stringifyQuery'

const jobs = async (query: IQuery): Promise<QueryResponse> => {
	const queryString = stringifyQuery(query)
	const URI = JOBS_URI + queryString
	const res: Response = await fetch(URI)
	return res.json()
}

export default jobs
