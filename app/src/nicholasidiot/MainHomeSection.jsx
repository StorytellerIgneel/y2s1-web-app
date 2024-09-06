import React from 'react';

const MainHomeSection = () => (
  <section className="section1 home">
    <div className="home-text">
      <h1>Welcome to <span style={{ color: 'black' }}>Game</span><span style={{ color: '#E81C24' }}>NonStop</span></h1>
      <p>"At <span style={{ color: 'red' }}>GNS</span>, we bring the gaming world to your fingertips. Explore our vast collection of the latest releases, timeless classics, and exclusive deals on your favorite games. Join our community of passionate gamers and elevate your gaming experience with <span style={{ color: 'red' }}>GNS</span>!"</p>
      <button className="discover-button">Discover</button>
      <button className="play-button" onClick={() => document.getElementById('play').scrollIntoView()}>
        <i className="fa-solid fa-play"></i> Play
      </button>
    </div>
    <div className="home-img">
      <img src="./images/guy-playing-pc.png" alt="Guy playing PC"/>
    </div>
  </section>
);

export default MainHomeSection;
