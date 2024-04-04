import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './IdSwiper.css';

const IdSwiper = React.memo((props) => {
	return (
		<Swiper {...props.params} style={props.styles}>
			{props.children.map((child, index) =>
				<SwiperSlide key={index}>{child}</SwiperSlide>
			)}
		</Swiper>
	);
});

export default IdSwiper;