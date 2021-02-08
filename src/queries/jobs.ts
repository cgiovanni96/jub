import { BASE_URI } from '../client/constants'

const jobs = async () => {
	const res: Response = await fetch(BASE_URI)
	return res.json()
}

export default jobs
