import "./Store.css";

import { useEffect, useState } from "react";

import DropdownCart from "./DropdownCart.tsx";

import GodOfWar from "./resource/GodOfWar.jpg";
import EldenRing from "./resource/EldenRing.jpg";
import Wukong from "./resource/Wukong.jpg";
import BaldursGate3 from "./resource/BaldursGate3.jpg";
import Subnautica from "./resource/Subnautica.jpg";

// import Logo from "./resource/GNS_Horizontal2_Black.svg";

function Store() {
  const [games, setGames] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await fetch(
          "http://localhost/y2s1-web-app/app/src/backend/php/get_game.php",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGames(data);
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
    <div className="body">
      <div className="sidebar">
        <img src={Logo} alt="GameNonStop-Logo" width="150" height="70" />
        <li> Action Game</li>
        <li> Action Game</li>
        <li> Action Game</li>
        <li> Action Game</li>
        <li> Action Game</li>
        <li> Action Game</li>
        <li> Action Game</li>
      </div>

      <div className="navbar">
        <h1>NavBar </h1>
      </div>
      <h1>GameNonStop Store</h1>
      <h4>3D carousel coming soon</h4>
      <div className="frame">
        {/* God of war */}
        <div className="box">
          <div className="image">
            <img src={GodOfWar} alt="God Of War" width="200" height="300" />
          </div>
          <div className="Title">
            <h2>God Of War</h2>
          </div>
          <div className="Description">
            <p>
              His vengeance against the Gods of Olympus years behind him, Kratos
              now lives as a man in the realm of Norse Gods and monsters. It is
              in this harsh, unforgiving world that he must fight to survive…
              and teach his son to do the same.
            </p>
          </div>
          <div className="Price">
            <h3>Price: RM209.00</h3>
          </div>
          {/* <div className="AddToWishlistButton">
                    <button>Add to wishlist</button>
                </div>
                <div className="AddToCartButton">
                    <Icon.Cart />
                    <button>Add to cart</button>
                </div> */}

          <div className="fa">
            <DropdownCart />
          </div>

          {/* add dropdown menu with a shopping cart icon */}
          {/* dropdown menu has add to wishlist button and add to cart button */}
          {/* <div className="dropdown">
                    <button onClick={enable}>
                        <img src={ShoppingCart} alt="Shopping Cart" width="30" height="30" />
                    </button>
                </div> */}
        </div>

        {/* Elden Ring */}
        <div className="box">
          <div className="image">
            <img src={EldenRing} alt="Elden Ring" width="200" height="300" />
          </div>
          <div className="Title">
            <h2>Elden Ring</h2>
          </div>
          <div className="Description">
            <p>
              THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by
              grace to brandish the power of the Elden Ring and become an Elden
              Lord in the Lands Between.
            </p>
          </div>
          <div className="Price">
            <h3>Price: RM199.00</h3>
          </div>
          {/* <div className="AddToWishlistButton">
                    <button>Add to wishlist</button>
                </div>
                <div className="AddToCartButton">
                    <button>Add to cart</button>
                </div> */}
          <div className="fa">
            <DropdownCart />
          </div>
        </div>

        {/* Black Myth:Wukong */}
        <div className="box">
          <div className="image">
            <img
              src={Wukong}
              alt="Black Myth: Wukong"
              width="200"
              height="300"
            />
          </div>
          <div className="Title">
            <h2>Black Myth: Wukong</h2>
          </div>
          <div className="Description">
            <p>
              Black Myth: Wukong is an action RPG rooted in Chinese mythology.
              You shall set out as the Destined One to venture into the
              challenges and marvels ahead, to uncover the obscured truth
              beneath the veil of a glorious legend from the past.
            </p>
          </div>
          <div className="Price">
            <h3>Price: RM219.00</h3>
          </div>
          {/* <div className="AddToWishlistButton">
                    <button>Add to wishlist</button>
                </div>
                <div className="AddToCartButton">
                    <button>Add to cart</button>
                </div> */}
          <div className="fa">
            <DropdownCart />
          </div>
        </div>

        {/* Baldur's Gate 3 */}
        <div className="box">
          <div className="image">
            <img
              src={BaldursGate3}
              alt="Baldur's Gate 3"
              width="200"
              height="300"
            />
          </div>
          <div className="Title">
            <h2>Baldur's Gate 3</h2>
          </div>
          <div className="Description">
            <p>
              Baldur’s Gate 3 is a story-rich, party-based RPG set in the
              universe of Dungeons & Dragons, where your choices shape a tale of
              fellowship and betrayal, survival and sacrifice, and the lure of
              absolute power.
            </p>
          </div>
          <div className="Price">
            <h3>Price: RM219.00</h3>
          </div>
          {/* <div className="AddToWishlistButton">
                    <button>Add to wishlist</button>
                </div>
                <div className="AddToCartButton">
                    <button>Add to cart</button>
                </div> */}
          <div className="fa">
            <DropdownCart />
          </div>
        </div>

        {/* Subnautica */}
        <div className="box">
          <div className="image">
            <img src={Subnautica} alt="Subnautica" width="200" height="300" />
          </div>
          <div className="Title">
            <h2>Subnautica</h2>
          </div>
          <div className="Description">
            <p>
              Descend into the depths of an alien underwater world filled with
              wonder and peril. Craft equipment, pilot submarines and out-smart
              wildlife to explore lush coral reefs, volcanoes, cave systems, and
              more - all while trying to survive.
            </p>
          </div>
          <div className="Price">
            <h3>Price: RM72.00</h3>
          </div>
          {/* <div className="AddToWishlistButton">
                    <button>Add to wishlist</button>
                </div>
                <div className="AddToCartButton">
                    <button>Add to cart</button>
                </div> */}
          <div className="fa">
            <DropdownCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
