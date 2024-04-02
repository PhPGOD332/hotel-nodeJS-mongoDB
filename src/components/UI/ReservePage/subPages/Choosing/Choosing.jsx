import React, {useState} from 'react';
import CalendarChoosing from "./CalendarChoosing";
import Popup from "../../../Popup/Popup";
import HeaderSelector from "../../../HeaderSelector";

const Choosing = () => {
	const [dates, setDates] = useState([new Date().toLocaleDateString(), new Date().toLocaleDateString()]);
	const [showPopup, setShowPopup] = useState(false);
	const [dateNum, setDateNum] = useState(0);

	function togglePopup(state) {
		setShowPopup(state);
	}

	function selectDate(curDate, dateNum) {
		const oldDates = [...dates];

		oldDates[dateNum] = curDate.toLocaleDateString();
		setDates(oldDates);
	}

	return (
		<div className='choosing-page'>
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
		</div>
	);
};

export default Choosing;