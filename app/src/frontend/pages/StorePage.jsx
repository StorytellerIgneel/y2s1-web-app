import "../Store/Store.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Store/ProductCard"; // Make sure ProductCard is imported correctly

function Store() {
  const [games, setGames] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await axios.get(
          "http://localhost/y2s1-web-app/app/src/backend/php/get_game.php",
        );
        setGames(response.data); // Set the fetched data to games state
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  console.log(games);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading games: {error.message}</p>;

  return (
    <div>
      <h1>Store</h1>
      <ul className="product-list">
        {games.map((game) => (
          <li key={game.id}>
            <ProductCard
              slug={game.id}
              title={game.title}
              imgSrc={game.img_src}
              price={game.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Store;
