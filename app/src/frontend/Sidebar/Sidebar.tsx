import "./Sidebar.css";

import React from 'react';

import Logo from "./resource/GNS_Horizontal2_Black.svg";

function Sidebar(){
    return (
        <div className="sidebar">
            <img src={Logo} alt="GameNonStop-Logo" width="150" height="70"/>

            <br />
            <h2>Game categories:</h2>
            <li> <a href="#/action">Action</a> </li>
            <li> <a href="#/shooting">Shooting</a> </li>
            <li> <a href="#/singleplayer">Singleplayer</a> </li>
            <li> <a href="#/farming">Farming</a> </li>
            <li> <a href="#/open-world">Open World</a> </li>
            <li> <a href="#/adventure">Adventure</a> </li>
        </div>
    );
}

export default Sidebar;