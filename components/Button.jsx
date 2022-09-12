export default function Button({
	href,
	text,
	children,
	classes,
	onClick,
}) {
	return (
		<a
			href={href}
			className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-stone-300 px-2 py-3 font-medium text-zinc-700 transition-colors duration-200 hover:bg-stone-200 ${classes}`}
			onClick={onClick}
		>
			{text}
			{children}
		</a>
	)
}
