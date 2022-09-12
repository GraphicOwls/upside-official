import React from 'react'
import Head from 'next/head'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Upside Offcial</title>
				<meta
					name='author'
					content='Tyler Smith: Upside Official'
				/>
				<meta
					name='keywords'
					content='Rap, Hip Hop, Beats, Recording, Mixing, Mastering, Vocals, DOSA'
				/>
				<meta
					name='description'
					content='Rap Beats and Music Studio Services'
				/>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta charset='UTF-8' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>{children}</main>
		</>
	)
}
