import React from "react";
import viewsImg from '../../../../img/views-img.png';
import './Beauty.css'

const Beauty = () => {


	return (
		<section className="screen views-screen">
			<div className="views__img-block">
				<img src={viewsImg} alt="views" className="views__img"/>
			</div>
			<div className="views__text">
				<span className="slogan views__slogan">Красивые виды</span>
				<h2 className="section-title views__title">Готовы провести лучший отдых в жизни?</h2>
				<p className="views__description">Вы будете поражены, если примете участие в этом парусном туре по острову Комодо. Так что, помимо наслаждения туризмом на острове Комодо, вы также должны попробовать морской туризм. Прекрасные воды Комодо познакомят вас со многими путешественниками из других стран.</p>

			</div>
		</section>
	)
}

export default Beauty;