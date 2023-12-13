import ProductCategories from '@/components/blocks/categories/ProductCategories'
import ProductTypes from '@/components/blocks/product-types/ProductTypes'
import ShopProducts from '@/components/blocks/products/shop/ShopProducts'
import Container from '@/components/ui/container/Container'
import { FC } from 'react'
import styles from './Shop.module.scss'
import ShopBreadcrumb from './bredcrumb/ShopBreadcrumb'

const Shop: FC<{ query: string }> = ({ query }) => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<ShopBreadcrumb slug={query} />
					<ProductTypes />
					<ProductCategories slug={query} className={styles.categories} />
					<ShopProducts type={query} />
				</div>
			</Container>
		</div>
	)
}

export default Shop
