import { BASE_URI } from '../client/constants'
import { QueryResponse } from '../utility'

const jobs = async (query: string): Promise<QueryResponse> => {
	console.log('Query', query)
	const res: Response = await fetch(BASE_URI)
	return res.json()
}

export default jobs
