import Image from 'next/image'
import Section from '../layout/Section'
import Container from '../layout/Container'
import heroImage from '../public/assets/heroImage.jpg'
import HeroLogo from '../components/HeroLogo'

export default function Hero() {
	const heroStyles = {
		image: {
			position: 'absolute',
		},
	}

	return (
		<>
			<Section classes='py-56' hasPadding>
				<Container>
					<div className='flex flex-col items-center justify-center text-white'>
						<HeroLogo />
					</div>
				</Container>
				<Image
					width={2048}
					height={680}
					style={heroStyles.image}
					src={heroImage}
					alt='Upside Official'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					className='absolute inset-0 z-0 w-full h-full'
				/>
			</Section>
		</>
	)
}
