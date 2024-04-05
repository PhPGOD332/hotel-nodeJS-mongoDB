import React, {useContext} from 'react';
import {ChooseContext} from "../../../../pages/Reserve";

const GuestsCountSelector = () => {
	const {countGuests, setCountGuests} = useContext(ChooseContext);

	function setCount(value, title) {
		if (value < 0) {
			value = 0;
		}

		if (title === 'adults') {
			setCountGuests({...countGuests, adults: value})
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
			<div className="guest-selector adults-selector">
				<span className="form-text">Взрослые</span>
				<div className="selector">
					<div className="minus-block"
					     onClick={() =>
						     setCountGuests(countGuests.adults - 1 < 0 ? {...countGuests, adults: 0} : {...countGuests, adults: countGuests.adults - 1})
						 }
					>-

					</div>
					<input type="number" className="input-text selector-input" min='0'
					       value={countGuests.adults}
					       onChange={(e) =>
						       setCountGuests(e.target.value < 0 || e.target.value === '' ? {...countGuests, adults: 0} : {...countGuests, adults: +e.target.value})
						   }
					/>
					<div className="plus-block"
					     onClick={() =>
						     setCountGuests({...countGuests, adults: countGuests.adults + 1})
						 }
					>+

					</div>
				</div>
			</div>
			<div className="guest-selector children-selector">
				<span className="mini-text">Дети младше 4 лет</span>
				<div className="selector">
					<div className="minus-block"
					     onClick={() =>
						     setCountGuests(countGuests.children - 1 < 0 ? {...countGuests, children: 0} : {...countGuests, children: countGuests.children - 1})
					     }
					>-

					</div>
					<input type="number" className="input-text selector-input"
					       value={countGuests.children}
					       onChange={(e) =>
						       setCountGuests(e.target.value < 0 || e.target.value === '' ? {...countGuests, children: 0} : {...countGuests, children: +e.target.value})
					       }
					/>
					<div className="plus-block"
					     onClick={() =>
						     setCountGuests({...countGuests, children: countGuests.children + 1})
					     }
					>+

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