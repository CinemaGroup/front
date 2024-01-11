import chevronDown from '@/assets/images/icons/chevron-down.svg'
import HeartFill from '@/assets/images/icons/heart-fill-red.svg'
import Heart from '@/assets/images/icons/heart-white.svg'
import FavoriteBtn from '@/components/templates/products/general/favorite-btn/FavoriteBtn'
import SimilarProducts from '@/components/templates/products/similar/SimilarProducts'
import Icon from '@/components/ui/icon/Icon'
import CustomSelect from '@/components/ui/selects/custom-select/CustomSelect'
import { getPercent } from '@/utils/custom-utils/get-percent'
import Image from 'next/image'
import { FC } from 'react'
import styles from './ProductRight.module.scss'
import { VARIATION_DATA } from './data/product-variations.data'
import { IProductRight } from './interface/product-right.interface'

const ProductRight: FC<IProductRight> = ({
	product,
	variation,
	setCurrentIndex,
	similarProducts,
	currentVariation,
}) => {
	return (
		<div className={styles.product}>
			<div className={styles.wrapper}>
				<div className={styles.fill}>
					<div className={styles.left}>
						<div className={styles.thumbnail}>
							<Image
								quality={100}
								priority
								draggable={false}
								fill
								src={variation.image}
								alt={product.name}
							/>
							<FavoriteBtn
								className={styles.favorite}
								productId={product.id}
								defaultIcon={{
									link: Heart.src,
									width: 26,
									height: 23,
									alt: 'Heart',
								}}
								checkedIcon={{
									link: HeartFill.src,
									width: 26,
									height: 23,
									alt: 'Filled Heart',
								}}
							/>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.priceBox}>
							{variation.salePrice ? (
								<>
									<div className={styles.retail}>
										<p className={styles.oldPrice}>{variation.price} руб</p>
										<span className={styles.sale}>
											{100 - getPercent(variation.salePrice, variation.price)}%
											Скидка
										</span>
									</div>
									<p className={styles.price}>{variation.salePrice} руб</p>
								</>
							) : (
								<p className={styles.price}>{variation.price} руб</p>
							)}
						</div>
						<div className={styles.select}>
							<CustomSelect
								wrapperClassName={styles.selectWrapper}
								buttonClassName={styles.selectBtn}
								listClassName={styles.selectList}
								itemClassName={styles.selectItem}
								itemActiveClassName={styles.selectItemActive}
								toggleIcon={{
									link: chevronDown.src,
									width: 21,
									height: 10,
									alt: 'Chevron Down',
								}}
								toggleIconClassName={styles.selectToggle}
								data={VARIATION_DATA(product.variations)}
								onChange={(item) => setCurrentIndex(item.key)}
								value={{
									label: currentVariation,
									key: currentVariation,
								}}
							/>
						</div>
						<div
							className={styles.description}
							dangerouslySetInnerHTML={{ __html: variation.shortDescription }}
						/>
						<ul className={styles.rating}>
							<Icon name="Star" />
						</ul>
					</div>
				</div>
				<div className={styles.info}>
					<p className={styles.infoItem}>
						<Icon name="ShoppingBag" />
						Количество покупок: {variation.boughtTimes}
					</p>
					<p className={styles.infoItem}>
						<Icon name="Settings" />
						Дополнительные настройки: отсутствуют
					</p>
					<p className={styles.infoItem}>
						<Icon name="CircleUser" />
						Персональный менеджер
					</p>
				</div>
				{similarProducts.length > 0 && (
					<SimilarProducts
						products={similarProducts}
						className={styles.similar}
					/>
				)}
			</div>
		</div>
	)
}

export default ProductRight
