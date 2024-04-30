import React from 'react';
import './Footer.css';
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";

const Footer = () => {
	return (
		<footer className="grid footer">
			<div className="footer-line logo-block">
				<Logo style={{fontSize: '40px'}}/>
				<div className="reserve-block">
					<span>Готовы окунуться?</span>
					<NavLink to='/reserve' className='OrangeBtn'>Забронировать</NavLink>
				</div>
			</div>
			<div className="footer-line link-block">

			</div>
			<div className="footer-line copyright-block">
				<span>Гизатуллин Тимур 2024</span>
			</div>
		</footer>
	);
};

export default Footer;