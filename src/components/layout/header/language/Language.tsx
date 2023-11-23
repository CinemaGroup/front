'use client'

import CustomSelect from '@/components/ui/selects/custom-select/CustomSelect'
import cn from 'classnames'
import { FC } from 'react'
import styles from './Language.module.scss'
import { LANGUAGE_DATA } from './data/language.data'
import { ILanguage } from './interface/language.interface'

const Language: FC<ILanguage> = ({ className }) => {
	return (
		<div className={cn(styles.language, className && className)}>
			<CustomSelect
				data={LANGUAGE_DATA}
				onChange={() => console.log('language changed')}
				value={LANGUAGE_DATA[0]}
			/>
		</div>
	)
}

export default Language
