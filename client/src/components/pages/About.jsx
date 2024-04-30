import React from 'react';
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../UI/Footer/Footer";

const About = () => {
	const navigate = useNavigate();
	return (
		<div className='screen container' style={{paddingTop: '100px'}}>
			<Header>
				<Navbar>
					{
						[
							{
								name: 'Главная',
								link: '/',
								active: true
							},
							// {
							// 	name: 'Номера',
							// 	link: '/rooms'
							// },
							{
								name: 'О нас',
								link: '/about'
							},
							{
								name: 'Бронь номеров',
								link: '/reserve'
							},
						]
					}
				</Navbar>
			</Header>
			<div className="nav-path">
				<button className='nav-item' onClick={() => navigate(-1)}>Главная</button>
				<button disabled className='nav-item active'>О нас</button>
			</div>
			<div className="about-block" style={{marginTop: '30px'}}>
				<div className="about-line" style={{marginBottom: '30px'}}>
					<span className='mini-text' style={{display: 'inline-block'}}>620014, г. Екатеринбург, ул. Малышева, д. 2е</span>
				</div>
				<div className="about-line" style={{marginBottom: '20px'}}>
					<span className='form-text' style={{display: 'inline-block', fontSize: '20px'}}>+7 (343) 384-01-43 - </span>
					<span className="mini-text">круглосуточно</span>
				</div>
				<div className="about-line">
					<span className='form-text' style={{display: 'inline-block', fontSize: '20px'}}>+7 (902) 266-01-43 - </span>
					<span className="mini-text">круглосуточно</span>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default About;