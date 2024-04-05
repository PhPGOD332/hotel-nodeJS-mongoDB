import React, {useContext} from 'react';
import './FormGuests.css';
import InfoGuests from "./InfoGuests";
import {FormContext} from "../../../../pages/Reserve";
import ContactData from "./ContactData";
import AddInfo from "./AddInfo";
import Button from "../../../Button/Button";

const FormGuests = () => {
	const {dates, countGuests, pages, backToRooms, submit, totalPrice, countNights} = useContext(FormContext);


	return (
		<div className={`form-page ${pages[1]}`}>
			<div className="form-section">
				<Button className='OrangeBtn backBtn' onClick={() => backToRooms()}>
					<svg className='backIcon' fill="#000" width="20px" height="20px" viewBox="-0.96 -0.96 17.92 17.92" id="home-16px"
					     xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke="#000"
					     strokeWidth="0.576">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"/>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
						<g id="SVGRepo_iconCarrier">
							<path id="Path_77" data-name="Path 77"
							      d="M-13,11.5v2A2.5,2.5,0,0,1-15.5,16h-4A2.5,2.5,0,0,1-22,13.5V2.5A2.5,2.5,0,0,1-19.5,0h4A2.5,2.5,0,0,1-13,2.5v2a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-2A1.5,1.5,0,0,0-15.5,1h-4A1.5,1.5,0,0,0-21,2.5v11A1.5,1.5,0,0,0-19.5,15h4A1.5,1.5,0,0,0-14,13.5v-2a.5.5,0,0,1,.5-.5A.5.5,0,0,1-13,11.5Zm6.962-3.809a.505.505,0,0,0,0-.382.518.518,0,0,0-.109-.163l-4-4a.5.5,0,0,0-.708,0,.5.5,0,0,0,0,.708L-7.707,7H-17.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h9.793l-3.147,3.146a.5.5,0,0,0,0,.708A.5.5,0,0,0-10.5,12a.5.5,0,0,0,.354-.146l4-4A.518.518,0,0,0-6.038,7.691Z"
							      transform="translate(22)"/>
						</g>
					</svg>
					<span>Назад</span>
				</Button>
			</div>
			<div className="form-section">
				<div className="form prev-block">
					<div className="sub-section prev__item prev__title">
						<span className='title' style={{textTransform: "uppercase"}}>Ваша бронь: </span>
						<span className=''> 1 номер</span>
					</div>
					<div className="sub-section prev__item prev__info">
						<table className="info-table" style={{gap: '10px'}}>
							<tbody>
							<tr>
								<td><span className='mini-title'>{countNights} ноч.</span></td>
								<td><span>{dates[0].toLocaleDateString()} - {dates[1].toLocaleDateString()}</span></td>
							</tr>
							<tr>
								<td><span className='mini-title'>1 гость</span></td>
								<td><span>{countGuests.adults} взросл. {countGuests.children > 0  ? `, ${countGuests.children} ${countGuests.children > 4 ? 'детей' : 'ребён.'}` : ''}</span></td>
							</tr>
							</tbody>
						</table>
					</div>
					<div className="sub-section prev__item prev__price">
						<span className='mini-title'>Общая стоимость: </span>
						<span className='price'>{totalPrice.toLocaleString()} ₽</span>
					</div>
				</div>
			</div>
			<ContactData />
			<InfoGuests />
			<div className="form-section section-time">
				<div className="sub-title-block">
					<span className="mini-title">Время заезда и выезда</span>
				</div>
				<span className="form-text">Стандартное время заезда - 14:00, выезда - 12:00</span>
			</div>
			<AddInfo/>
			<div className="form-section section-submit">
				<div className="btn-block">
					<span className='mini-title'>Без предоплаты</span>
					<Button className='OrangeBtn' onClick={() => submit()}>Забронировать</Button>
				</div>
			</div>
		</div>
	);
};

export default FormGuests;