import { FC } from 'react'
import styles from './ProductVariations.module.scss'
import { IProductVariations } from './interface/product-variations.interface'
import ProductLeft from './left/ProductLeft'
import ProductRight from './right/ProductRight'

const ProductVariations: FC<IProductVariations> = ({
	product,
	similarProducts,
	variation,
	setCurrentIndex,
	currentVariation,
	isShow,
	setIsShow,
}) => {
	return (
		<div className={styles.wrapper}>
			<ProductLeft
				name={product.name}
				productTypeName={product.productType.name}
				variation={variation}
				isShow={isShow}
				setIsShow={setIsShow}
			/>
			<ProductRight
				product={product}
				variation={variation}
				currentVariation={currentVariation}
				setCurrentIndex={setCurrentIndex}
				similarProducts={similarProducts}
			/>
		</div>
	)
}

export default ProductVariations
