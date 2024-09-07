import { useEffect, createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

    // const addToCartContext = (game) => {
    //   // Check if the item is already in the cart
    //   const itemExists = cart.some(item => item.game_id === game.game_id);
    //   if (!itemExists) {
    //     setCart((prevCart) => [...prevCart, game]);
    //   }
    // };

    // const removeFromCartContext = (gameId) => {
    //   console.log("Removing from cart:", gameId);
    //   setCart((prevCart) => prevCart.filter((game) => game.game_id !== gameId));
    // };

    useEffect(() => {
      console.log("detected")
      // Retrieve cart items from localStorage on component mount
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      console.log('Retrieved from localStorage:', storedCart); // Debug statemen
      setCart(storedCart);
    }, []);

    useEffect(() => {
      // Retrieve the current cart from localStorage
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    
      // Add new items to the cart
      const updatedCart = [...storedCart, ...cart];
      
      // Remove duplicates based on item.id (optional, if you want unique items)
      const uniqueCart = Array.from(new Set(updatedCart.map(item => item.game_id)))
        .map(id => updatedCart.find(item => item.game_id === id));
    
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(uniqueCart));
      console.log('Cart updated and saved to localStorage:', uniqueCart);
    }, [cart]);
    

    const addToCart = (item) => {
      setCart((prevCart) => [...prevCart, item]);
    };

    const removeFromCart = (itemId) => {
      setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    // Calculate total price of items in the cart
    const getTotalPrice = () => {
      return cart.reduce((total, game) => total + parseFloat(game.price), 0);
    };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;