import React, {useContext} from 'react';

import {FormContext} from "../../../../pages/Reserve";

const InfoGuests = () => {
	const {chosenRoom, countGuests, guestsInfo, setGuestsInfo} = useContext(FormContext);
	let arrayGuests = guestsInfo;


	return (
		<div className='form-section form-guests'>
			<div className="title-form">
				<span className='title'> Информация о гостях</span>
			</div>
			<div className="form">
				<div className="sub-section sub-title-block">
					<span className='mini-title'>Номер: </span>
					<span className='form-text'>{chosenRoom.title}. </span>
					<span className='form-text'>{countGuests.adults} взросл. {countGuests.children > 0  ? `, ${countGuests.children} ${countGuests.children > 4 ? 'детей' : 'ребён.'}` : ''}</span>
				</div>
				<div className="sub-section">
					{guestsInfo.map((guest, index) =>
						<div className='inputs-block' key={index}>
							<span className='mini-title' style={{marginBottom: '5px'}}>{index + 1}-ый гость</span>
							<div className="inputs">
								<input defaultValue={arrayGuests[index].surname} type="text" className="input-text"
									   placeholder='Фамилия'
									   onChange={(e) => {
										   arrayGuests[index].surname = e.target.value;
										   setGuestsInfo([...arrayGuests])
									   }}
								/>
								<input defaultValue={arrayGuests[index].name} type="text" className="input-text"
									   placeholder='Имя'
									   onChange={(e) => {
										   arrayGuests[index].name = e.target.value;
										   setGuestsInfo([...arrayGuests])
									   }}
								/>
								<input defaultValue={arrayGuests[index].patronymic} type="text" className="input-text"
									   placeholder='Отчество'
									   onChange={(e) => {
										   arrayGuests[index].patronymic = e.target.value;
										   setGuestsInfo([...arrayGuests])
									   }}
								/>
								{
									index === 0
										?
										<div className='pass-block'>
											<input defaultValue={arrayGuests[index].passSerial} type="text"
												   className="input-text"
												   placeholder='Серия паспорта'
												   onChange={(e) => {
													   arrayGuests[index].passSerial = e.target.value;
													   setGuestsInfo([...arrayGuests])
												   }}
											/>
											<input defaultValue={arrayGuests[index].passNumber} type="text"
												   className="input-text"
												   placeholder='Номер паспорта'
												   onChange={(e) => {
													   arrayGuests[index].passNumber = e.target.value;
													   setGuestsInfo([...arrayGuests])
												   }}
											/>
											<span className='views__text' style={{margin: '0 0 15px 20px', color: '#FFC178'}}>На кого оформляем</span>
										</div>

										:
										false
								}
							</div>
						</div>
					)}

				</div>

			</div>
		</div>
	);
};

export default InfoGuests;