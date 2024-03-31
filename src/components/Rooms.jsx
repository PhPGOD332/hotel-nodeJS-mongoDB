import React, {useEffect, useState} from "react";
import "../css/Rooms.css";
import $api from '../http';
import RoomCard from "./UI/Rooms/RoomCard";
import IdSwiper from "./UI/IdSwiper";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

const Rooms = (props) => {

	const [cards, setCard] = useState([]);

	useEffect(() => {
		async function fetchRooms() {
			try {
				const response = await $api.get('/rooms');
				setCard(response.data);
			} catch (e) {
				console.error(e)
			}
		}

		fetchRooms();
	}, [])

	return (
		<section {...props} className="screen rooms-screen">
			<h2 className="slogan rooms__slogan">Наши номера</h2>
			<div className="rooms-cards">
				<IdSwiper params={{
					modules: [Navigation, Pagination, Scrollbar, A11y],
					spaceBetween: 50,
					slidesPerView: 1,
					pagination:{ clickable: true },
					scrollbar:{ draggable: true },
					allowTouchMove: false
				}}>
					{cards.map(card =>
						<RoomCard card={card}/>
					)}
				</IdSwiper>
			</div>
		</section>
	)
}

export default Rooms;