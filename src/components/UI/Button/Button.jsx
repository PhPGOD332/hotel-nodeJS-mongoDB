import React from 'react';
import classes from './Button.module.css';
const Button = React.memo((props) => {
	return (
		<button {...props} className={classes.OrangeBtn}>
			{props.children}
		</button>
	)
})

export default  Button;