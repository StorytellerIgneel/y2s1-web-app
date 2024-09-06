import React from 'react';

const MainAboutUsSection = () => (
  <section className="section3" id="About Us">
    <div className="game-video">
      <video autoPlay loop src="videos/gamevid.mp4" alt="Game Video"/>
    </div>
    <div className="distribution-content">
      <h2 className="distribution-title autoShow">We are the Best Game Distributors for all Gamers.</h2>
      <ul className="distribution-list">
        {/* Add list items */}
        <li className="distribution-item">
          <i className="fa-solid fa-gamepad autoShow"></i>
          <div className="autoShow">
            <div className="distribution-item-title">Game Collection Overview</div>
            <div className="distribution-item-description">Browse our extensive collection of video games, ranging from the latest releases to timeless classics. Whether you’re into action-packed adventures or relaxing simulations, we have something for every gamer.</div>
          </div>
        </li>
        {/* Add more list items similarly */}
      </ul>
      <button className="play-button autoShow">Discover</button>
    </div>
  </section>
);

export default MainAboutUsSection;
