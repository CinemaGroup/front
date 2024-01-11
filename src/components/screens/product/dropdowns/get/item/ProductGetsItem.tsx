import { IProductGet } from '@/shared/interfaces/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../../ProductDropdowns.module.scss'

const ProductGetsItem: FC<{ get: IProductGet }> = ({ get }) => {
	return (
		<div className={styles.item}>
			<div className={styles.preview}>
				<Image
					priority
					draggable={false}
					width={50}
					height={50}
					src={get.imagePath}
					alt={get.title}
				/>
			</div>
			<div className={styles.info}>
				<h3 className={styles.itemTitle}>{get.title}</h3>
				<div
					className={styles.itemText}
					dangerouslySetInnerHTML={{ __html: get.description }}
				/>
			</div>
		</div>
	)
}

export default ProductGetsItem
