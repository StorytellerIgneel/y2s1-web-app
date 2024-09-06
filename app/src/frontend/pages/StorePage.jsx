import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        console.log(response.data); // Log the response to see the structure
        setGames(response.data); // Set the fetched data to games state
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading games: {error.message}</p>;

  return (
    <div>
      <h1>Store</h1>
      <ul className="product-list">
        <div className="flex item-stretch flex-row flex-wrap justify-between">
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
        </div>
      </ul>
    </div>
  );
}

function ProductCard({ slug, title, imgSrc, price }) {
  console.log(slug)
  return (
      <div className="rounded-xl bg-gray-200 m-3 p-3 shadow-sm hover:bg-red-100 hover:scale-105 max-w-xs h-auto ">
        <Link to={`/store/${slug}`}> 
          <img className="h-40 rounded-md object-scale-down" src={imgSrc} alt={title} />
        </Link>
        <Link to={`/store/${slug}`}> 
          <p className="font-bold text-lg py-2">{title}</p>
        </Link>
          <p>{parseFloat(price) === 0.00 ? "FREE" : `RM ${price}`}</p>
      </div>
  );
}

export default Store;