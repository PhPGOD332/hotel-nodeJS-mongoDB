import React, {useContext, useEffect, useState} from 'react';
import {AdminContext} from "../AdminMain";
import ClientService from "../../../../services/client-service";
import Button from "../../../UI/Button/Button";
import Popup from "../../../UI/Popup/Popup";
import DataTable from "../../../UI/AdminPage/DataTable/DataTable";
import TagService from "../../../../services/tag-service";

const Tags = () => {
	const { showPopup, togglePopup, popupContent, setPopupContent } = useContext(AdminContext);
	const [dataList, setDataList] = useState([]);
	const [data, setData] = useState({});

	useEffect(() => {
		getData();
	}, [])

	useEffect(() => {
		const type = Object.keys(popupContent)[0];
		if(type === 'edit') {
			setDataList(popupContent[type]);

		} else if (type === 'add') {
			setDataList({});
		}


	}, [popupContent])

	async function getData() {
		try {
			const response = await TagService.getAllTags();
			setDataList(response.data);
		} catch(e) {
			console.error(e)
		}
	}

	async function addLine() {
		try {
			const formData = new FormData();
			formData.append('file', data.icon);
			console.log(formData)
			await setData({...data, file: formData});

			const response = await TagService.addTag(data);
			togglePopup(true, {alert: response.data});
			setData({});
			getData();
		} catch(e) {
			console.error(e)
		}
	}
	async function editClient(data) {
		try {
			const response = await ClientService.editClient(data);
			togglePopup(true, {alert: response.data});
			setData({});
			getData();
		} catch(e) {
			console.error(e)
		}
	}

	async function deleteClient(id) {
		try {
			const response = await ClientService.removeClient(id);
			togglePopup(true, {alert: response.data});
			getData();
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
							<span className='label-span'>Название (Eng)</span>
							<input id="surname" type="text" className='input-text'
								   placeholder='Название (Eng)'
								   onChange={(e) => {
									   setData({...data, name: e.target.value})
								   }}
							/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="name" className='mini-text'>
							<span className='label-span'>Название (Рус)</span>
							<input id="name" type="text" className='input-text'
								   placeholder='Название (Рус)'
								   onChange={(e) => setData({...data, value: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="patronymic" className='mini-text'>
							<span className='label-span'>Иконка</span>
							<input id="patronymic" type="file" className='input-text'
								   onChange={(e) => setData({...data, icon: e.target.files[0]})}/>
						</label>
					</div>
					<div className="btn-block" style={{display: "flex", justifyContent: "flex-end"}}>
						<Button className='OrangeBtn backBtn'
								onClick={() => {
									addLine(data).then(() => {
										getData();
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
							<input defaultValue={data.surname} id="surname" type="text" className='input-text'
								   placeholder='Фамилия'
								   onChange={(e) => {
									   setData({...data, surname: e.target.value})
								   }}
							/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="name" className='mini-text'>
							<span className='label-span'>Имя</span>
							<input defaultValue={data.name} id="name" type="text" className='input-text'
								   placeholder='Имя'
								   onChange={(e) => setData({...data, name: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="patronymic" className='mini-text'>
							<span className='label-span'>Отчество</span>
							<input defaultValue={data.patronymic} id="patronymic" type="text" className='input-text'
								   placeholder='Отчество'
								   onChange={(e) => setData({...data, patronymic: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="mail" className='mini-text'>
							<span className='label-span'>Почта</span>
							<input defaultValue={data.mail} id="mail" type="text" className='input-text'
								   placeholder='Почта'
								   onChange={(e) => setData({...data, mail: e.target.value})}/>
						</label>
					</div>
					<div className="input-block" style={{marginBottom: "15px"}}>
						<label htmlFor="phone" className='mini-text'>
							<span className='label-span'>Телефон</span>
							<input defaultValue={data.phone} id="phone" type="tel" className='input-text'
								   placeholder='Телефон'
								   onChange={(e) => setData({...data, phone: e.target.value})}/>
						</label>
					</div>
					<div className="btn-block" style={{display: "flex", justifyContent: "flex-end"}}>
						<Button className='OrangeBtn backBtn'
								onClick={() => {
									editClient(data).then(() => {
										editClient(data);
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
				<span className="section-title">Теги</span>
			</div>

			<DataTable data={dataList}/>
		</div>
	);
};

export default Tags;