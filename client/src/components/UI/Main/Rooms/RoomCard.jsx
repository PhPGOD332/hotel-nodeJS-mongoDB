import React from 'react';
import RoomImg from "./RoomImg";
import IdSwiper from "../../IdSwiper";
import {A11y, Navigation, Pagination} from "swiper/modules";
import {NavLink} from "react-router-dom";

const RoomCard = React.memo(({card}) => {

	const someCard = card;
	if (!someCard.tags) {
		someCard.tags = [];
	}
	if(!someCard.images) {
		someCard.images = []
	}

	return (
		<div className='rooms-card'>
			<div className="card__description">
				<div className="card__text">
					<h3 className="section-title card__title">{someCard.title}</h3>
					<p className="card__explanation">{someCard.description}</p>
				</div>
				<div className="card__links">
					{/*<a href="#" className="card__link">Подробнее</a>*/}
					<NavLink className="card__link" to={
						{ pathname: 'reserve', state: { idCard: someCard._id }
						}}>Забронировать</NavLink>
					<a href="#" ></a>
				</div>
				<div className="card__tags">
					{someCard.tags.map(tag =>
						<div key={tag._id} className="card__tag">
							<div className="tag-icon">
								<img className='svgIcon' src={'http://localhost:5000/images' + tag.icon} alt=""/>
							</div>
							<span className="tag-value">{tag.value}</span>
						</div>
					)}
				</div>
			</div>
			<div className="card__img-block">
				<IdSwiper items={someCard.images} params={{
					modules: [Navigation, Pagination, A11y],
					spaceBetween: 50,
					slidesPerView: 1,
					pagination:{ clickable: true },
					scrollbar:{ draggable: true },
					navigation: false
				}}>
					{someCard.images.map((item, index) =>
						<RoomImg key={index} img={'http://localhost:5000/images' + item}/>
					)}
				</IdSwiper>
			</div>
		</div>
	)
})

export default RoomCard;