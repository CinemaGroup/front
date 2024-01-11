import cn from 'classnames'
import { FC } from 'react'
import styles from './SimilarProducts.module.scss'
import { ISimilarProducts } from './interface/similar-products.interface'
import SimilarProductsItem from './item/SimilarProductsItem'

const SimilarProducts: FC<ISimilarProducts> = ({ products, className }) => {
	return (
		<div className={cn(styles.products, className && className)}>
			{products.map((product) => (
				<SimilarProductsItem key={product.id} product={product} />
			))}
		</div>
	)
}

export default SimilarProducts
