'use client'

import Icon from '@/components/ui/icon/Icon'
import { IProductGet } from '@/shared/interfaces/product.interface'
import cn from 'classnames'
import { FC, useState } from 'react'
import styles from '../ProductDropdowns.module.scss'
import ProductPrinciplesItem from './item/ProductPrinciplesItem'

const ProductPrinciples: FC<{ principles: IProductGet[] }> = ({
	principles,
}) => {
	const [isShow, setIsShow] = useState(true)

	return (
		<div className={styles.wrapper}>
			<button className={styles.title} onClick={() => setIsShow(!isShow)}>
				Принципы нашей работы
				<Icon name="ChevronDown" />
			</button>
			{isShow && (
				<div className={cn(styles.box, styles.principlesBox)}>
					{principles.map((principle, index) => (
						<ProductPrinciplesItem key={index} principle={principle} />
					))}
				</div>
			)}
		</div>
	)
}

export default ProductPrinciples
