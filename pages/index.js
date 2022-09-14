import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import BeatStore from '../sections/BeatStore'
import Pricing from '../sections/Pricing'
import Studio from '../sections/Studio'
import Music from '../sections/Music'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Upside Official — Beats, Studio Recording & Mixing
				</title>
				<meta
					name='title'
					content='Upside Official — Beats, Studio Recording & Mixing'
				/>
				<meta
					name='description'
					content="Beats and instrumentals for any artist's next song or project. Record, mix and master your song & vocals with Upside."
				/>
			</Head>
			<Navbar />
			<Hero />
			<BeatStore />
			<Pricing />
			<Studio />
			<Music />
			<Footer />
		</>
	)
}
