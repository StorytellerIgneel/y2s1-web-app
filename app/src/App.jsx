import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./frontend/pages/CartPage";
import NavBar from "./frontend/include/NavBar";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element="" />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
