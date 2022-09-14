import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta
					property='og:title'
					content='Upside Official — Beats, Studio Recording & Mixing'
				/>
				<meta property='og:type' content='website' />
				<link rel='icon' href='/assets/upside-favi.ico' />
				<meta
					property='og:url'
					content='https://upsideofficial.com'
				/>
				<meta
					property='og:image'
					content='https://www.upsideofficial.com/assets/images/upside-og.png'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossorigin
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
