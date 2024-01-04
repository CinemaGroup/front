/** @type {import('next').NextConfig} */

const hostnames = ['lh3.googleusercontent.com']

const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: true,
	images: {
		remotePatterns: hostnames.map((hostname) => ({
			protocol: 'https',
			hostname,
		})),
	},
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.APP_SERVER_URL,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://82.97.243.54:4200/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://82.97.243.54:4200/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
