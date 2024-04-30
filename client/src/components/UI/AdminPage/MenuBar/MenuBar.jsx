import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import './MenuBar.css';
import {AdminContext} from "../../../pages/adminka/AdminMain";
const MenuBar = () => {
	const {role} = useContext(AdminContext);
	return (
		role === 'admin' ?
			<div className='menu-bar'>
				<NavLink to='main' className='menu-bar__item'>
					<span className='menu__bar__span'>Главная</span>
				</NavLink>
				<NavLink to='clients' className='menu-bar__item'>
					<span className='menu__bar__span'>Клиенты</span>
				</NavLink>
				<NavLink to='tags' className='menu-bar__item'>
					<span className='menu__bar__span'>Тэги номеров</span>
				</NavLink>
				<NavLink to='reserves' className='menu-bar__item'>
					<span className='menu__bar__span'>Бронирования</span>
				</NavLink>
				<NavLink to='reports' className='menu-bar__item'>
					<span className='menu__bar__span'>Отчетность</span>
				</NavLink>
			</div>
			:
			<div className='menu-bar'>
				<NavLink to='main' className='menu-bar__item'>
					<span className='menu__bar__span'>Главная</span>
				</NavLink>
				<NavLink to='reports' className='menu-bar__item'>
					<span className='menu__bar__span'>Отчетность</span>
				</NavLink>
			</div>
	);
};

export default MenuBar;