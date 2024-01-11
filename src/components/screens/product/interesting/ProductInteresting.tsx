import ProductTypes from '@/components/blocks/product-types/ProductTypes'
import { FC } from 'react'
import styles from './ProductInteresting.module.scss'

const ProductInteresting: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Возможно, вам будет это интересно</h2>
			<ProductTypes />
		</div>
	)
}

export default ProductInteresting
