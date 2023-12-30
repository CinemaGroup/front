'use client'

import Icon from '@/components/ui/icon/Icon'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './ManageTableActions.module.scss'
import { IManageActions } from './interface/manage-actions.interface'

const ManageTableActions: FC<IManageActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			<button className={styles.button} onClick={() => push(editUrl)}>
				<Icon name="Pencil" />
			</button>
			<button className={styles.button} onClick={removeHandler}>
				<Icon name="Trash2" />
			</button>
		</div>
	)
}

export default ManageTableActions
