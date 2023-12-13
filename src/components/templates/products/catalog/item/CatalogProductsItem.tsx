import Button from '@/components/ui/form-elements/button/Button'
import { IProduct } from '@/shared/interfaces/product.interface'
import { descriptionToExcerpt } from '@/utils/converts/description-to-excerpt'
import { getPercent } from '@/utils/custom-utils/get-percent'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import FavoriteBtn from '../../general/favorite-btn/FavoriteBtn'
import styles from '../CatalogProducts.module.scss'

const CatalogProductsItem: FC<{ product: IProduct }> = ({ product }) => {
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
					defaultIcon={'PiHeart'}
					checkedIcon={'PiHeartFill'}
				/>
			</div>
			<Link className={styles.link} href={`/product/${product.slug}`}>
				<h3 className={styles.name}>{product.name}</h3>
				<p
					className={styles.excerpt}
					dangerouslySetInnerHTML={{
						__html: descriptionToExcerpt(product.description, 50),
					}}
				/>
				<div className={styles.priceBox}>
					{product.variations[0].salePrice ? (
						<>
							<div className={styles.retail}>
								<p className={styles.oldPrice}>{product.variations[0].price} руб</p>
								<span className={styles.sale}>
									{100 -
										getPercent(
											product.variations[0].salePrice,
											product.variations[0].price
										)}
									% Скидка
								</span>
							</div>
							<p className={styles.price}>{product.variations[0].salePrice} руб</p>
						</>
					) : (
						<p className={styles.price}>{product.variations[0].price} руб</p>
					)}
				</div>
				<Button variant="dark" type="button" className={styles.buy}>
					Купить
				</Button>
			</Link>
		</div>
	)
}

export default CatalogProductsItem
