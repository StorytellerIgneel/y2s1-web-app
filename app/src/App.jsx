import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "./frontend/pages/StorePage";
import CartPage from "./frontend/pages/CartPage";
import OAuth from "./backend/OAuth";
import ProductPage from "./frontend/pages/ProductPage";
import Layout from "./frontend/include/Layout";
import { CartProvider } from "./frontend/Cart/CartContext";
import MainPage from "./frontend/pages/MainPage";
import LoginPage from "./frontend/pages/LoginPage";
import "./index.css";
import { UserProvider } from "./frontend/pages/LoginContext";
import Email from "./frontend/Email/email"; // for testing

function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<MainPage />} />
                  <Route path="/store" element={<StorePage />} />
                  <Route path="/store/:game_id" element={<ProductPage />} />
                  <Route path="/support" element={<Email />} />
                  <Route path="/cart" element={<CartPage />} />
                  {/* for testing */}
                  {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
                </Route>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/OAuth" element={<OAuth />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
            </BrowserRouter>
          </CartProvider>
        </UserProvider>
    </div>
  );
}

export default App;