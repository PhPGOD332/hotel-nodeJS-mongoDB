import React, {useContext, useState} from 'react';
import './GuestsCountSelector.css';
import {ChooseContext} from "../../../../pages/Reserve";

const GuestsCountSelector = ({inputsDisabled, setDisable}) => {
	const {countGuests, setCountGuests} = useContext(ChooseContext);

	function setCount(value, title, type) {
		if (value < 0) {
			value = 0;
		}

		if (title === 'adults') {
			if (type === 'change') {

			}
			if (type === 'click') {

			}
			setCountGuests({...countGuests, guests: value})
		}
		if (title === 'children') {
			setCountGuests({...countGuests, children: value})
		}

	}

	return (
		<div className='content-wrapper'>
			<span className="popup-title">
				Гости
			</span>
			<div className="selectors">
				<div className="guest-selector adults-selector">
					<span className="mini-text">Взрослые</span>
					<div className="selector">
						<div className={`btn-block minus-block ${inputsDisabled.adults.minus}`}
						     onClick={function() {
							     if (countGuests.adults - 1 < 2) {
								     setCountGuests({...countGuests, adults: 1})
								     setDisable( { ...inputsDisabled, adults: {...inputsDisabled.adults, minus: 'disabled' } } )
							     } else {
								     setCountGuests({...countGuests, adults: countGuests.adults - 1})
								     setDisable( { ...inputsDisabled, adults: {...inputsDisabled.adults, plus: '' } } )
							     }
						     }
						     }
						>-
						</div>
						<input type="number" className="input-text selector-input"
						       value={countGuests.adults}
						       onChange={function(e) {
								   if (e.target.value > 49) {
									   setCountGuests({...countGuests, adults: 50})
									   setDisable( { ...inputsDisabled, adults: {minus: '', plus: 'disabled' } } )
								   } else if (e.target.value < 2) {
									   setCountGuests({...countGuests, adults: 1})
									   setDisable( { ...inputsDisabled, adults: {plus: '', minus: 'disabled' } } )
								   } else {
									   setCountGuests({...countGuests, adults: e.target.value})
									   setDisable( { ...inputsDisabled, adults: {plus: '', minus: '' } } )
								   }
						       }
						       }
						/>
						<div className={`btn-block plus-block ${inputsDisabled.adults.plus}`}
						     onClick={function() {
							     if (countGuests.adults + 1 > 49) {
								     setCountGuests({...countGuests, adults: 50})
								     setDisable( { ...inputsDisabled, adults: {...inputsDisabled.adults, plus: 'disabled' } } )
							     } else {
								     if (countGuests.adults + 1 > 0) {
									     setCountGuests({...countGuests, adults: countGuests.adults + 1})
									     setDisable( { ...inputsDisabled, adults: {...inputsDisabled.adults, minus: '' } } )
								     }
							     }
						     }
						     }
						>+

						</div>
					</div>
				</div>
				<div className="guest-selector children-selector">
					<span className="mini-text">Дети младше 4 лет</span>
					<div className="selector">
						<div className={`btn-block minus-block ${inputsDisabled.children.minus}`}
						     onClick={function() {
							     if (countGuests.children - 1 < 1) {
								     setCountGuests({...countGuests, children: 0})
								     setDisable( { ...inputsDisabled, children: {...inputsDisabled.children, minus: 'disabled' } } )
							     } else {
								     setCountGuests({...countGuests, children: countGuests.children - 1})
								     setDisable( { ...inputsDisabled, children: {...inputsDisabled.children, plus: '' } } )
							     }
						     }
						     }
						>-

						</div>
						<input type="number" className="input-text selector-input" min='0' max='50'
						       value={countGuests.children}
						       onChange={function(e) {
							       if (e.target.value > 49) {
								       setCountGuests({...countGuests, children: 50})
								       setDisable( { ...inputsDisabled, children: {minus: '', plus: 'disabled' } } )
							       } else if (e.target.value < 1) {
								       setCountGuests({...countGuests, children: 0})
								       setDisable( { ...inputsDisabled, children: {plus: '', minus: 'disabled' } } )
							       } else {
								       setCountGuests({...countGuests, children: e.target.value})
								       setDisable( { ...inputsDisabled, children: {plus: '', minus: '' } } )
							       }
						       }
						       }
						/>
						<div className={`btn-block plus-block ${inputsDisabled.children.plus}`}
						     onClick={function() {
							     if (countGuests.children + 1 > 49) {
								     setCountGuests({...countGuests, children: 50})
								     setDisable( { ...inputsDisabled, children: {...inputsDisabled.children, plus: 'disabled' } } )
							     } else {
									 if (countGuests.children + 1 > 0) {
										 setCountGuests({...countGuests, children: countGuests.children + 1})
										 setDisable( { ...inputsDisabled, children: {...inputsDisabled.children, minus: '' } } )
									 }
							     }
						     }
						     }
						>+

						</div>
					</div>
				</div>
			</div>

			<div className="children-age-block">
				{/*{countGuests.children*/}
				{/*	?*/}
				{/*	countGuests.children.map((child, index) =>*/}
				{/*		<div className="age-block">*/}
				{/*			<span className="mini-text">Возраст {index}-го ребенка</span>*/}
				{/*			<select name="" id="">*/}
				{/*				<option value=""></option>*/}
				{/*				<option value=""></option>*/}
				{/*				<option value=""></option>*/}
				{/*				<option value=""></option>*/}
				{/*			</select>*/}
				{/*		</div>*/}
				{/*	)*/}
				{/*	:*/}
				{/*	''*/}
				{/*}*/}
			</div>
		</div>
	);
};

export default GuestsCountSelector;