import React from 'react';
import RoomMiniCard from "./RoomMiniCard";

const RoomChoosing = ({dates, rooms, styles}) => {
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