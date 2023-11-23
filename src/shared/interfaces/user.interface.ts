export interface IUser {
	id: number
	firstName?: string
	lastName?: string
	login: string
	email: string
	password: string
	phone?: string
	avatarPath: string
	balance: number
	bonus: number
	createdAt: string
	isAdmin: boolean
}

export interface IFullUser extends IUser {
	favorites: string[]
}
