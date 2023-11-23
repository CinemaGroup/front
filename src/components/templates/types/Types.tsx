import cn from 'classnames'
import { FC } from 'react'
import styles from './Types.module.scss'
import { ITypes } from './interface/types.interface'
import TypesItem from './item/TypesItem'

const Types: FC<ITypes> = ({ types, className }) => {
	return (
		<div className={cn(styles.types, className && className)}>
			{types.map((type) => (
				<TypesItem key={type.id} type={type} />
			))}
		</div>
	)
}

export default Types
