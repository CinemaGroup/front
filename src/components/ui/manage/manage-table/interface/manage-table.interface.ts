export interface ITableItem {
	id: number
	editUrl: string
	data: (string | number)[]
}

export interface IManageTableItem {
	item: ITableItem
	removeHandler: () => void
}

export interface IManageTable {
	items: ITableItem[]
	headerItems: string[]
	removeHandler: (id: string) => void
}
