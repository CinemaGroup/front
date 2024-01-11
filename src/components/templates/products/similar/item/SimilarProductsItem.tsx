import HeartFill from '@/assets/images/icons/heart-fill-red.svg'
import Heart from '@/assets/images/icons/heart-white.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import { IProduct } from '@/shared/interfaces/product.interface'
import { getPercent } from '@/utils/custom-utils/get-percent'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import FavoriteBtn from '../../general/favorite-btn/FavoriteBtn'
import styles from '../SimilarProducts.module.scss'

const SimilarProductsItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.product}>
			<div className={styles.preview}>
				<Link className={styles.link} href={`/product/${product.slug}`}>
					<Image
						quality={100}
						priority
						draggable={false}
						fill
						src={product.variations[0].image}
						alt={product.name}
					/>
				</Link>
				<FavoriteBtn
					className={styles.favorite}
					productId={product.id}
					defaultIcon={{
						link: Heart.src,
						width: 19,
						height: 17,
						alt: `${SITE_NAME} Favorite`,
					}}
					checkedIcon={{
						link: HeartFill.src,
						width: 19,
						height: 17,
						alt: `${SITE_NAME} Favorite`,
					}}
				/>
			</div>
			<Link className={styles.link} href={`/product/${product.slug}`}>
				<h3 className={styles.name}>{product.name}</h3>
				<div className={styles.priceBox}>
					{product.variations[0].salePrice ? (
						<>
							<div className={styles.retail}>
								<p className={styles.oldPrice}>
									{product.variations[0].price} руб
								</p>
								<span className={styles.sale}>
									{100 -
										getPercent(
											product.variations[0].salePrice,
											product.variations[0].price
										)}
									% Скидка
								</span>
							</div>
							<p className={styles.price}>
								{product.variations[0].salePrice} руб
							</p>
						</>
					) : (
						<p className={styles.price}>{product.variations[0].price} руб</p>
					)}
				</div>
			</Link>
		</div>
	)
}

export default SimilarProductsItem
