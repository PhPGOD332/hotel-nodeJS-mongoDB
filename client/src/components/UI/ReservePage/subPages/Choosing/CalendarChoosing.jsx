import React, {useContext} from 'react';
import 'react-calendar/dist/Calendar.css';
import {ChooseContext} from "../../../../pages/Reserve";

const CalendarChoosing = ({setDateNum, togglePopup}) => {
	const {dates} = useContext(ChooseContext);

	return (
		<div className='choosing-block'>
			<span className='title'>Выберите данные</span>
			<div className="inputs-block">
				<label htmlFor='dateOne' className="inputChooseLabel"
				       onClick={() => {
					       setDateNum(0);
					       togglePopup(true, 'dates');
				       }
				       }>
					<input id='dateOne' className='inputChoose' type="text" readOnly
					       value={dates[0].toLocaleDateString()}/>
					<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
							stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				</label>
				<label htmlFor='dateTwo' className="inputChooseLabel"
				       onClick={() => {
					       setDateNum(1);
					       togglePopup(true, 'dates');
				       }
				       }>
					<input id='dateTwo' className='inputChoose' type="text" readOnly
					       value={dates[1].toLocaleDateString()}/>
					<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
							stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				</label>
				<label htmlFor='clients' className="inputChooseLabel"
				       onClick={() => {
					       togglePopup(true, 'guests');
				       }
				       }>
					<input id='clients' className='inputChoose' type="text" readOnly
					       value={dates[1].toLocaleDateString()}/>
					<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
							stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				</label>
			</div>
		</div>
	)
};

export default CalendarChoosing;