import Image from 'next/image'
import Section from '../layout/Section'
import Container from '../layout/Container'
import studioImage from '../public/assets/upside-portrait.jpg'
import Button from '../components/Button'

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
										<svg
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M5.83325 24.5V16.3333M5.83325 11.6667V3.5M13.9999 24.5V14M13.9999 9.33333V3.5M22.1666 24.5V18.6667M22.1666 14V3.5M2.33325 16.3333H9.33325M10.4999 9.33333H17.4999M18.6666 18.6667H25.6666'
												stroke='#EB6666'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
										Mixing & Mastering
									</li>
									<li className='flex items-center gap-3'>
										<svg
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M14.0001 6.99992H14.0117M10.2667 25.6666H17.7334C19.6936 25.6666 20.6737 25.6666 21.4224 25.2851C22.0809 24.9496 22.6164 24.4141 22.9519 23.7556C23.3334 23.0069 23.3334 22.0268 23.3334 20.0666V7.93325C23.3334 5.97307 23.3334 4.99298 22.9519 4.24429C22.6164 3.58572 22.0809 3.05029 21.4224 2.71473C20.6737 2.33325 19.6936 2.33325 17.7334 2.33325H10.2667C8.30656 2.33325 7.32647 2.33325 6.57778 2.71473C5.91921 3.05029 5.38378 3.58572 5.04823 4.24429C4.66675 4.99298 4.66675 5.97307 4.66675 7.93325V20.0666C4.66675 22.0268 4.66675 23.0069 5.04823 23.7556C5.38378 24.4141 5.91921 24.9496 6.57778 25.2851C7.32647 25.6666 8.30656 25.6666 10.2667 25.6666ZM14.5834 6.99992C14.5834 7.32209 14.3222 7.58325 14.0001 7.58325C13.6779 7.58325 13.4167 7.32209 13.4167 6.99992C13.4167 6.67775 13.6779 6.41659 14.0001 6.41659C14.3222 6.41659 14.5834 6.67775 14.5834 6.99992ZM18.6667 16.3333C18.6667 18.9106 16.5774 20.9999 14.0001 20.9999C11.4228 20.9999 9.33341 18.9106 9.33341 16.3333C9.33341 13.7559 11.4228 11.6666 14.0001 11.6666C16.5774 11.6666 18.6667 13.7559 18.6667 16.3333Z'
												stroke='#EB6666'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
										Custom Tailored Beats
									</li>
									<li className='flex items-center gap-3'>
										<svg
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M22.1666 11.6666V13.9999C22.1666 18.5102 18.5102 22.1666 13.9999 22.1666M5.83325 11.6666V13.9999C5.83325 18.5102 9.48959 22.1666 13.9999 22.1666M13.9999 22.1666V25.6666M9.33325 25.6666H18.6666M13.9999 17.4999C12.0669 17.4999 10.4999 15.9329 10.4999 13.9999V5.83325C10.4999 3.90026 12.0669 2.33325 13.9999 2.33325C15.9329 2.33325 17.4999 3.90026 17.4999 5.83325V13.9999C17.4999 15.9329 15.9329 17.4999 13.9999 17.4999Z'
												stroke='#EB6666'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
										Studio & Recording
									</li>
								</ul>
								<Button
									classes='self-start'
									href='mailto:prod.upside@gmail.com'
									text='Contact for Booking'
								>
									<svg
										width='20'
										height='20'
										viewBox='0 0 25 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.5 15L7.42474 18.1137C6.99579 18.548 6.78131 18.7652 6.59695 18.7805C6.43701 18.7938 6.28042 18.7295 6.17596 18.6076C6.05556 18.4672 6.05556 18.162 6.05556 17.5515V15.9916C6.05556 15.444 5.60707 15.0477 5.0652 14.9683V14.9683C3.75374 14.7762 2.72378 13.7463 2.53168 12.4348C2.5 12.2186 2.5 11.9605 2.5 11.4444V6.8C2.5 5.11984 2.5 4.27976 2.82698 3.63803C3.1146 3.07354 3.57354 2.6146 4.13803 2.32698C4.77976 2 5.61984 2 7.3 2H14.7C16.3802 2 17.2202 2 17.862 2.32698C18.4265 2.6146 18.8854 3.07354 19.173 3.63803C19.5 4.27976 19.5 5.11984 19.5 6.8V11M19.5 22L17.3236 20.4869C17.0177 20.2742 16.8647 20.1678 16.6982 20.0924C16.5504 20.0255 16.3951 19.9768 16.2356 19.9474C16.0558 19.9143 15.8695 19.9143 15.4969 19.9143H13.7C12.5799 19.9143 12.0198 19.9143 11.592 19.6963C11.2157 19.5046 10.9097 19.1986 10.718 18.8223C10.5 18.3944 10.5 17.8344 10.5 16.7143V14.2C10.5 13.0799 10.5 12.5198 10.718 12.092C10.9097 11.7157 11.2157 11.4097 11.592 11.218C12.0198 11 12.5799 11 13.7 11H19.3C20.4201 11 20.9802 11 21.408 11.218C21.7843 11.4097 22.0903 11.7157 22.282 12.092C22.5 12.5198 22.5 13.0799 22.5 14.2V16.9143C22.5 17.8462 22.5 18.3121 22.3478 18.6797C22.1448 19.1697 21.7554 19.5591 21.2654 19.762C20.8978 19.9143 20.4319 19.9143 19.5 19.9143V22Z'
											stroke='#EB6666'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</Button>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	)
}
