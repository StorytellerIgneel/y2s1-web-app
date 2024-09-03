import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./frontend/pages/CartPage";
import NavBar from "./frontend/include/NavBar";
// import LoginPage from "./frontend/pages/LoginPage";
import WishlistPage from "./frontend/pages/WishlistPage";
import OAuth from "./backend/OAuth";
import PaymentPage from "./frontend/pages/PaymentPage";
import Home from "./frontend/include/Home";
import "./index.css";

import Layout from "./frontend/include/Layout";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<LoginPage/>} /> */}
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
            
            {/* <Route path="/cart" element={<CartPage />} /> */}
            {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
            {/* This is a temporary path */}
            {/* <Route path="/payment" element={<PaymentPage />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
