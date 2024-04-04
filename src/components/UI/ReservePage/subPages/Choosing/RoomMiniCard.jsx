import React, {useContext} from 'react';
import './RoomMiniCard.css'
import imgSquare from '../../../../../img/room-parameters/square-icon.svg'
import imgRooms from '../../../../../img/room-parameters/rooms-icon.svg'
import imgPeople from '../../../../../img/room-parameters/people-icon.svg'
import {ChooseContext} from '../../../../pages/Reserve'
import Button from "../../../Button/Button";

const RoomMiniCard = React.memo(({dates, rooms}) => {
	const countDays = Math.floor((dates[1] - dates[0]) / (1000 * 60 * 60 * 24))
	const {chooseRoom} = useContext(ChooseContext);

	return (
		<div className='mini-rooms-cards'>
			{rooms.map((room, index) =>
				<div key={room._id} className='mini-rooms-cards__card'>
					<div className="tags">
						{room.tags
							?
							(room.tags.map(tag =>
								<div className="card__tag" key={tag._id}>
									<div className="tag-icon">
										<img className='svgIcon' src={tag.icon} alt=""/>
									</div>

								</div>))
							: ''
						}
					</div>
					<div className="img-block">
						<img src={room.images.length ? room.images[0] : false} alt=""/>
					</div>
					<div className="description-block">
						<span className="title">
							{room.title}
						</span>
						<div className="parameters">
							<div className="card__tag">
								<div className="tag-icon">
									<img className='svgIcon' src={imgPeople} alt=""/>
								</div>
								<span className=''>до {room.parameters[0][0].countRooms} мест</span>

							</div>
							<div className="card__tag">
								<div className="tag-icon">
									<img className='svgIcon' src={imgSquare} alt=""/>
								</div>
								<span className=''>{room.parameters[0][0].square} м<sup>2</sup></span>

							</div>
							<div className="card__tag">
								<div className="tag-icon">
									<img className='svgIcon' src={imgRooms} alt=""/>
								</div>
								<span className=''>{room.parameters[0][0].countRooms} комн.</span>
							</div>
						</div>
						<div className="card__bottom">
							<div className="card__price-block">
								<span className='dates'>{dates[0].toLocaleDateString()} - {dates[1].toLocaleDateString()}</span>
								<span style={{fontSize: '13px'}}>{countDays} ноч.: </span>
								<span className='card__price'>{(room.price * countDays).toLocaleString()} ₽</span>
							</div>
							<Button className="OrangeBtn card__btn" onClick={() => {
								if (dates[0].toLocaleDateString() === dates[1].toLocaleDateString()) {
									alert('Укажите хотя бы одну ночь для продолжения!');
								} else {
									chooseRoom(room);
								}
							}}>Выбрать</Button>
						</div>

					</div>
				</div>
			)}
		</div>
	);
});

export default RoomMiniCard;