'use client'

import Container from '@/components/ui/container/Container'
import ManageHeader from '@/components/ui/manage/manage-header/ManageHeader'
import ManageNavigation from '@/components/ui/manage/manage-navigation/ManageNavigation'
import ManageTable from '@/components/ui/manage/manage-table/ManageTable'
import SubHeading from '@/components/ui/sub-heading/SubHeading'
import { useManageProductTypes } from '@/hooks/manage/product-types/useManageProductTypes'
import { FC } from 'react'
import styles from '../ManagePages.module.scss'

const ManageProductTypes: FC = () => {
	const { searchTerm, data, handleSearch, createAsync, deleteAsync } =
		useManageProductTypes()

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<ManageNavigation />
					<SubHeading className={styles.subtitle}>
						Типы для продуктов
					</SubHeading>
					<ManageHeader
						searchTerm={searchTerm}
						handleSearch={handleSearch}
						onClick={createAsync}
					/>
					<ManageTable
						removeHandler={deleteAsync}
						headerItems={['Название', 'Slug', 'Описание', 'Цвет', 'Дата создания']}
						items={data || []}
					/>
				</div>
			</Container>
		</div>
	)
}

export default ManageProductTypes
