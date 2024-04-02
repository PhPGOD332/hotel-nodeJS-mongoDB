import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {


	return (
		<div className="nav-block">
			{props.children.map((child, index) =>
				<NavLink key={index} to={child.link} className="nav-item">
					{child.name}
				</NavLink>
			)}
		</div>
	);
};

export default Navbar;