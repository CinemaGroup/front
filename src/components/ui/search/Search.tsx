import cn from 'classnames'
import { FC } from 'react'
import Icon from '../icon/Icon'
import styles from './Search.module.scss'
import { ISearch } from './interface/search.interface'

const Search: FC<ISearch> = ({ className, placeholder }) => {
	return (
		<div className={cn(styles.search, className && className)}>
			<input
				className={styles.field}
				placeholder={placeholder ? placeholder : 'Поиск...'}
			/>
			<button className={styles.button}>
				<Icon name="Search" />
			</button>
		</div>
	)
}

export default Search
