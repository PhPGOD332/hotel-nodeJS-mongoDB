import React, {useState} from 'react';
import '../../css/General.css'
import '../UI/ReservePage/Reserve.css'
import {useNavigate} from "react-router-dom";
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar";
import Choosing from "../UI/ReservePage/subPages/Choosing/Choosing";
const Reserve = (props) => {
	const navigate = useNavigate();
	const [page, setPage] = useState('');
	function choosingEnd(dateStart, dateEnd, room, price) {

	}

	return (
		<div className='screen container' id="reserve-page">
			<Header>
				<Navbar>
					{
						[
							{
								name: 'Главная',
								link: '/',
								active: true
							},
							{
								name: 'Номера',
								link: '/rooms'
							},
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
				<button disabled className='nav-item active'>Бронирование номеров</button>
			</div>
			<div className="title-block">
				<h1 className='section-title'>Бронирование номеров</h1>
			</div>
			<div className="content">
				<Choosing newDates=''/>
			</div>
		</div>
	);
};

export default Reserve;