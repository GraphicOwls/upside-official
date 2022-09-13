import Section from '../layout/Section'
import Container from '../layout/Container'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

export default function Pricing() {
	const licenses = [
		{
			name: 'MP3 License',
			format: 'HQ Mp3',
			price: '40',
			type: 'Non-Exclusive',
			units: 'Sell 5,000 Units',
			royalties: 'Royalty Free',
			streams: 'Unlimited Streams',
			use: '1 Commercial Use',
			credit: 'Prod. by Upside',
		},
		{
			name: 'WAV License',
			format: '24 Bit WAV',
			price: '80',
			type: 'Non-Exclusive',
			units: 'Sell 10,000 Units',
			royalties: 'Royalty Free',
			streams: 'Unlimited Streams',
			use: '2 Commercial Uses',
			credit: 'Prod. by Upside',
		},
		{
			name: 'Exclusive',
			format: '24 Bit WAV',
			price: '1500',
			type: 'Exclusive',
			units: 'Sell Unlimited Units',
			royalties: 'Royalty Free',
			streams: 'Unlimited Streams',
			use: '1 Commercial Use',
			credit: 'Prod. by Upside',
		},
	]

	return (
		<div>
			<Section hasPadding classes='py-12 md:py-16'>
				<Container>
					<SectionTitle
						title='Beats Pricing'
						subtitle='Select the pricing option that best suits your needs in the beat store. You can select a license of your choice by clicking the “Add” button.'
					/>
					<div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
						{licenses.map((license) => (
							<div
								key={license.name}
								className='flex flex-col gap-4 p-8 rounded-xl bg-stone-100 dark:bg-neutral-800 lg:p-6'
							>
								<div className='flex flex-col gap-2'>
									<h3 className='mb-0 text-xl font-bold'>
										{license.name}
									</h3>
									<div className='flex self-start gap-2 px-2 py-1 text-xs leading-none uppercase border rounded-full border-stone-400 dark:border-neutral-600'>
										<span className='font-bold text-stone-700 dark:text-neutral-200'>
											Format:
										</span>
										<span className='text-stone-500 dark:text-neutral-500'>
											{license.format}
										</span>
									</div>
								</div>
								<span className='py-6 text-6xl font-bold text-stone-800 dark:text-neutral-100'>
									${license.price}
								</span>
								<ul className='grid gap-3 mb-4 text-sm text-stone-600 dark:text-neutral-400'>
									<li>
										<span className='mr-1 font-bold text-stone-800 dark:text-neutral-200'>
											Type:
										</span>
										{license.type}
									</li>
									<li>
										<span className='mr-1 font-bold text-stone-800 dark:text-neutral-200'>
											Units:
										</span>
										{license.units}
									</li>
									<li>
										<span className='mr-1 font-bold text-stone-800 dark:text-neutral-200'>
											Royalties:
										</span>
										{license.royalties}
									</li>
									<li>
										<span className='mr-1 font-bold text-stone-800 dark:text-neutral-200'>
											Streams:
										</span>
										{license.streams}
									</li>
									<li>
										<span className='mr-1 font-bold text-stone-800 dark:text-neutral-200'>
											Use:
										</span>
										{license.use}
									</li>
									<li>
										<span className='mr-1 font-bold text-stone-800 dark:text-neutral-200'>
											Credit:
										</span>
										{license.credit}
									</li>
								</ul>
								<Button
									href='#beats'
									text='Purchase in Store'
								>
									<svg
										width='20'
										height='20'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M5.52 2.64L3.96 4.72C3.65102 5.13198 3.49652 5.33797 3.50011 5.51039C3.50323 5.66044 3.57358 5.80115 3.69175 5.89368C3.82754 6 4.08503 6 4.6 6H19.4C19.915 6 20.1725 6 20.3083 5.89368C20.4264 5.80115 20.4968 5.66044 20.4999 5.51039C20.5035 5.33797 20.349 5.13198 20.04 4.72L18.48 2.64M5.52 2.64C5.696 2.40533 5.784 2.288 5.89552 2.20338C5.9943 2.12842 6.10616 2.0725 6.22539 2.03845C6.36 2 6.50667 2 6.8 2H17.2C17.4933 2 17.64 2 17.7746 2.03845C17.8938 2.0725 18.0057 2.12842 18.1045 2.20338C18.216 2.288 18.304 2.40533 18.48 2.64M5.52 2.64L3.64 5.14666C3.40254 5.46328 3.28381 5.62159 3.1995 5.79592C3.12469 5.95062 3.07012 6.11431 3.03715 6.28296C3 6.47301 3 6.6709 3 7.06666L3 18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.07989 22 6.2 22L17.8 22C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V7.06667C21 6.6709 21 6.47301 20.9628 6.28296C20.9299 6.11431 20.8753 5.95062 20.8005 5.79592C20.7162 5.62159 20.5975 5.46328 20.36 5.14667L18.48 2.64M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10'
											stroke='#EB6666'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</Button>
							</div>
						))}
						<div className='flex flex-col gap-4 p-8 rounded-xl bg-stone-100 dark:bg-neutral-800 lg:p-6'>
							<div className='flex min-h-[320px] flex-grow flex-col items-center justify-center rounded-sm border border-dashed border-stone-300 p-4 text-center dark:border-neutral-600 dark:text-neutral-200 sm:min-h-0 sm:p-3'>
								<div className='mb-4 text-stone-800 dark:text-neutral-100'>
									<svg
										width='57'
										height='56'
										viewBox='0 0 57 56'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M32.8334 7H24.1667C18.5099 7 15.6815 7 13.9241 8.75736C12.1667 10.5147 12.1667 13.3431 12.1667 19V37C12.1667 42.6569 12.1667 45.4853 13.9241 47.2426C15.6815 49 18.5099 49 24.1667 49H32.8334C38.4903 49 41.3187 49 43.0761 47.2426C44.8334 45.4853 44.8334 42.6569 44.8334 37V19C44.8334 13.3431 44.8334 10.5147 43.0761 8.75736C41.3187 7 38.4903 7 32.8334 7Z'
											stroke='currentColor'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M20 16H37'
											stroke='currentColor'
											stroke-width='3'
											stroke-linecap='round'
										/>
										<path
											d='M20 22H37'
											stroke='currentColor'
											stroke-width='3'
											stroke-linecap='round'
										/>
										<path
											d='M20 28H31'
											stroke='currentColor'
											stroke-width='3'
											stroke-linecap='round'
										/>
										<path
											d='M20 42C24.25 40.6667 25.6667 38 25.6667 38C25.6667 38 25.6667 39.3333 25.6667 42C28.5 42 31.3333 39.3333 31.3333 39.3333C31.3333 39.3333 31.3333 42 34.1667 42H37'
											stroke='currentColor'
											stroke-width='3'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
								<span className='block mb-1 font-bold'>
									Need a custom license?
								</span>
								Use the button below to email me and we can
								work out the details.
							</div>
							<Button
								href='mailto:prod.upside@gmail.com'
								text='Contact Upside'
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
				</Container>
			</Section>
		</div>
	)
}
