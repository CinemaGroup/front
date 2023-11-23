import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import styles from './HomeHeading.module.scss'

const HomeHeading: FC = () => {
	return (
		<div className={styles.box}>
			<Heading className={styles.heading}>Цифровая поддержка бренду и бизнесу</Heading>
			<h2 className={styles.subHeading}>
				Оптимизируем маркетинг при помощи нейросетей
			</h2>
		</div>
	)
}

export default HomeHeading
