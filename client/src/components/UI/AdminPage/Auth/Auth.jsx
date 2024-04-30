import React, {useContext, useEffect, useState} from 'react';
import Popup from "../../Popup/Popup";
import {AdminContext} from "../../../pages/adminka/AdminMain";
import Button from "../../Button/Button";
import AdminService from "../../../../services/admin-service";

const Auth = (props) => {
    const {togglePopup, isAuth, setIsAuth, failAuth, setFailAuth, setRole} = useContext(AdminContext);
    // const [visibilityPopup, setVisibilityPopup] = useState(false);
    const [authData, setAuthData] = useState({});

    async function checkAuth() {
        try {
            const response = await AdminService.checkAdmin(authData);

            if (response.data) {
                setIsAuth(true);
                setFailAuth(false);
                setRole(response.data);
            } else {
                setFailAuth(true);
            }
        } catch(e) {
            return e.message;
        }
    }

    return (
            isAuth
            ?
            props.children
            :
                <Popup state={'visible'} toggle={togglePopup}>
                    <span className="popup-title">Авторизация</span>
                    <div className="inputs-block" style={{gap: '15px', display: 'flex', flexDirection: 'column'}}>
                        <input placeholder='Логин' onChange={(e) => setAuthData({...authData, login: e.target.value})}
                               type="text" className='input-text'/>

                        <input placeholder='Пароль' onChange={(e) => setAuthData({...authData, pass: e.target.value})}
                               type="password" className='input-text'/>
                    </div>
                    {failAuth ? <span className='form-error' style={{marginBottom: '15px'}}>Логин или пароль не верны</span>
                        : false}
                    <Button style={{marginTop: '30px', float: 'right'}} onClick={() => checkAuth()}
                            className='OrangeBtn'>Войти</Button>
                </Popup>
    );
};

export default Auth;