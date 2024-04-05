import React, {useContext, useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import {ChooseContext} from "../../../../pages/Reserve";

const CalendarChoosing = ({setDateNum, togglePopup}) => {
	const {dates, countGuests} = useContext(ChooseContext);


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
				<label htmlFor='clients' className="inputChooseLabel LabelGuests"
				       onClick={() => {
					       togglePopup(true, 'guests');
				       }
				       }>
					<input id='clients' className='inputChoose' type="text" readOnly
					       value={`${countGuests.adults} взросл.${countGuests.children > 0  ? `, ${countGuests.children} ${countGuests.children > 4 ? 'детей' : 'ребён.'}` : ''}`}/>
					<svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke="#ffffff">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
						<g id="SVGRepo_iconCarrier">
							<title>ionicons-v5-j</title>
							<path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z"/>
							<path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z"/>
							<path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z"/>
							<path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z"/>
						</g>

					</svg>
				</label>
			</div>
		</div>
	)
};

export default CalendarChoosing;