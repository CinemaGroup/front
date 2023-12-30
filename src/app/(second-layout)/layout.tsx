import '@/assets/styles/globals.scss'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/seo.constants'
import { Inter, Qanelas, RadioCanada, RoadRadio, Roboto } from '@/fonts/fonts'
import Providers from '@/providers/Providers'
import styles from './layout.module.scss'

export const metadata = {
	icons: {
		icon: '@/assets/meta/favicon-16x16.png',
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@mediabuilding.com'],
	},
}

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body
				className={`${Inter.variable} ${Qanelas.variable} ${RadioCanada.variable} ${RoadRadio.variable} ${Roboto.variable}`}
			>
				<Providers>
					<main className={styles.main}>{children}</main>
				</Providers>
				<div id="modal"></div>
			</body>
		</html>
	)
}
