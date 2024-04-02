import React from 'react';

const RoomImg = React.memo((props) => {

	return (
		<img src={props.img} alt="room" className="card__room-img"/>
	);
});

export default RoomImg;