'use client'

import Icon from '@/components/ui/icon/Icon'
import { IProductGet } from '@/shared/interfaces/product.interface'
import cn from 'classnames'
import { FC, useState } from 'react'
import styles from '../ProductDropdowns.module.scss'
import ProductGetsItem from './item/ProductGetsItem'

const ProductGets: FC<{ gets: IProductGet[] }> = ({ gets }) => {
	const [isShow, setIsShow] = useState(true)

	return (
		<div className={styles.wrapper}>
			<button className={styles.title} onClick={() => setIsShow(!isShow)}>
				что вы получите после заказа?
				<Icon name="ChevronDown" />
			</button>
			{isShow && (
				<div className={cn(styles.box, styles.getsBox)}>
					{gets.map((get, index) => (
						<ProductGetsItem key={index} get={get} />
					))}
				</div>
			)}
		</div>
	)
}

export default ProductGets
