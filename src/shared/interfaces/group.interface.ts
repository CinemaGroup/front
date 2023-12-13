export interface IGroup {
	id: number
	name: string
	slug: string
	description: string
	createdAt: string
}

export interface IFilteredGroups {
	groups: IGroup[]
	length: number
}
