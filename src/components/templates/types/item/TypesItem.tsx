import MaterialIcon from '@/components/ui/icon/MaterialIcon'
import { IType } from '@/shared/interfaces/type.interface'
import { FC } from 'react'
import styles from '../Types.module.scss'

const TypesItem: FC<{ type: IType }> = ({ type }) => {
	return (
		<div className={styles.type}>
			<div className={styles.info}>
				<h2 className={styles.name} style={{color: type.color}}>{type.name}</h2>
				<p className={styles.description}>{type.description}</p>
			</div>
			<MaterialIcon name="MdKeyboardBackspace" style={{color: type.color}} />
		</div>
	)
}

export default TypesItem
