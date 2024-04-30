import React from 'react';
const Button = React.memo((props) => {
	return (
		<button {...props}>
			{props.children}
		</button>
	)
})

export default  Button;