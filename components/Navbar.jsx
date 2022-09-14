import { useTheme } from 'next-themes'
import ThemeToggle from '../components/ThemeToggle'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import NavLogo from './NavLogo'
import {
	Bars3Icon,
	XMarkIcon,
} from '@heroicons/react/24/outline'

import InstagramFillIcon from 'remixicon-react/InstagramFillIcon'
import FacebookCircleFillIcon from 'remixicon-react/FacebookCircleFillIcon'
import YoutubeFillIcon from 'remixicon-react/YoutubeFillIcon'

const navigation = [
	{ name: 'Beats', href: '#beats' },
	{ name: 'Studio', href: '#studio' },
	{ name: 'Music', href: '#music' },
	{
		name: 'Contact',
		href: 'mailto:upside.official@gmail.com',
	},
]

const social = [
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/Prod.Upside',
		icon: <FacebookCircleFillIcon size={16} />,
		iconAlt: <FacebookCircleFillIcon size={20} />,
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/prod.upside/',
		icon: <InstagramFillIcon size={16} />,
		iconAlt: <InstagramFillIcon size={20} />,
	},
	{
		name: 'YouTube',
		href: 'https://www.youtube.com/channel/UCm3BAMfyujdvDq2S5Nlsp0g',
		icon: <YoutubeFillIcon size={16} />,
		iconAlt: <YoutubeFillIcon size={20} />,
	},
]

export default function Navbar() {
	const { theme } = useTheme()

	return (
		<div className='absolute top-0 z-[998] w-full'>
			<div className='relative pt-6 pb-6'>
				<Popover>
					<div className='px-4 mx-auto max-w-7xl sm:px-6'>
						<nav
							className='relative flex items-center justify-between sm:h-10 md:justify-center'
							aria-label='Global'
						>
							<div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
								<div className='flex items-center justify-between w-full md:w-auto'>
									<a href='./'>
										<span className='sr-only'>
											Upside Official
										</span>
										<NavLogo />
									</a>
									<div className='flex items-center mr-2 md:hidden'>
										<Popover.Button className='inline-flex items-center justify-center p-2 transition-colors duration-150 bg-transparent rounded-md text-neutral-400 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400'>
											<span className='sr-only'>
												Open Menu
											</span>
											<Bars3Icon
												className='w-6 h-6'
												aria-hidden='true'
											/>
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className='hidden md:flex md:space-x-10'>
								{navigation.map((navLink) => (
									<a
										key={navLink.name}
										href={navLink.href}
										className='font-medium transition-colors duration-200 text-stone-100 hover:text-stone-400'
									>
										{navLink.name}
									</a>
								))}
							</div>
							<div className='md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end'>
								<div className='items-center justify-center hidden h-6 gap-3 mr-12 md:flex'>
									{social.map((socialLink) => (
										<a
											key={socialLink.name}
											href={socialLink.href}
											className='transition-colors text-neutral-400 hover:text-neutral-100'
											target='_blank'
											rel='noreferrer'
										>
											{socialLink.iconAlt}
										</a>
									))}
								</div>
								<ThemeToggle />
							</div>
						</nav>
					</div>

					<Transition
						as={Fragment}
						enter='duration-150 ease-out'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='duration-100 ease-in'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Popover.Panel
							focus
							className='absolute inset-x-0 top-0 z-[999] origin-top-right transform p-2 transition md:hidden'
						>
							<div className='overflow-hidden rounded-lg shadow-md bg-stone-100 ring-1 ring-black ring-opacity-5 dark:bg-neutral-800'>
								<div className='flex items-center justify-between px-5 pt-4'>
									<div>
										{theme === 'light' ? (
											<img
												className='w-auto h-8'
												src='/assets/menu-logo-dark.png'
												alt=''
											/>
										) : (
											<img
												className='w-auto h-8'
												src='/assets/menu-logo.png'
												alt=''
											/>
										)}
									</div>
									<div className='-mr-2'>
										<Popover.Button className='inline-flex items-center justify-center p-2 transition-colors duration-150 bg-transparent rounded-md text-stone-400 hover:text-stone-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400 dark:text-neutral-400 dark:hover:text-neutral-100'>
											<span className='sr-only'>
												Close menu
											</span>
											<XMarkIcon
												className='w-6 h-6'
												aria-hidden='true'
											/>
										</Popover.Button>
									</div>
								</div>
								<div className='px-2 pt-2 pb-3'>
									{navigation.map((mobileNavLink) => (
										<a
											key={mobileNavLink.name}
											href={mobileNavLink.href}
											className='block px-3 py-2 text-base font-medium rounded-md grow text-stone-600 hover:bg-stone-200 hover:text-stone-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-neutral-100'
										>
											{mobileNavLink.name}
										</a>
									))}
								</div>
								<div className='flex justify-between w-full gap-1 p-2'>
									{social.map((mobileSocialLink) => (
										<a
											href={mobileSocialLink.href}
											target='_blank'
											rel='noreferrer'
											key={mobileSocialLink.name}
											className='flex items-center justify-center w-full gap-1 p-2 leading-none transition-colors duration-200 rounded-md bg-stone-200 hover:bg-stone-300 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100'
										>
											<div className='text-red-400'>
												{mobileSocialLink.icon}
											</div>
											{mobileSocialLink.name}
										</a>
									))}
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</div>
	)
}
