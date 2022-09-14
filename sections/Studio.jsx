import Image from 'next/image'
import Section from '../layout/Section'
import Container from '../layout/Container'
import studioImage from '../public/assets/upside-portrait.jpg'
import Button from '../components/Button'
import SoundModuleFillIcon from 'remixicon-react/SoundModuleFillIcon'
import SpeakerLineIcon from 'remixicon-react/SpeakerLineIcon'
import VoiceprintFillIcon from 'remixicon-react/VoiceprintFillIcon'
import QuestionAnswerFillIcon from 'remixicon-react/QuestionAnswerFillIcon'

export default function Studio() {
	const studioStyles = {
		image: {
			position: 'absolute',
		},
	}

	return (
		<>
			<Section
				classes='py-12 md:py-16'
				hasPadding
				id='studio'
			>
				<Container>
					<div className='flex flex-col items-center md:flex-row'>
						<div className='relative z-20 min-h-[520px] w-full overflow-hidden rounded-xl shadow-2xl md:min-h-[678px] md:w-1/2'>
							<Image
								width={733}
								height={884}
								style={studioStyles.image}
								src={studioImage}
								alt='Upside Portrait'
								layout='fill'
								objectFit='cover'
								objectPosition='center'
								className='absolute inset-0 z-0 w-full h-full'
							/>
						</div>
						<div className='relative z-0 px-3 md:w-1/2 md:px-0'>
							<div className='p-12 rounded-b-xl bg-stone-100 dark:bg-neutral-800 md:rounded-r-xl md:rounded-l-none'>
								<h2 className='mb-3 text-3xl font-bold'>
									Studio Services
								</h2>
								<p className='dark:text-neutral-300'>
									I like to view audio as the capturing of a
									moment in time. Though the methods over
									time have changed from analog to digital,
									I use both mediums to achieve the best
									sonic outcome. I do my best work up close
									and personal when I work directly with my
									clients to produce music from scratch. For
									those not in Saint Louis, Missouri I offer
									online mixing and mastering services as
									well. Music is my passion and I’d love to
									help you with yours!
								</p>
								<ul className='grid gap-4 font-semibold mt-7 mb-7 dark:text-neutral-100'>
									<li className='flex items-center gap-3'>
										<SoundModuleFillIcon
											size={28}
											color='#eb6666'
										/>
										Mixing & Mastering
									</li>
									<li className='flex items-center gap-3'>
										<SpeakerLineIcon
											size={28}
											color='#eb6666'
										/>
										Custom Tailored Beats
									</li>
									<li className='flex items-center gap-3'>
										<VoiceprintFillIcon
											size={28}
											color='#eb6666'
										/>
										Studio & Recording
									</li>
								</ul>
								<Button
									classes='self-start'
									href='mailto:prod.upside@gmail.com'
									text='Contact for Booking'
								>
									<QuestionAnswerFillIcon
										size={20}
										color='#eb6666'
									/>
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	)
}
