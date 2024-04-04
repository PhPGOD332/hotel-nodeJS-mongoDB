import React, {useState} from 'react';
import Calendar from "react-calendar";
const HeaderSelector = React.memo(({select, dateNum}) => {
	const [sDate, setsDate] = useState(new Date());

	function changeValue(value) {
		setsDate(value);
		select(value, dateNum);
	}

	return (
		<div className='calendarBlock'>
			<Calendar className='dateCalendar' onChange={changeValue} value={sDate} minDate={new Date()}/>
			<span className='selectedDate'>{sDate.toLocaleDateString()}</span>
		</div>
	);
});

export default HeaderSelector;