'use client'

import Container from '@/components/ui/container/Container'
import { useVariations } from '@/hooks/custom-hooks/variations/useVariations'
import { FC, useState } from 'react'
import styles from './Product.module.scss'
import ProductAbout from './about/ProductAbout'
import ProductDropdowns from './dropdowns/ProductDropdowns'
import ProductInfo from './info/ProductInfo'
import ProductInteresting from './interesting/ProductInteresting'
import { IProductComponent } from './interface/product.interface'
import ProductVariations from './variations/ProductVariations'
import ProductVideo from './video/ProductVideo'

const Product: FC<IProductComponent> = ({ product, similarProducts }) => {
	const [isShow, setIsShow] = useState(false)
	const { variation, currentIndex, setCurrentIndex } = useVariations(
		product.variations
	)

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.inner}>
					<ProductVariations
						product={product}
						variation={variation}
						similarProducts={similarProducts}
						currentVariation={currentIndex}
						setCurrentIndex={setCurrentIndex}
						isShow={isShow}
						setIsShow={setIsShow}
					/>
				</div>
			</Container>
			{isShow && (
				<div className={styles.content}>
					<ProductAbout
						about={product.about[0]}
						productCategory={product.productCategory}
					/>
					<Container>
						<div className={styles.inner}>
							<ProductDropdowns
								principles={product.principles}
								gets={product.gets}
							/>
							<ProductDropdowns
								principles={product.principles}
								gets={product.gets}
							/>
						</div>
					</Container>
					<ProductInfo
						title={product.name}
						description={product.description}
						variation={variation}
					/>
					<Container>
						<div className={styles.inner}>
							<ProductVideo
								videoPath={product.videoPath}
								videoPoster={product.videoPoster}
							/>
							<ProductInteresting />
						</div>
					</Container>
				</div>
			)}
		</div>
	)
}

export default Product
