import { FC } from 'react'
import styles from './ManageCreateButton.module.scss'

const ManageCreateButton: FC<{ onClick: () => void }> = ({
	onClick,
}) => {
	return (
		<button className={styles.button} onClick={onClick}>
			Создать
		</button>
	)
}

export default ManageCreateButton
