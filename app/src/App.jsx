import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "./frontend/pages/StorePage";
import CartPage from "./frontend/pages/CartPage";
import WishlistPage from "./frontend/pages/WishlistPage";
import OAuth from "./backend/OAuth";
import LoginPage from "./frontend/pages/LoginPage";
import ProductPage from "./frontend/pages/ProductPage";
import Layout from "./frontend/include/Layout";
import Home from "./frontend/include/Home";
import SearchBar from "./frontend/include/SearchBar";

// import "./index.css";

function App() {
  return (
    <div>
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/store/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                {/* for testing */}
                {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
              </Route>
                <Route path="/searchGame" element={<SearchBar />} />
              {/* <Route path="/" element={<LoginPage/>} /> */}
              <Route path="/OAuth" element={<OAuth />} />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
