import type { Metadata } from 'next'

import GoogleAuth from '@/components/screens/google-auth/GoogleAuth'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Google Auth Page',
	...NO_INDEX_PAGE,
}
export default function GoogleAuthPage() {
	return <GoogleAuth />
}
