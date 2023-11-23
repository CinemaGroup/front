import CiIcon from '@/components/ui/icon/CiIcon'
import MaterialIcon from '@/components/ui/icon/MaterialIcon'
import PiIcon from '@/components/ui/icon/PiIcon'
import { TypeIcon } from '@/shared/types/globals.type'
import Image from 'next/image'
import { validateIcon } from '../validations/validate-icon'

export const renderIcon = (icon: TypeIcon | null) => {
	if (!icon) return null

	const { isMaterialIcon, isCiIcon, isPiIcon, isImage } = validateIcon()

	if (isMaterialIcon(icon)) {
		return <MaterialIcon name={icon} />
	}

	if (isCiIcon(icon)) {
		return <CiIcon name={icon} />
	}

	if (isPiIcon(icon)) {
		return <PiIcon name={icon} />
	}

	if (isImage(icon)) {
		return (
			<Image
				quality={100}
				priority
				draggable={false}
				src={icon.link}
				width={icon.width}
				height={icon.height}
				alt={icon.alt}
			/>
		)
	}
	return null
}
