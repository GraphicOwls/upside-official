export default function Section({
	children,
	classes,
	hasPadding,
	id,
}) {
	const sectionStyles = {
		section: {
			paddingLeft: '4%',
			paddingRight: '4%',
		},
	}

	return (
		<section
			style={hasPadding ? sectionStyles.section : null}
			className={`${classes} relative`}
			id={id}
		>
			{children}
		</section>
	)
}
