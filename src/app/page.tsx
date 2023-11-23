import Home from '@/components/screens/home/Home'
import { SITE_NAME } from '@/constants/seo.constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
	description: `${SITE_NAME} Description`,
}

export default function HomePage() {
	return <Home />
}
