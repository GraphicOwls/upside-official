import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Layout from '../layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='light'
			enableSystem={false}
		>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
