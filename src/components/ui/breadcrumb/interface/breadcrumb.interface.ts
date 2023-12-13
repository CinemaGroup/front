import { ReactNode } from 'react'

export type IBreadcrumbItem = {
	label: ReactNode | string
	path: string
}
export type IBreadcrumb = {
	items: IBreadcrumbItem[]
	className?: string
}
