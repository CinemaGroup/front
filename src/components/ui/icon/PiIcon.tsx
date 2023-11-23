import * as PiIcons from 'react-icons/pi'

import { FC } from 'react'
import { IIoIcon } from './interface/icon.interface'

const PiIcon: FC<IIoIcon> = ({ name, className, style }) => {
	const IconComponent = PiIcons[name]

	return <IconComponent className={className && className} style={style} />
}

export default PiIcon
