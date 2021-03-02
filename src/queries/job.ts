import { JOB_URI } from '../client/constants'
import { JobType } from '../utility'

const job = async (id: string): Promise<JobType> => {
	const queryId = `?id=${id}`
	const URI = JOB_URI + queryId

	const res: Response = await fetch(URI)
	return res.json()
}

export default job
