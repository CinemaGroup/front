import '@/assets/styles/globals.scss'
import SocialFooter from '@/components/layout/footer/social/SocialFooter'
import Header from '@/components/layout/header/Header'
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

export default function RootLayout({
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
					<div className={styles.layout}>
						<Header />
						<main className={styles.main}>{children}</main>
						<SocialFooter />
					</div>
				</Providers>
				<div id="modal"></div>
			</body>
		</html>
	)
}
