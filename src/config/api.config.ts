export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getProductTypesUrl = (string: string) => `/product-types${string}`
export const getProductGroupsUrl = (string: string) =>
	`/product-groups${string}`
export const getProductsUrl = (string: string) => `/products${string}`
export const getProductCategoriesUrl = (string: string) =>
	`/product-categories${string}`
export const getFilesUrl = (string: string) => `/files${string}`
