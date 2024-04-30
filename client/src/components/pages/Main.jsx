import React from 'react';
import Header from "../UI/Header/Header";
import StartScreen from "../UI/Main/StartScreen/StartScreen";
import Beauty from "../UI/Main/Beauty/Beauty";
import Rooms from "../UI/Main/Rooms/Rooms";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar";

const Main = () => {
	return (
		<div className='App' style={{position: "relative", paddingBottom: '126px'}}>
			<Header>
				<Navbar>
					{
						[
							{
								name: 'Главная',
								link: '/'
							},
							// {
							// 	name: 'Номера',
							// 	link: '/rooms'
							// },
							{
								name: 'О нас',
								link: '/about'
							},
							{
								name: 'Бронь номеров',
								link: '/reserve'
							},
						]
					}
				</Navbar>
			</Header>
			<StartScreen>

			</StartScreen>
			<Beauty>

			</Beauty>
			<Rooms style={{paddingTop: '20px'}}>

			</Rooms>
			<Footer/>
		</div>
	);
};

export default Main;