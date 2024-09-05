import { useEffect, createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from local storage
    const storedCart = localStorage.getItem('cart') || [];
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to local storage whenever cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCartContext = (game) => {
    // Check if the item is already in the cart
    const itemExists = cart.some(item => item.id === game.id);
    if (!itemExists) {
      setCart((prevCart) => [...prevCart, game]);
    }
  };

  const removeFromCartContext = (gameId) => {
    console.log("Removing from cart:", gameId);
    setCart((prevCart) => prevCart.filter((game) => game.id !== gameId));
  };

    // Calculate total price of items in the cart
    const getTotalPrice = () => {
      return cart.reduce((total, game) => total + parseFloat(game.price), 0);
    };

  return (
    <CartContext.Provider
      value={{ cart, addToCartContext, removeFromCartContext, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
