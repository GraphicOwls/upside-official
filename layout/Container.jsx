export default function Container({ children, classes }) {
	const containerStyles = {
		container: {
			maxWidth: '1200px',
			margin: '0 auto',
			position: 'relative',
			zIndex: '2',
		},
	}
	return (
		<div
			style={containerStyles.container}
			className={classes}
		>
			{children}
		</div>
	)
}
