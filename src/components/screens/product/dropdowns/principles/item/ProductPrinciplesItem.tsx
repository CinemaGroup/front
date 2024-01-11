import { IProductPrinciple } from '@/shared/interfaces/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from '../../ProductDropdowns.module.scss'

const ProductPrinciplesItem: FC<{ principle: IProductPrinciple }> = ({
	principle,
}) => {
	return (
		<div className={styles.item}>
			<div className={styles.preview}>
				<Image
					priority
					draggable={false}
					width={50}
					height={50}
					src={principle.imagePath}
					alt={principle.title}
				/>
			</div>
			<div className={styles.info}>
				<h3 className={styles.itemTitle}>{principle.title}</h3>
				<div
					className={styles.itemText}
					dangerouslySetInnerHTML={{ __html: principle.description }}
				/>
			</div>
		</div>
	)
}

export default ProductPrinciplesItem
