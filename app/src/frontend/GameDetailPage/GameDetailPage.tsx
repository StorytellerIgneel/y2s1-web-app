import React from 'react';

import Sidebar from '../Sidebar/Sidebar.tsx';
import NavBar from '../include/NavBar.jsx';
import VideoPlayer from "./VideoPlayer.tsx";

import "./GameDetailPage.css"

// temporary game resources, will remove it once its able to get from database
import GodOfWarTrailer1 from "./resource/GodOfWarTrailer1.webm";
import GodOfWarTrailer2 from "./resource/GodOfWarTrailer2.webm";
import GodOfWar1 from "./resource/GodOfWar1.jpg";
import GodOfWar2 from "./resource/GodOfWar2.jpg";
import GodOfWar3 from "./resource/GodOfWar3.jpg";
import GodOfWar4 from "./resource/GodOfWar4.jpg";
import GodOfWar5 from "./resource/GodOfWar5.jpg";

function GameDetailPage() {
    return (
        <div className="body">
            <Sidebar />
            {/* <NavBar /> */}
            <h1>God of War</h1>
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" checked/>
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <main id="carousel">
                <div className="item">
                    <VideoPlayer />
                </div>

                <div className="item">
                    <img src={GodOfWar1} width="800" height="450"/>
                </div>

                <div className="item">
                    <img src={GodOfWar2} width="800" height="450"/>
                </div>

                <div className="item">
                    <img src={GodOfWar3} width="800" height="450"/>
                </div>

                <div className="item">
                    <img src={GodOfWar4} width="800" height="450"/>
                </div>

                <div className="item">
                    <img src={GodOfWar5} width="800" height="450"/>
                </div>

                
            </main>
        </div>
    );
}

export default GameDetailPage;