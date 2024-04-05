import React, {createContext, useEffect, useState} from 'react';
import '../../css/General.css'
import '../UI/ReservePage/Reserve.css'
import {useNavigate} from "react-router-dom";
import Header from "../UI/Header/Header";
import Navbar from "../UI/Navbar";
import Choosing from "../UI/ReservePage/subPages/Choosing/Choosing";
import FormGuests from "../UI/ReservePage/subPages/FormGuests/FormGuests";
import {create} from "axios";
import $api from "../../http";

export const ChooseContext = createContext('');
export const FormContext = createContext('');

const Reserve = (props) => {
	const navigate = useNavigate();
	const [dates, setDates] = useState([new Date(), new Date()]);
	const [chosenRoom, setChosenRoom] = useState({});
	const [pages, setPages] = useState([]); // можно опустить ниже
	const [addInfo, setAddInfo] = useState('');
	const [contacts, setContacts] = useState({});
	const [countGuests, setCountGuests] = useState({
		adults: 1,
		children: 0
	});
	const [guestsInfo, setGuestsInfo] = useState([
		{}
	]);
	const totalCountGuests = +countGuests.adults + +countGuests.children;

	useEffect(() => {
		let arrayGuests = [...guestsInfo];

		if (totalCountGuests < arrayGuests.length) {
			arrayGuests.length = totalCountGuests;
			setGuestsInfo([...arrayGuests])
		} else {
			let newGuests = [];
			for (let i = 0; i < totalCountGuests - arrayGuests.length; i++) {
				newGuests.push({});
			}

			arrayGuests = [...arrayGuests, ...newGuests]
			setGuestsInfo([...arrayGuests])
		}
	}, [totalCountGuests])

	const countNights = Math.round((dates[1] - dates[0]) / (1000 * 60 * 60 * 24));
	const totalPrice = chosenRoom.price * countNights;

	useEffect(() => {
		setPages(['visible', 'invisible']);
	}, [])

	function chooseRoom(room) {
		setChosenRoom(room);

		setPages(['invisible', 'visible']);
	}

	function backToRooms() {
		setPages(['visible', 'invisible']);
	}

	async function submit() {
		console.log(contacts);
		console.log(addInfo);
		console.log(guestsInfo);
		console.log(chosenRoom);
		const postDatesFormat = [...dates]
			.map(date => `${date.getFullYear()}/${date.getMonth().toString().length < 2 ? '0' + date.getMonth() : date.getMonth() + 1}/${date.getDate().toString().length < 2 ? '0' + date.getDate() : date.getDate()}`)
		const params = {
			postDatesFormat,
			chosenRoom,
			addInfo,
			contacts,
			guestsInfo,
			totalPrice,
			countNights
		}

		const reserveData = await $api.post('reserves/addReserve', {params})
		console.log(reserveData)
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
				<ChooseContext.Provider value={{chooseRoom, dates, setDates, visibility: pages[0],  countGuests, setCountGuests, guestsInfo, setGuestsInfo}}>
					<Choosing visibility={pages[0]} dates={dates} setDates={setDates}/>
				</ChooseContext.Provider>
				<FormContext.Provider value={{chosenRoom, dates, pages, setPages, backToRooms, submit, setAddInfo, contacts, setContacts, countGuests, guestsInfo, setGuestsInfo, totalPrice, countNights}}>
					<FormGuests visibility={pages[1]}/>
				</FormContext.Provider>
			</div>
		</div>
	);
};

export default Reserve;