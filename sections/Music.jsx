import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Section from '../layout/Section'
import Container from '../layout/Container'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import musicImage from '../public/assets/studio-pic.jpg'

export default function Music() {
	const musicStyles = {
		image: {
			position: 'absolute',
		},
	}

	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<Section
			classes='py-12 md:py-16 md:pb-24'
			hasPadding
			id='music'
		>
			<Container>
				<SectionTitle
					title='New Music'
					subtitle='I am constantly working on new music, which is dropping soon. New music videos as well. Subscribe to the channel to stay up to date.'
				/>
				<div className='p-6 m-auto rounded-xl bg-stone-100 dark:bg-neutral-800 md:max-w-4xl'>
					<div className='relative flex items-center justify-center aspect-video'>
						<div
							onClick={openModal}
							className='relative z-50 w-full max-w-[120px] cursor-pointer overflow-hidden rounded-full bg-stone-100 bg-opacity-10 p-4 backdrop-blur-sm transition-transform duration-200 hover:scale-105'
						>
							<svg
								viewBox='0 0 104 104'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M52.0001 95.3332C75.9324 95.3332 95.3334 75.9322 95.3334 51.9998C95.3334 28.0675 75.9324 8.6665 52.0001 8.6665C28.0677 8.6665 8.66675 28.0675 8.66675 51.9998C8.66675 75.9322 28.0677 95.3332 52.0001 95.3332Z'
									stroke='#EFF0F1'
									stroke-width='4'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M41.1667 38.8496C41.1667 36.7814 41.1667 35.7473 41.599 35.1699C41.9756 34.6668 42.5522 34.3521 43.1791 34.3073C43.8984 34.2559 44.7683 34.8151 46.508 35.9335L66.964 49.0838C68.4736 50.0543 69.2285 50.5395 69.4892 51.1565C69.717 51.6957 69.717 52.304 69.4892 52.8431C69.2285 53.4602 68.4736 53.9454 66.964 54.9159L46.508 68.0661C44.7683 69.1846 43.8984 69.7438 43.1791 69.6924C42.5522 69.6476 41.9756 69.3328 41.599 68.8297C41.1667 68.2524 41.1667 67.2183 41.1667 65.1501V38.8496Z'
									stroke='#EFF0F1'
									stroke-width='4'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
						<Image
							width={1028}
							height={608}
							style={musicStyles.image}
							src={musicImage}
							alt='Mixing in the studio'
							layout='fill'
							objectFit='cover'
							objectPosition='center'
							className='absolute inset-0 z-0 w-full h-full'
						/>
					</div>
					<Button
						classes='rounded-t-none rounded-b-md'
						href='https://www.youtube.com/channel/UCm3BAMfyujdvDq2S5Nlsp0g'
						text='Subscribe for New Music'
						target='_blank'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 18V6.35537C9 5.87383 9 5.63306 9.0876 5.43778C9.16482 5.26565 9.28917 5.11887 9.44627 5.0144C9.62449 4.89588 9.86198 4.8563 10.337 4.77714L19.137 3.31047C19.7779 3.20364 20.0984 3.15023 20.3482 3.243C20.5674 3.32441 20.7511 3.48005 20.8674 3.68286C21 3.91398 21 4.23889 21 4.8887V16M9 18C9 19.6568 7.65685 21 6 21C4.34315 21 3 19.6568 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18ZM21 16C21 17.6568 19.6569 19 18 19C16.3431 19 15 17.6568 15 16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16Z'
								stroke='#EB6666'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</Button>
				</div>

				<Transition appear show={isOpen} as={Fragment}>
					<Dialog
						as='div'
						className='relative z-10'
						onClose={closeModal}
					>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0'
							enterTo='opacity-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<div className='fixed inset-0 bg-black bg-opacity-70' />
						</Transition.Child>

						<div className='fixed inset-0 overflow-y-auto'>
							<div className='flex items-center justify-center min-h-full p-4 text-center'>
								<Transition.Child
									as={Fragment}
									enter='ease-out duration-300'
									enterFrom='opacity-0 scale-95'
									enterTo='opacity-100 scale-100'
									leave='ease-in duration-200'
									leaveFrom='opacity-100 scale-100'
									leaveTo='opacity-0 scale-95'
								>
									<Dialog.Panel className='w-full max-w-5xl p-6 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl bg-stone-100 dark:bg-neutral-800'>
										<div className='aspect-video'>
											<iframe
												width='100%'
												height='auto'
												style={{ aspectRatio: '16 / 9' }}
												src='https://www.youtube.com/embed/Xv-4259UY6E'
												title='YouTube video player'
												frameborder='0'
												allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
												allowfullscreen
											></iframe>
										</div>
										<Button
											classes='rounded-t-none rounded-b-md'
											text='Close Video'
											onClick={closeModal}
										></Button>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			</Container>
		</Section>
	)
}
