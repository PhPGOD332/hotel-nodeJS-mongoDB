import React, {useContext} from 'react';

import {FormContext} from "../../../../pages/Reserve";

const InfoGuests = () => {
	const {chosenRoom} = useContext(FormContext);
	return (
		<div className='form-section form-guests'>
			<div className="title-form">
				<span className='title'> Информация о гостях</span>
			</div>
			<div className="form">
				<div className="sub-section sub-title-block">
					<span className='mini-title'>Номер: </span>
					<span className='form-text'>{chosenRoom.title}. </span>
					<span className='form-text'> 2 взрослых</span>
				</div>
				<div className="sub-section inputs">
					<input type="text" className="input-text" placeholder='Фамилия' required/>
					<input type="text" className="input-text" placeholder='Имя' required/>
					<input type="text" className="input-text" placeholder='Отчество' required/>
				</div>
			</div>
		</div>
	);
};

export default InfoGuests;