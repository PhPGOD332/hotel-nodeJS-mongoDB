import React, {useEffect, useState} from 'react';
import CalendarChoosing from "./CalendarChoosing";
import Popup from "../../../Popup/Popup";
import HeaderSelector from "../../../HeaderSelector";
import $api from "../../../../../http";
import RoomChoosing from "./RoomChoosing";

const Choosing = ({visibility, dates, setDates}) => {

	const [showPopup, setShowPopup] = useState(false);
	const [dateNum, setDateNum] = useState(0);
	const [rooms, setRooms] = useState([]);
	const [roomsVisible, setRoomsVisible] = useState(false);

	async function fetchRooms(dates, countGuests) {
		try {
			const params = {
				dates,
				countGuests
			}
			const response = await $api.get('/rooms/filter', {params});
			setRooms(response.data);
		} catch(e) {
			console.error(e);
		}
	}

	useEffect(() => {
		fetchRooms(dates)
	}, [dates])

	function togglePopup(state) {
		setShowPopup(state);
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
					<span className="popup-title">
						Выберите дату
					</span>
					<HeaderSelector select={selectDate} dateNum={dateNum}/>
				</Popup>
			}
			<CalendarChoosing setDateNum={setDateNum} togglePopup={togglePopup} dates={dates}/>
			<RoomChoosing dates={dates} rooms={rooms} styles={{padding: '20px 0', opacity: roomsVisible, backgroundColor: '#000'}}/>
		</div>
	);
};

export default Choosing;