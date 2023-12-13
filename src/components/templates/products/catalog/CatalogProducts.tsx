import cn from 'classnames'
import { FC } from 'react'
import styles from './CatalogProducts.module.scss'
import { ICatalogProducts } from './interface/catalog-products.interface'
import CatalogProductsItem from './item/CatalogProductsItem'

const CatalogProducts: FC<ICatalogProducts> = ({ groups, className }) => {
	return (
		<div className={styles.groups}>
			{groups.map((group, index) => (
				<div key={index} className={cn(styles.group, className && className)}>
					<h2 className={styles.groupName}>{group.name}</h2>
					<p
						className={styles.groupText}
						dangerouslySetInnerHTML={{
							__html: group.description,
						}}
					/>
					<div className={styles.products}>
						{group.products.map((product) => (
							<CatalogProductsItem key={product.id} product={product} />
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default CatalogProducts
