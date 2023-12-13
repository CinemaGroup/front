'use client'

import CiIcon from '@/components/ui/icon/CiIcon'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './ManageTableActions.module.scss'
import { IManageActions } from './interface/manage-actions.interface'
import PiIcon from '@/components/ui/icon/PiIcon'

const ManageTableActions: FC<IManageActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			<button className={styles.button} onClick={() => push(editUrl)}>
				<CiIcon name="CiEdit" />
			</button>
			<button className={styles.button} onClick={removeHandler}>
				<PiIcon name="PiTrash" />
			</button>
		</div>
	)
}

export default ManageTableActions
