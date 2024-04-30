import React, {useContext, useEffect, useState} from 'react';
import CalendarChoosing from "./CalendarChoosing";
import Popup from "../../../Popup/Popup";
import HeaderSelector from "./HeaderSelector";
import $api from "../../../../../http";
import RoomChoosing from "./RoomChoosing";
import {ChooseContext} from "../../../../pages/Reserve";
import GuestsCountSelector from "./GuestsCountSelector";

const Choosing = () => {
	const {dates, visibility, setDates, countGuests, showPopup, popupContent, togglePopup} = useContext(ChooseContext);


	const [dateNum, setDateNum] = useState(0);
	const [rooms, setRooms] = useState([]);

	const [countGuestsInputs, setCountGuestsInputs] = useState({
		adults: {
			minus: 'disabled',
			plus: ''
		},
		children: {
			minus: 'disabled',
			plus: ''
		}
	});

	async function fetchRooms(dates, countGuests) {
		try {
			const params = {
				dates,
				countGuests
			}
			const response = await $api.get('api/rooms/filter', {params});
			setRooms(response.data);
		} catch(e) {
			console.error(e);
		}
	}

	useEffect(() => {
		fetchRooms(dates, countGuests)
	}, [dates, countGuests])

	function popupInner(content) {
		const type = Object.keys(content)[0];

		if (type === 'dates') {
			return (
				<HeaderSelector select={selectDate} dateNum={dateNum}/>
			)
		} else if (type === 'guests') {
			return (
				<GuestsCountSelector inputsDisabled={countGuestsInputs} setDisable={setCountGuestsInputs} select={selectDate} dateNum={dateNum}/>

			)
		} else if (type === 'alert') {
			return (
				<div className='popup-content'>
					<span className="title">{ content[type] }</span>
				</div>
			)
		}
	}

	function selectDate(curDate, dateNum) {
		const oldDates = [...dates];

		oldDates[dateNum] = curDate;

		if (dateNum === 0) {
			if (oldDates[dateNum] > oldDates[1]) {
				oldDates[1] = oldDates[dateNum];
			}
		} else {
			if (oldDates[dateNum] < oldDates[0]) {
				oldDates[0] = oldDates[dateNum];
			}
		}

		setDates(oldDates);
	}

	return (
		<div className={`choosing-page ${visibility}`}>
			{showPopup
				&&
				<Popup toggle={togglePopup} state={showPopup ? 'visible' : 'invisible'} dateNum={dateNum}>
					{
						popupInner(popupContent)
					}
				</Popup>
			}
			<CalendarChoosing setDateNum={setDateNum} togglePopup={togglePopup} dates={dates}/>
			<RoomChoosing dates={dates} rooms={rooms} styles={{padding: '20px 0', backgroundColor: '#000'}}/>
		</div>
	);
};

export default Choosing;