import { BASE_URI } from '../client/constants'
import { QueryResponse } from '../utility'

const jobs = async (): Promise<QueryResponse> => {
	const res: Response = await fetch(BASE_URI)
	return res.json()
}

export default jobs
