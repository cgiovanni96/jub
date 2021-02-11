export const useGetPageList = (currentPage: number): number[] => {
	const pagesList: number[] = []
	if (currentPage === 1) pagesList.push(...[1, 2, 3])
	else if (currentPage % 10 === 0)
		pagesList.push(...[currentPage - 2, currentPage - 1, currentPage])
	else pagesList.push(...[currentPage - 1, currentPage, currentPage + 1])
	return pagesList
}
