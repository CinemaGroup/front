'use client'

import Search from '@/components/ui/search/Search'
import { FC } from 'react'
import styles from '../Home.module.scss'

const HomeSearch: FC = () => {
	return (
		<Search
			className={styles.search}
			placeholder="Введите площадку"
		/>
	)
}

export default HomeSearch
