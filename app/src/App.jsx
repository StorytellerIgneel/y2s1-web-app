import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./frontend/pages/CartPage";
import NavBar from "./frontend/include/NavBar";
import WishlistPage from "./frontend/pages/WishlistPage";
import Store from "./frontend/Store/Store";
import OAuth from "./backend/OAuth";
import LoginPage from "./frontend/pages/LoginPage";
import PaymentPage from "./frontend/pages/PaymentPage";
import SearchGame from "./backend/php/searchGame";
// import "./index.css";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/OAuth" element={<OAuth />}/>
            <Route path="/store" element ={<Store />} />
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path="/wishlist" element={<WishlistPage />} /> */}
            {/* for testing */}
            <Route path="/searchGame" element={<SearchGame />} />
            <Route path="/payment" element={<PaymentPage />} />
            {/* <Route path="/paymentstatus" element={<PaymentStatus/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
