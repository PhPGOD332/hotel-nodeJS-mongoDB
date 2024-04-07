import React, {useState, Context, createContext} from 'react';
import './AdminMain.css'
import { Outlet } from "react-router-dom";
import MenuBar from "../../UI/AdminPage/MenuBar/MenuBar";
import Popup from "../../UI/Popup/Popup";
export const AdminContext = createContext();

const AdminMain = () => {

	const [showPopup, setShowPopup] = useState(false);
	const [popupContent, setPopupContent] = useState({});

	function togglePopup(state, content) {
		setPopupContent({...content});
		setShowPopup(state);
		console.log(popupContent)
	}

	return (
		<div className='page container'>
			<AdminContext.Provider value={{togglePopup, showPopup, setShowPopup, popupContent, setPopupContent}}>
				<MenuBar/>
				<main className="screen content">
					<Outlet />
				</main>
			</AdminContext.Provider>
		</div>
	);
};

export default AdminMain;