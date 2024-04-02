import React from 'react';
import RoomImg from "./RoomImg";
import IdSwiper from "../../IdSwiper";
import {A11y, Navigation, Pagination} from "swiper/modules";

const RoomCard = React.memo((props) => {

	const card = props.card;
	if (!card.tags) {
		card.tags = [];
	}
	if(!card.images) {
		card.images = []
	}

	console.log(card)

	return (
		<div className='rooms-card'>
			<div className="card__description">
				<div className="card__text">
					<h3 className="section-title card__title">{card.title}</h3>
					<p className="card__explanation">{card.description}</p>
				</div>
				<div className="card__links">
					<a href="#" className="card__link">Подробнее</a>
					<a href="#" className="card__link">Забронировать</a>
				</div>
				<div className="card__tags">
					{card.tags.map(tag =>
						<div className="card__tag">
							<div className="tag-icon">
								<img className='svgIcon' src={tag.icon} alt=""/>
							</div>
							<span className="tag-value">{tag.value}</span>
						</div>
					)}
				</div>
			</div>
			<div className="card__img-block">
				<IdSwiper items={card.images} params={{
					modules: [Navigation, Pagination, A11y],
					spaceBetween: 50,
					slidesPerView: 1,
					pagination:{ clickable: true },
					scrollbar:{ draggable: true },
					navigation: false
				}}>
					{card.images.map(item =>
						<RoomImg img={item}/>
					)}
				</IdSwiper>
			</div>
		</div>
	)
})

export default RoomCard;