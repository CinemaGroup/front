export interface IProductVideo {
	videoPoster: string | undefined
	videoPath: string | undefined
}

export interface IProductVideoOptions {
	controls: boolean
	url: string
	width: string
	height: string
	light?: string
}
