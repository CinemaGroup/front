import cn from 'classnames'
import { FC } from 'react'
import CiIcon from '../../icon/CiIcon'
import styles from '../FormElements.module.scss'
import { ISearchField } from './interface/search-field.interface'

const SearchField: FC<ISearchField> = ({
	searchTerm,
	handleSearch,
	variant = 'default',
	className,
}) => {
	return (
		<div
			className={cn(
				{
					[styles.search]: variant === 'default',
				},
				className && className
			)}
		>
			<input
				placeholder="Search"
				value={searchTerm}
				onChange={handleSearch}
				className={styles.field}
			/>
			<button className={styles.micro}>
				<CiIcon name="CiSearch" />
			</button>
		</div>
	)
}

export default SearchField
