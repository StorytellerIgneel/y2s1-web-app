import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams(); // Fetch the id from the URL
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(`http://localhost/y2s1-web-app/app/src/backend/php/get_game.php?id=${id}`);
        setGame(response.data); 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading game: {error.message}</p>;

  if (!game) return <p>No game found with id: {id}</p>;

  return (
    <div>
      <h1>{game.title}</h1>
      <img src={game.img_src} alt={game.title} />
      <p>{game.desc}</p>
      <p>Rating: {game.rating} ({game.rating_num})</p>
      <p>Release Date: {game.release_date}</p>
      <p>Developer: {game.developer}</p>
      <p>Publisher: {game.publisher}</p>
      <p>Price: RM {game.price}</p>
    </div>
  );
}

export default ProductPage;
