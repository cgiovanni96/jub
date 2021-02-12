import { BASE_URI } from '../client/constants'
import { QueryResponse } from '../utility'

const jobs = async (query: string): Promise<QueryResponse> => {
	const URI = BASE_URI + query
	console.log('URI', URI)
	const res: Response = await fetch(URI)
	console.log('RES', res)
	return res.json()
}

export default jobs
