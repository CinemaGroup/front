import logo from '@/assets/images/global/logo-large.svg'
import mobileLogo from '@/assets/images/global/logo-mobile.svg'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ILogo } from './interface/logo.interface'

const Logo: FC<ILogo> = ({ variant, className }) => {
	return (
		<Link className={className && className} href="/">
			{variant === 'desktop' ? (
				<Image
					priority
					draggable={false}
					quality={100}
					src={logo}
					alt={SITE_NAME}
				/>
			) : (
				<Image
					priority
					draggable={false}
					quality={100}
					src={mobileLogo}
					alt={SITE_NAME}
				/>
			)}
		</Link>
	)
}

export default Logo
