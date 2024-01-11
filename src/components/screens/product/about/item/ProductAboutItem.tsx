import { IProductAboutItem } from '@/shared/interfaces/product.interface'
import { FC } from 'react'
import styles from '../ProductAbout.module.scss'

const ProductAboutItem: FC<{ item: IProductAboutItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<h3 className={styles.itemTitle}>{item.title}</h3>
			<div
				className={styles.itemText}
				dangerouslySetInnerHTML={{ __html: item.description }}
			/>
		</div>
	)
}

export default ProductAboutItem
