import Container from '@/components/ui/container/Container'
import Image from 'next/image'
import { FC } from 'react'
import styles from './ProductAbout.module.scss'
import { IProductAboutProps } from './interface/product-about.interace'
import ProductAboutItem from './item/ProductAboutItem'

const ProductAbout: FC<IProductAboutProps> = ({ about, productCategory }) => {
	return (
		<div className={styles.about}>
			<Image
				priority
				quality={100}
				draggable={false}
				fill
				src={productCategory.backgroundImage}
				alt={about.title}
			/>
			<div className={styles.inner}>
				<Container>
					<div className={styles.fill}>
						<h2 className={styles.title}>{about.title}</h2>
						<div className={styles.items}>
							{about.items.map((item, index) => (
								<ProductAboutItem key={index} item={item} />
							))}
						</div>
						<Image
							className={styles.phone}
							priority
							quality={100}
							draggable={false}
							width={600}
							height={850}
							src={productCategory.phoneImage}
							alt={about.title}
						/>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default ProductAbout
