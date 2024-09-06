import React from 'react';

import Sidebar from '../Sidebar/Sidebar.tsx';

import "./GameDetailPage.css"

// temporary resources, need get from db
const gamedata = [
    {
        gameId:"G001",
        name:"God Of War",
        img:'./resource/GodOfWar1.jpg',
        description:"His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        rating: "Overwhelmingly Positive",
        ratingNum: 97275,
        releaseDate: "14 Jan 2022",
        developer: "Santa Monica Studio",
        publisher: "PlayStation Publishing LLC",
        price: "209.00"
    },
    {
        gameId:"G002",
        name:"God Of War 2",
        img:"./resource/GodOfWar2.jpg",
        description:"His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        rating: "Overwhelmingly Positive",
        ratingNum: 97275,
        releaseDate: "14 Jan 2022",
        developer: "Santa Monica Studio",
        publisher: "PlayStation Publishing LLC",
        price: "209.00"
    },
    {
        gameId:"G003",
        name:"God Of War 3",
        img:"./resource/GodOfWar3.jpg",
        description:"His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        rating: "Overwhelmingly Positive",
        ratingNum: 97275,
        releaseDate: "14 Jan 2022",
        developer: "Santa Monica Studio",
        publisher: "PlayStation Publishing LLC",
        price: "209.00"
    },
    {
        gameId:"G004",
        name:"God Of War 4",
        img:"./resource/GodOfWar4.jpg",
        description:"His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        rating: "Overwhelmingly Positive",
        ratingNum: 97275,
        releaseDate: "14 Jan 2022",
        developer: "Santa Monica Studio",
        publisher: "PlayStation Publishing LLC",
        price: "209.00"
    },
    {
        gameId:"G005",
        name:"God Of War 5",
        img:"./resource/GodOfWar5.jpg",
        description:"His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        rating: "Overwhelmingly Positive",
        ratingNum: 97275,
        releaseDate: "14 Jan 2022",
        developer: "Santa Monica Studio",
        publisher: "PlayStation Publishing LLC",
        price: "209.00"
    }
]

function GameDetailPage() {
    return (
        <div className="body">
            <Sidebar />
            <h1>Testing</h1>
            {/* <NavBar /> */}
            <div className="CardSlider">
                <div className="width-3/4 margin-auto">
                    <div className="margin-20">
                        {gamedata.map((d) => (
                            <div className="text-white border">
                                <div>
                                    <img src={d.img} alt="God Of War" />
                                </div>

                                <div>
                                    <p>{d.name}</p>
                                    <p>{d.rating}</p>
                                    <p>{d.ratingNum}</p>
                                    <p>{d.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default GameDetailPage;