import React, {useState, Context, createContext} from 'react';
import './AdminMain.css'
import { Outlet } from "react-router-dom";
import MenuBar from "../../UI/AdminPage/MenuBar/MenuBar";
import Popup from "../../UI/Popup/Popup";
import Auth from "../../UI/AdminPage/Auth/Auth";
export const AdminContext = createContext();

const AdminMain = () => {

	const [showPopup, setShowPopup] = useState(false);
	const [popupContent, setPopupContent] = useState({});
	const [isAuth, setIsAuth] = useState(false);
	const [failAuth, setFailAuth] = useState(false);
	const [role, setRole] = useState('');

	function togglePopup(state, content) {
		setPopupContent({...content});
		setShowPopup(state);
	}

	return (
		<div className='page container'>
			<AdminContext.Provider value={{togglePopup, showPopup, setShowPopup, popupContent, setPopupContent, isAuth, setIsAuth, failAuth, setFailAuth, role, setRole}}>
				<MenuBar/>
				<main className="screen content">
					<Auth>
						<Outlet />
					</Auth>
				</main>
			</AdminContext.Provider>
		</div>
	);
};

export default AdminMain;