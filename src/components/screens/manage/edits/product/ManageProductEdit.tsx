'use client'

import Container from '@/components/ui/container/Container'
import Button from '@/components/ui/form-elements/button/Button'
import MaterialIcon from '@/components/ui/icon/MaterialIcon'
import { getAdminUrl } from '@/config/url.config'
import { useMultiStepForm } from '@/hooks/custom-hooks/form/useMultiStepForm'
import { useManageProductEdit } from '@/hooks/manage/products/useManageProductEdit'
import { TypeProductInput } from '@/services/product/types/product.type'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import styles from './ManageProductEdit.module.scss'
import ManageProductAbout from './about/ManageProductAbout'
import ManageProductGeneral from './general/ManageProductGeneral'
import ManageProductGets from './gets/ManageProductGets'
import ManageProductPrinciples from './principles/ManageProductPrinciples'
import ManageProductVariations from './variations/ManageProductVariations'

const ManageProductEdit: FC<{ queryId: string }> = ({ queryId }) => {
	const { handleSubmit, setValue, control, unregister } =
		useForm<TypeProductInput>({
			mode: 'onChange',
		})

	const { onSubmit } = useManageProductEdit(queryId, setValue)
	const { steps, isLastStep, isFirstStep, prev, next, getVisibility } =
		useMultiStepForm([
			<ManageProductGeneral control={control} />,
			<ManageProductVariations control={control} unregister={unregister} />,
			<ManageProductAbout control={control} />,
			<ManageProductPrinciples control={control} />,
			<ManageProductGets control={control} />,
		])

	return (
		<div className={styles.wrapper}>
			<Container>
				<div className={styles.fill}>
					<Link href={getAdminUrl('/products')} className={styles.breadcrumb}>
						<MaterialIcon name="MdOutlineChevronLeft" />
						Назад
					</Link>
					<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
						{steps.map((step, index) => (
							<div key={index} className={cn(styles.tab, getVisibility(index))}>
								{step}
							</div>
						))}
						{isLastStep && (
							<Button variant="light" className={styles.update}>
								Обновить
							</Button>
						)}
					</form>
					<div className={styles.actions}>
						{!isFirstStep && (
							<Button variant="light" className={styles.prev} onClick={prev}>
								<MaterialIcon name="MdOutlineArrowCircleLeft" />
								Предыдущий шаг
							</Button>
						)}
						{!isLastStep && (
							<Button variant="light" className={styles.next} onClick={next}>
								Следующий шаг
								<MaterialIcon name="MdOutlineArrowCircleRight" />
							</Button>
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default ManageProductEdit
