import React, {useContext, useEffect, useState} from 'react';
import DataTable from "../../../UI/AdminPage/DataTable/DataTable";
import ClientService from '../../../../services/adminServices/client-service';
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
			setClientData({})
		} catch(e) {
		    console.error(e)
		}
	}

	function popupInner(args) {
		const type = Object.keys(args)[0];
		if (type === 'add') {
			return (
				<div className='popup-content'>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="surname" className='mini-text'>
							<span className='label-span'>Фамилия</span>
							<input value={clientData.surname} id="surname" type="text" className='input-text'
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
							<input value={clientData.name} id="name" type="text" className='input-text'
							       placeholder='Имя'
							       onChange={(e) => setClientData({...clientData, name: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="patronymic" className='mini-text'>
							<span className='label-span'>Отчество</span>
							<input value={clientData.patronymic} id="patronymic" type="text" className='input-text'
							       placeholder='Отчество'
							       onChange={(e) => setClientData({...clientData, patronymic: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="mail" className='mini-text'>
							<span className='label-span'>Почта</span>
							<input value={clientData.mail} id="mail" type="text" className='input-text'
							       placeholder='Почта'
							       onChange={(e) => setClientData({...clientData, mail: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="phone" className='mini-text'>
							<span className='label-span'>Телефон</span>
							<input value={clientData.phone} id="phone" type="tel" className='input-text'
							       placeholder='Телефон'
							       onChange={(e) => setClientData({...clientData, phone: e.target.value})}/>
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
					edit
				</div>
			)
		} else if (type === 'delete') {
			return (
				<div className='popup-content'>
					delete
				</div>
			)
		} else if (type === 'alert') {

			return (
				<div className='popup-content'>
					<span className="title">{args[type]}</span>
				</div>
			)
		} else if (type === 'confirm') {

			return (
				<div className='popup-content'>
					<span className="title">{args[type]}</span>
					<button>Да</button>
					<button>Нет</button>
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