export default function Button({
	href,
	target,
	text,
	children,
	classes,
	onClick,
}) {
	return (
		<a
			href={href}
			className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-stone-300 px-2 py-3 font-medium text-stone-800 transition-colors duration-200 hover:bg-stone-200 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600 ${classes}`}
			onClick={onClick}
			target={target}
		>
			{text}
			{children}
		</a>
	)
}
