import Button from '@/components/ui/form-elements/button/Button'
import Heading from '@/components/ui/heading/Heading'
import Icon from '@/components/ui/icon/Icon'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import styles from './ProductLeft.module.scss'
import { IProductLeft } from './interface/product-left.interface'

const ProductLeft: FC<IProductLeft> = ({
	name,
	productTypeName,
	variation,
	isShow,
	setIsShow,
}) => {
	return (
		<div className={styles.about}>
			<button
				className={styles.breadcrumb}
				onClick={() => window.history.back()}
			>
				<Icon name="ArrowLeft" />
				Вернуться в каталог
			</button>
			<Heading className={styles.name}>{name}</Heading>
			<div className={styles.composition}>
				<h3 className={styles.compositionTitle}>
					В состав пакета (все включено):
				</h3>
				<div
					className={styles.compositionText}
					dangerouslySetInnerHTML={{ __html: variation.composition }}
				/>
			</div>
			<div
				className={styles.information}
				dangerouslySetInnerHTML={{ __html: variation.information }}
			/>
			<div className={styles.additional}>
				<p className={styles.sku}>Артикул: {variation.sku}</p>
				<Link href="/">Категория: {productTypeName}</Link>
			</div>
			<p className={styles.account}>
				<Icon name="Zap" />
				Требования к аккаунту
			</p>
			<Button variant="light" className={styles.buy}>
				Купить
			</Button>
			<button
				className={cn(styles.more, {
					[styles.active]: isShow,
				})}
				onClick={() => setIsShow(!isShow)}
			>
				Узнать о товаре больше
				<Icon name="ChevronDown" />
			</button>
		</div>
	)
}

export default ProductLeft
