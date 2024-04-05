import React, {useContext, useEffect, useState} from 'react';
import CalendarChoosing from "./CalendarChoosing";
import Popup from "../../../Popup/Popup";
import HeaderSelector from "../../../HeaderSelector";
import $api from "../../../../../http";
import RoomChoosing from "./RoomChoosing";
import {ChooseContext} from "../../../../pages/Reserve";
import GuestsCountSelector from "./GuestsCountSelector";

const Choosing = () => {
	const {dates, visibility, setDates, countGuests} = useContext(ChooseContext);

	const [showPopup, setShowPopup] = useState(false);
	const [dateNum, setDateNum] = useState(0);
	const [rooms, setRooms] = useState([]);
	const [popupContent, setPopupContent] = useState('');

	async function fetchRooms(dates, countGuests) {
		try {
			const params = {
				dates,
				countGuests
			}
			console.log(countGuests);
			const response = await $api.get('/rooms/filter', {params});
			setRooms(response.data);
		} catch(e) {
			console.error(e);
		}
	}

	useEffect(() => {
		fetchRooms(dates, countGuests)
	}, [dates, countGuests])

	function togglePopup(state, content) {
		setPopupContent(content);
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

					{popupContent === 'dates'
						?
							<HeaderSelector select={selectDate} dateNum={dateNum}/>
						:
							<GuestsCountSelector select={selectDate} dateNum={dateNum}/>
					}
				</Popup>
			}
			<CalendarChoosing setDateNum={setDateNum} togglePopup={togglePopup} dates={dates}/>
			<RoomChoosing dates={dates} rooms={rooms} styles={{padding: '20px 0', backgroundColor: '#000'}}/>
		</div>
	);
};

export default Choosing;