import { FC } from 'react'
import styles from './ProductDropdowns.module.scss'
import ProductGets from './get/ProductGets'
import { IProductDropdowns } from './interface/product-dropdowns.interace'
import ProductPrinciples from './principles/ProductPrinciples'

const ProductDropdowns: FC<IProductDropdowns> = ({ principles, gets }) => {
	return (
		<div className={styles.dropdowns}>
			<ProductPrinciples principles={principles} />
			<ProductGets gets={gets} />
		</div>
	)
}

export default ProductDropdowns
