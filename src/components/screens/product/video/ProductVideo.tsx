import { FC } from 'react'
import ReactPlayer from 'react-player'
import styles from './ProductVideo.module.scss'
import {
	IProductVideo,
	IProductVideoOptions,
} from './interface/product-video.interface'

const ProductVideo: FC<IProductVideo> = ({ videoPoster, videoPath }) => {
	if (!videoPath) return null

	let options: IProductVideoOptions = {
		controls: true,
		url: videoPath,
		width: '100%',
		height: '100%',
	}

	if (videoPoster) options = { ...options, light: videoPoster }

	console.log(options)

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Почему именно наш?</h2>
			<div className={styles.video}>
				<ReactPlayer {...options} />
			</div>
		</div>
	)
}

export default ProductVideo
