export default function SectionTitle({
	title,
	subtitle,
	classes,
	children,
	buttonGroup,
}) {
	return (
		<div
			className={`m-auto mb-10 flex max-w-xl flex-col justify-center gap-4 text-center ${classes}`}
		>
			<h2 className='text-3xl font-bold'>{title}</h2>
			<p className='mb-0'>{subtitle}</p>
			{buttonGroup ? (
				<div className='flex items-center gap-4'>
					{children}
				</div>
			) : null}
		</div>
	)
}
