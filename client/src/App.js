import './css/General.css';
import Rooms from "./components/pages/Rooms";
import {BrowserRouter as Router, Route, Routes, Navigate, NavLink} from "react-router-dom";
import Reserve from "./components/pages/Reserve";
import About from "./components/pages/About";
import React from "react";
import MainPage from "./components/pages/Main";
import Main from "./components/pages/adminka/pages/Main";
import AdminMain from "./components/pages/adminka/AdminMain";
import Clients from "./components/pages/adminka/pages/Clients";
import Tags from "./components/pages/adminka/pages/Tags";
import Reserves from "./components/pages/adminka/pages/Reserves";


function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="rooms" element={<Rooms/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="reserve" element={<Reserve/>}/>
                <Route path="adminka/" element={<AdminMain/>}>
                    <Route index element={<Main/>}/>
                    <Route path="main" element={<Main/>}/>
                    <Route path="clients" element={<Clients/>}/>
                    <Route path="tags" element={<Tags/>}/>
                    <Route path="reserves" element={<Reserves/>}/>
                    <Route path="*" element={<Navigate to="main"/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>

    </div>
  );
}


export default App;