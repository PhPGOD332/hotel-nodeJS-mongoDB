import React from "react";
import viewsImg from '../img/views-img.png';

const ViewsScreen = () => {


	return (
		<section className="screen views-screen">
			<div className="views__img-block">
				<img src={viewsImg} alt="views" className="views__img"/>
			</div>
			<div className="views__text">
				<span className="slogan views__slogan">Красивые виды</span>
				<h2 className="section-title views__title">Готовы провести лучший отдых в жизни?</h2>
				<p className="views__description">You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism.  The beautiful waters of Komodo will make you meet many travelers from other countries.</p>

			</div>
		</section>
	)
}

export default ViewsScreen;