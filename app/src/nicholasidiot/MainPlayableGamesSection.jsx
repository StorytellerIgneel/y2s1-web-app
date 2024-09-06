import React from 'react';
import './MainPlayableGamesSection.css'; // Import the section-specific CSS

const MainPlayableGamesSection = () => (
  <section className="section2" id="play">
    <h1 className="autoShow">Playable Games</h1>
    <div className="cards-container">
      {/* Add individual game cards */}
      {/* Example Card */}
      <div className="cards autoShow">
        <div className="face front">
          <img src="./images/pac_man_official_pacman_video_game.jpg" alt="Pac-Man"/>
          <h3>Pac-Man</h3>
        </div>
        <div className="face back">
          <h3>Pac-Man</h3>
          <p>"Pac-Man is a classic arcade game where you guide Pac-Man through mazes, eating pellets and avoiding ghosts. Eat power pellets to turn the tables and chase the ghosts. Simple, addictive, and timeless fun for all ages."</p>
          <button className="card-button" onClick={() => window.location.href='https://pacman.live/play.html'}>
            <i className="fa-solid fa-circle-play"></i> Play
          </button>
        </div>
        
      </div>
      <div className="cards autoShow">
          <div className="face front">
              <img src="./images/flappy-birds.jpg"/>
              <h3>Flappy Bird</h3>
          </div>
          <div className="face back">
              <h3>Flappy Bird</h3>
              <p>"Flappy Bird is a simple yet addictive game where you tap to navigate a bird through a series of
                  pipes. Timing and precision are key as you try to achieve the highest score. Easy to learn, hard
                  to master, and endlessly fun."</p>
              <button className="card-button" onClick="window.location.href='https://flappybird.io/';">
                  <i className="fa-solid fa-circle-play"></i>Play
              </button>
          </div>
      </div>
      <div className="cards autoShow">
          <div className="face front">
              <img src="../assets/images/wordle.jpg"/>
              <h3>Wordle</h3>
          </div>
          <div className="face back">
              <h3>Wordle</h3>
              <p>"Wordle is a daily word puzzle game where you guess a five-letter word in six tries. Each guess
                  gives color-coded feedback to help you get closer to the correct word. Fun, challenging, and
                  perfect for word enthusiasts."</p>
              <button className="card-button" onClick={() => {window.location.href='https://wordly.org/'}}>
                  <i className="fa-solid fa-circle-play"></i>Play
              </button>
          </div>
      </div>
    </div>
  </section>
);

export default MainPlayableGamesSection;
