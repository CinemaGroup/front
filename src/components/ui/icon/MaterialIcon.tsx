import * as MaterialIcons from 'react-icons/md'

import { FC } from 'react'
import { IMaterialIcon } from './interface/icon.interface'

const MaterialIcon: FC<IMaterialIcon> = ({ name, className, style }) => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent className={className && className} style={style} />
}

export default MaterialIcon
