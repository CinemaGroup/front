import { icons } from 'lucide-react'
import { FC } from 'react'
import { IIcon } from './interface/icon.interface'

const Icon: FC<IIcon> = ({ name, color, size }) => {
	const LucideIcon = icons[name]

	return <LucideIcon color={color} size={size} strokeWidth={1.25} />
}

export default Icon
