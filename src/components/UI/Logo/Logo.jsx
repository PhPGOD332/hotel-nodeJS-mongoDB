import React from 'react';
import classes from './Logo.module.css';
const Logo = (props) => {
	return (
		<a {...props} href="/public" className={classes.logoLink}>
			<span className="logoLink__span">Космос</span>
		</a>
	);
};

export default Logo;