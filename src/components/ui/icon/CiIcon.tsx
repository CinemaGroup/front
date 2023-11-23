import * as CiIcons from 'react-icons/ci'

import { FC } from 'react'
import { ICiIcon } from './interface/icon.interface'

const CiIcon: FC<ICiIcon> = ({ name, className, style }) => {
	const IconComponent = CiIcons[name]

	return <IconComponent className={className && className} style={style} />
}

export default CiIcon
