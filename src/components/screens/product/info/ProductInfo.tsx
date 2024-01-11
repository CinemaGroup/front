import Container from '@/components/ui/container/Container'
import Button from '@/components/ui/form-elements/button/Button'
import Icon from '@/components/ui/icon/Icon'
import { getPercent } from '@/utils/custom-utils/get-percent'
import Image from 'next/image'
import { FC } from 'react'
import styles from './ProductInfo.module.scss'
import { IProductInfo } from './interface/product-info.interface'

const ProductInfo: FC<IProductInfo> = ({ variation, title, description }) => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.inner}>
					<div className={styles.left}>
						<h2 className={styles.title}>{'Что такое' + title}</h2>
						<div
							className={styles.description}
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
					<div className={styles.right}>
						<div className={styles.preview}>
							<Image
								priority
								quality={100}
								draggable={false}
								fill
								src={variation.image}
								alt={title}
							/>
						</div>
						<div className={styles.info}>
							<div
								className={styles.composition}
								dangerouslySetInnerHTML={{ __html: variation.composition }}
							/>
							<ul></ul>
							<p className={styles.bought}>
								<Icon name="ShoppingBag" />
								Количество покупок: {variation.boughtTimes}
							</p>
							<div className={styles.priceBox}>
								{variation.salePrice ? (
									<>
										<div className={styles.retail}>
											<p className={styles.oldPrice}>{variation.price} руб</p>
											<span className={styles.sale}>
												{100 - getPercent(variation.salePrice, variation.price)}
												% Скидка
											</span>
										</div>
										<p className={styles.price}>{variation.salePrice} руб</p>
									</>
								) : (
									<p className={styles.price}>{variation.price} руб</p>
								)}
							</div>
							<Button variant="dark" className={styles.buy}>
								Купить
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default ProductInfo
