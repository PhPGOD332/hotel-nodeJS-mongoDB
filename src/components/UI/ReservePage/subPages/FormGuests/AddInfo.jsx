import React, {useContext} from 'react';

import {FormContext} from "../../../../pages/Reserve";

const AddInfo = () => {
	const {setAddInfo} = useContext(FormContext)
	return (
		<div className='form-section'>
			<div className="sub-title-block">
				<span className="mini-title">Дополнительные комментарии</span>
			</div>
			<textarea onChange={(e) => setAddInfo(e.target.value)} className='text-textarea' name="" id="" cols="30" rows='4' placeholder='Если у вас есть дополнительные пожелания, пожалуйста нам знать.'></textarea>
		</div>
	);
};

export default AddInfo;