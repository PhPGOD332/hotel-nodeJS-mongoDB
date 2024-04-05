import React, {useContext} from 'react';
import {FormContext} from "../../../../pages/Reserve";

const ContactData = () => {
	const {setContacts, contacts} = useContext(FormContext);

	return (
		<div className='form-section form-guests'>
			<div className="title-form">
				<span className='title'> Контактные данные</span>
			</div>
			<div className="form">

				<div className="sub-section inputs">
					<input onChange={(e) => setContacts({...contacts,  surname: e.target.value })} type="text" className="input-text" placeholder='Фамилия' required/>
					<input onChange={(e) => setContacts({...contacts,  name: e.target.value })} type="text" className="input-text" placeholder='Имя' required/>
					<input onChange={(e) => setContacts({...contacts, patronymic: e.target.value })} type="text" className="input-text" placeholder='Отчество' required/>
					<input onChange={(e) => setContacts({...contacts,  mail: e.target.value })} type="email" className="input-text" placeholder='Электронная почта' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' required/>
					<input onChange={(e) => setContacts({...contacts,  phone: e.target.value })} type="tel" className="input-text" placeholder='Номер телефона' pattern={'\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'} required/>
				</div>
			</div>
		</div>
	);
};

export default ContactData;