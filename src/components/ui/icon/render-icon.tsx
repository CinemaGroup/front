import Icon from '@/components/ui/icon/Icon'
import { TypeIcon } from '@/shared/types/globals.type'
import Image from 'next/image'

// TODO: problem with types

export const renderIcon = (icon: TypeIcon) => {
	if (typeof icon === 'string') {
		return <Icon name={icon} />
	} else {
		return (
			<Image
				quality={icon.quality}
				priority
				fill={icon.fill}
				src={icon.link}
				width={icon.width}
				height={icon.height}
				sizes={icon.sizes}
				alt={icon.alt}
			/>
		)
	}
}
