import Section from '../layout/Section'
import Container from '../layout/Container'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import ShoppingCart2FillIcon from 'remixicon-react/ShoppingCart2FillIcon'
import QuestionAnswerFillIcon from 'remixicon-react/QuestionAnswerFillIcon'

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
									<ShoppingCart2FillIcon
										size={20}
										color='#eb6666'
									/>
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
								<QuestionAnswerFillIcon
									size={20}
									color='#eb6666'
								/>
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		</div>
	)
}
