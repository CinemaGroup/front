import ProductTypes from '@/components/blocks/product-types/ProductTypes'
import Container from '@/components/ui/container/Container'
import { FC } from 'react'
import styles from './Home.module.scss'
import HomeHeading from './heading/HomeHeading'
import HomeSearch from './search/HomeSearch'

const Home: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<HomeHeading />
					<HomeSearch />
					<ProductTypes className={styles.types} />
				</div>
			</Container>
		</div>
	)
}

export default Home
