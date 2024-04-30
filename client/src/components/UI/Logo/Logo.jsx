import React from 'react';
import classes from './Logo.module.css';
import {Link, NavLink} from "react-router-dom";
const Logo = (props) => {

	return (
		<Link {...props} className={classes.logoLink} to='/'>
			<span className="logoLink__span">Космос</span>
		</Link>
	);
};

export default Logo;