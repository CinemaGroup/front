import cn from 'classnames'
import { FC } from 'react'
import CiIcon from '../icon/CiIcon'
import styles from './Search.module.scss'
import { ISearch } from './interface/search.interface'

const Search: FC<ISearch> = ({
	className,
	placeholder,
}) => {
	return (
		<div className={cn(styles.search, className && className)}>
			<input
				className={styles.field}
				placeholder={placeholder ? placeholder : 'Поиск...'}
			/>
			<button className={styles.button}>
				<CiIcon name="CiSearch" />
			</button>
		</div>
	)
}

export default Search
