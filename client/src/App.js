import './css/General.css';
import Rooms from "./components/pages/Rooms";
import {BrowserRouter as Router, Route, Routes, Navigate, NavLink} from "react-router-dom";
import Reserve from "./components/pages/Reserve";
import About from "./components/pages/About";
import React from "react";
import Main from "./components/pages/Main";


function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/rooms" element={<Rooms/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/reserve" element={<Reserve/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>

    </div>
  );
}


export default App;