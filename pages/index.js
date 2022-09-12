import Hero from '../sections/Hero'
import BeatStore from '../sections/BeatStore'
import Pricing from '../sections/Pricing'
import Studio from '../sections/Studio'
import Music from '../sections/Music'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<>
			<Hero />
			<BeatStore />
			<Pricing />
			<Studio />
			<Music />
			<Footer />
		</>
	)
}
