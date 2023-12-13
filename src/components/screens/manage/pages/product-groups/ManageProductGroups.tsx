'use client'

import Container from '@/components/ui/container/Container'
import ManageHeader from '@/components/ui/manage/manage-header/ManageHeader'
import ManageNavigation from '@/components/ui/manage/manage-navigation/ManageNavigation'
import ManageTable from '@/components/ui/manage/manage-table/ManageTable'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { useManageProductGroups } from '@/hooks/manage/product-groups/useManageProductGroups'
import { FC } from 'react'
import styles from '../ManagePages.module.scss'

const ManageProductGroups: FC = () => {
	const { searchTerm, data, handleSearch, createAsync, deleteAsync } =
		useManageProductGroups()

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<ManageNavigation />
					<SubHeading className={styles.subtitle}>
						Группы для продуктов
					</SubHeading>
					<ManageHeader
						searchTerm={searchTerm}
						handleSearch={handleSearch}
						onClick={createAsync}
					/>
					<ManageTable
						removeHandler={deleteAsync}
						headerItems={['Название', 'Slug', 'Описание', 'Дата создания']}
						items={data || []}
					/>
				</div>
			</Container>
		</div>
	)
}

export default ManageProductGroups
