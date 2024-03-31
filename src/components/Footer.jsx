import React from 'react';
import '../css/Footer.css';
import Logo from "./UI/Logo/Logo";
import Button from "./UI/Button/Button";

const Footer = () => {
	return (
		<footer className="grid footer">
			<div className="footer-line logo-block">
				<Logo style={{fontSize: '40px'}}/>
				<div className="reserve-block">
					<span>Готовы окунуться?</span>
					<Button>Забронировать</Button>
				</div>
			</div>
			<div className="footer-line link-block">

			</div>
			<div className="footer-line copyright-block">
				<span>Copyright 2024 QWERy</span>
			</div>
		</footer>
	);
};

export default Footer;