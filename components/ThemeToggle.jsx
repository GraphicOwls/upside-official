import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@headlessui/react'
import { Sun1, Moon } from 'iconsax-react'

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const [enabled, setEnabled] = useState(false)

	const toggleThemeHandler = () => {
		if (theme === 'light') {
			setTheme('dark')
			setEnabled(true)
		} else {
			setTheme('light')
			setEnabled(false)
		}
	}

	useEffect(() => {
		setMounted(true)
		if (theme === 'dark') {
			setEnabled(true)
		}
	}, [theme])

	if (!mounted) {
		return null
	}

	return (
		<div>
			<Switch
				checked={enabled}
				onChange={toggleThemeHandler}
				className={`${
					enabled ? 'bg-neutral-700' : 'bg-stone-100'
				} relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span className='sr-only'>{theme}</span>
				<span
					className={`${
						enabled ? 'translate-x-6' : 'translate-x-1'
					} inline-block h-4 w-4 transform rounded-full transition`}
				>
					{enabled ? (
						<div className='text-stone-100'>
							<Sun1
								size='16'
								color='currentColor'
								variant='Bold'
							/>
						</div>
					) : (
						<div className='text-neutral-800'>
							<Moon
								size='16'
								color='currentColor'
								variant='Bold'
							/>
						</div>
					)}
				</span>
			</Switch>
		</div>
	)
}

export default ThemeToggle
