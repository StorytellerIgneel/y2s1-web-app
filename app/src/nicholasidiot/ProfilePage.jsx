import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

//Mock user
const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: 'Guest',
    email: 'guest@gmail.com',
  });
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data for testing
  useEffect(() => {
    const mockGames = [
      {
        game_id: 105600,
        title: 'Terraria',
        img_src: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1666290860',
        desc: 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game.',
        rating: 'Overwhelmingly Positive',
        rating_num: 1057516,
        release_date: '2011-05-17',
        developer: 'Re-Logic',
        publisher: 'Re-Logic',
        price: 26.75,
      },
      {
        game_id: 814380,
        title: 'Sekiro™: Shadows Die Twice - GOTY Edition',
        img_src: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1721684463',
        desc: 'Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN.',
        rating: 'Overwhelmingly Positive',
        rating_num: 216477,
        release_date: '2019-03-22',
        developer: 'FromSoftware, Inc.',
        publisher: 'Activision',
        price: 285.00,
      },
      {
        game_id: 648800,
        title: 'Raft',
        img_src: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/648800/header.jpg?t=1725373838',
        desc: 'Raft™ throws you and your friends into an epic oceanic adventure!',
        rating: 'Very Positive',
        rating_num: 274865,
        release_date: '2022-06-21',
        developer: 'Redbeet Interactive',
        publisher: 'Axolot Games',
        price: 38.00,
      },
    ];

    setGames(mockGames);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/150" alt="Profile Avatar" />
        </div>
        <div className="profile-info">
          <h1>{userData.name}</h1>
          <p>{userData.email}</p>
        </div>
      </header>
      <section className="profile-games">
        <h2>Purchased Games</h2>
        {games.length === 0 ? (
          <p>No games purchased</p>
        ) : (
          <ul className="games-list">
            {games.map((game) => (
              <li key={game.game_id} className="game-item">
                <img src={game.img_src} alt={game.title} className="game-img" />
                <div className="game-details">
                  <h3>{game.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default ProfilePage;
