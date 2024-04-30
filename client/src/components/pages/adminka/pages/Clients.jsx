import React, {useContext, useEffect, useState} from 'react';
import DataTable from "../../../UI/AdminPage/DataTable/DataTable";
import ClientService from '../../../../services/client-service';
import Popup from "../../../UI/Popup/Popup";
import {AdminContext} from "../AdminMain";
import Button from "../../../UI/Button/Button";

const Clients = () => {
	const { showPopup, togglePopup, popupContent, setPopupContent } = useContext(AdminContext);
	const [clients, setClients] = useState([]);
	const [clientData, setClientData] = useState({});

	useEffect(() => {
		getClients();
	}, [])

	useEffect(() => {
		const type = Object.keys(popupContent)[0];
		if(type === 'edit') {
			setClientData(popupContent[type]);

		} else if (type === 'add') {
			setClientData({});
		}


	}, [popupContent])

	async function getClients() {
		try {
			const response = await ClientService.getAllClients();
			setClients(response.data);
		} catch(e) {
		    console.error(e)
		}
	}

	async function addClient(data) {
		try {
			const response = await ClientService.addClient(data);
			togglePopup(true, {alert: response.data});
			setClientData({});
			getClients();
		} catch(e) {
		    console.error(e)
		}
	}
	async function editClient(data) {
		try {
			const response = await ClientService.editClient(data);
			togglePopup(true, {alert: response.data});
			setClientData({});
			getClients();
		} catch(e) {
		    console.error(e)
		}
	}

	async function deleteClient(id) {
		try {
			const response = await ClientService.removeClient(id);
			togglePopup(true, {alert: response.data});
			getClients();
		} catch(e) {
		    console.error(e)
		}
	}

	function popupInner(content) {
		const type = Object.keys(content)[0];

		if (type === 'add') {
			return (
				<div className='popup-content'>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="surname" className='mini-text'>
							<span className='label-span'>Фамилия</span>
							<input id="surname" type="text" className='input-text'
								   placeholder='Фамилия'
								   onChange={(e) => {
									   setClientData({...clientData, surname: e.target.value})
								   }}
							/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="name" className='mini-text'>
							<span className='label-span'>Имя</span>
							<input id="name" type="text" className='input-text'
								   placeholder='Имя'
								   onChange={(e) => setClientData({...clientData, name: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="patronymic" className='mini-text'>
							<span className='label-span'>Отчество</span>
							<input id="patronymic" type="text" className='input-text'
								   placeholder='Отчество'
								   onChange={(e) => setClientData({...clientData, patronymic: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="mail" className='mini-text'>
							<span className='label-span'>Почта</span>
							<input id="mail" type="text" className='input-text'
								   placeholder='Почта'
								   onChange={(e) => setClientData({...clientData, mail: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="phone" className='mini-text'>
							<span className='label-span'>Телефон</span>
							<input id="phone" type="tel" className='input-text'
								   placeholder='Телефон'
								   onChange={(e) => setClientData({...clientData, phone: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="serial" className='mini-text'>
							<span className='label-span'>Серия паспорта</span>
							<input id="serial" type="text" className='input-text'
								   placeholder='Серия'
								   onChange={(e) => setClientData({...clientData, passSerial: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="number" className='mini-text'>
							<span className='label-span'>Номер паспорта</span>
							<input id="number" type="text" className='input-text'
								   placeholder='Номер'
								   onChange={(e) => setClientData({...clientData, passNumber: e.target.value})}/>
						</label>
					</div>
					<div className="btn-block" style={{display: "flex", justifyContent: "flex-end"}}>
						<Button className='OrangeBtn backBtn'
								onClick={() => {
									addClient(clientData).then(() => {
										getClients();
									})
								}}
						>
							Добавить
						</Button>
					</div>
				</div>
			)
		} else if (type === 'edit') {
			return (
				<div className='popup-content'>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="surname" className='mini-text'>
							<span className='label-span'>Фамилия</span>
							<input defaultValue={clientData.surname} id="surname" type="text" className='input-text'
								   placeholder='Фамилия'
								   onChange={(e) => {
									   setClientData({...clientData, surname: e.target.value})
								   }}
							/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="name" className='mini-text'>
							<span className='label-span'>Имя</span>
							<input defaultValue={clientData.name} id="name" type="text" className='input-text'
								   placeholder='Имя'
								   onChange={(e) => setClientData({...clientData, name: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="patronymic" className='mini-text'>
							<span className='label-span'>Отчество</span>
							<input defaultValue={clientData.patronymic} id="patronymic" type="text"
								   className='input-text'
								   placeholder='Отчество'
								   onChange={(e) => setClientData({...clientData, patronymic: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="mail" className='mini-text'>
							<span className='label-span'>Почта</span>
							<input defaultValue={clientData.mail} id="mail" type="text" className='input-text'
								   placeholder='Почта'
								   onChange={(e) => setClientData({...clientData, mail: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="phone" className='mini-text'>
							<span className='label-span'>Телефон</span>
							<input defaultValue={clientData.phone} id="phone" type="tel" className='input-text'
								   placeholder='Телефон'
								   onChange={(e) => setClientData({...clientData, phone: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="passSer" className='mini-text'>
							<span className='label-span'>Серия паспорта</span>
							<input defaultValue={clientData.passSerial} id="passSer" type="text" className='input-text'
								   placeholder='Серия'
								   onChange={(e) => setClientData({...clientData, passSerial: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="phone" className='mini-text'>
							<span className='label-span'>Номер паспорта</span>
							<input defaultValue={clientData.passNumber} id="passNum" type="text" className='input-text'
								   placeholder='Номер'
								   onChange={(e) => setClientData({...clientData, passNumber: e.target.value})}/>
						</label>
					</div>
					<div className="btn-block" style={{display: "flex", justifyContent: "flex-end"}}>
						<Button className='OrangeBtn backBtn'
								onClick={() => {
									editClient(clientData).then(() => {
										editClient(clientData);
									})
								}}
						>
							Применить
						</Button>
					</div>
				</div>
			)
		} else if (type === 'delete') {
			const id = content[type].id;
			const message = content[type].message;
			return (
				<div className='popup-content'>
					<span className="title">{message}</span>
					<div className="confirm-btns">
						<button className='OrangeBtn' onClick={() => deleteClient(id)}>Да</button>
						<button className='OrangeBtn' onClick={() => togglePopup(false)}>Нет</button>
					</div>
				</div>
			)
		} else if (type === 'alert') {

			return (
				<div className='popup-content'>
					<span className="title">{content[type]}</span>
				</div>
			)
		} else if (type === 'confirm') {

			return (
				<div className='popup-content'>
					<span className="title">Вы уверены, что хотите удалить запись?</span>
					<div className="confirm-btns">
						<button className='OrangeBtn backBtn' onClick={() => deleteClient(content[type])}>Да</button>
						<button className='OrangeBtn backBtn' onClick={() => togglePopup(false)}>Нет</button>
					</div>
				</div>
			)
		}
	}

	return (
		<div className='wrapper'>
			<Popup state={showPopup ? 'visible' : 'invisible'} toggle={togglePopup}>
				{
					popupInner(popupContent)
				}
			</Popup>
			<div className="title-block">
				<span className="section-title">Клиенты</span>
			</div>

			<DataTable data={clients}/>
		</div>
	);
};

export default Clients;