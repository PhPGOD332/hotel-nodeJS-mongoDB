import React, {useState} from 'react';
import Calendar from "react-calendar";
const HeaderSelector = React.memo(({select, dateNum}) => {
	const [sDate, setsDate] = useState(new Date());

	function changeValue(value) {
		setsDate(value);
		select(value, dateNum);
	}

	return (
		<div className='content-wrapper'>
			<span className="popup-title">
				Выберите дату
			</span>
			<div className='calendarBlock'>
				<Calendar className='dateCalendar' onChange={changeValue} value={sDate} minDate={new Date()}/>
				<span className='selectedDate'>Выбранная дата: {sDate.toLocaleDateString()}</span>
			</div>
		</div>

	);
});

export default HeaderSelector;