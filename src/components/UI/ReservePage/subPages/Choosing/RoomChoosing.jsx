import React, {useContext} from 'react';
import RoomMiniCard from "./RoomMiniCard";
import {ChooseContext} from "../../../../pages/Reserve";

const RoomChoosing = ({rooms, styles}) => {
	const {dates} = useContext(ChooseContext);

	return (
		<div className={`choosing-block`} style={styles}>
			<span className='title' style={{fontSize: '25px'}}>Результат:</span>
			{rooms.length
				?
				<RoomMiniCard dates={dates} rooms={rooms}/>
				:
				<div className='title-block'>
					<span className='title'>На указанный период номеров не найдено</span>
				</div>
			}
		</div>
	);
};

export default RoomChoosing;