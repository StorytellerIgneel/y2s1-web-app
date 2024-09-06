import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "./frontend/pages/StorePage";
import CartPage from "./frontend/pages/CartPage";
import OAuth from "./backend/OAuth";
import ProductPage from "./frontend/pages/ProductPage";
import Layout from "./frontend/include/Layout";
// import Home from "./frontend/include/Home";
import { CartProvider } from "./frontend/Cart/CartContext";
import SearchBar from "./frontend/include/SearchBar";
import PaymentPage from "./frontend/pages/PaymentPage";
import "./index.css";

function App() {
  return (
    <div>
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* <Route index element={<Home />} /> */}
                <Route path="/store" element={<StorePage />} />
                <Route path="/store/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                {/* for testing */}
                {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
                <Route path="/searchGame" element={<SearchBar />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Route>
              {/* <Route path="/" element={<LoginPage/>} /> */}
              <Route path="/OAuth" element={<OAuth />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
