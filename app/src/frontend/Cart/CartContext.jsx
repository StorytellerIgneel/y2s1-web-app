import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCartContext = (game) => {
    // Check if the item is already in the cart
    const itemExists = cart.some(item => item.game_id === game.game_id);
    if (!itemExists) {
      setCart((prevCart) => [...prevCart, game]);
    }
  };

  const removeFromCartContext = (gameId) => {
    console.log("Removing from cart:", gameId);
    setCart((prevCart) => prevCart.filter((game) => game.game_id !== gameId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

    // Calculate total price of items in the cart
    const getTotalPrice = () => {
      return cart.reduce((total, game) => total + parseFloat(game.price), 0);
    };

  return (
    <CartContext.Provider
      value={{ cart, addToCartContext, removeFromCartContext, getTotalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
