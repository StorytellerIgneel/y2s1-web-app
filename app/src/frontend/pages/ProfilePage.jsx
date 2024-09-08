import { useState, useEffect, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserContext from "./LoginContext";
import "../css/profile-page.css";
import axios from "axios";

//Mock user
const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [purchases, setPurchases] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `http://localhost/y2s1-web-app/app/src/backend/php/get_purchase_history.php`,
        );
        setGames(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="profile-page">
        <header className="profile-header">
            {user? (<img src={user.picture} alt={user.name}/>) : (<FaUserCircle className="profile-placeholder"/>)}
          <div className="profile-info">
            <h1>{user? user.name : "Guest"}</h1>
            <p>{user? user.email : "No email"}</p>
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
                  <img
                    src={game.img_src}
                    alt={game.title}
                    className="game-img"
                  />
                  <div className="game-details">
                    <h3>{game.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
