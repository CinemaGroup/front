import MaterialIcon from '@/components/ui/icon/MaterialIcon'
import { IType } from '@/shared/interfaces/type.interface'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from '../Types.module.scss'

const TypesItem: FC<{ type: IType }> = ({ type }) => {
	const pathname = usePathname()
	console.log(pathname)

	return (
		<Link
			className={cn(styles.type, {
				[styles.active]: pathname === `/shop/${type.slug}`,
			})}
			href={`/shop/${type.slug}`}
		>
			<div className={styles.info}>
				<h2 className={styles.name} style={{ color: type.color }}>
					{type.name}
				</h2>
				<p className={styles.description}>{type.description}</p>
			</div>
			<MaterialIcon name="MdKeyboardBackspace" style={{ color: type.color }} />
		</Link>
	)
}

export default TypesItem
