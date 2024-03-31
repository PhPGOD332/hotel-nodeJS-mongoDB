import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './IdSwiper.css';

const IdSwiper = (props) => {



	return (
		<Swiper {...props.params} navigation>
			{props.children.map(child =>
				<SwiperSlide>{child}</SwiperSlide>
			)}
		</Swiper>
	);
};

export default IdSwiper;