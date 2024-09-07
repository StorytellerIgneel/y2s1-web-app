import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user info from localStorage on component mount
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      // Save the logged-in user to localStorage
      localStorage.setItem('user', JSON.stringify(user));
      console.log('User logged in and saved to localStorage:', user);
    } else {
      // Clear the user from localStorage when logged out
      localStorage.removeItem('user');
    }
  }, [user]);

  // Function to handle user login
  const loginUser = (userInfo) => {
    setUser(userInfo);
  };

  // Function to handle user logout
  const logoutUser = () => {
    setUser(null);
    console.log("User logged out");
  };

  return (
    <UserContext.Provider
      value={{ user, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
