import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from './frontend/pages/CartPage';
import NavBar from "./frontend/include/NavBar";
import "./index.css";

function App() {
    return (
      <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/cart" element={CartPage} />
          </Routes>
          </BrowserRouter>
          <NavBar></NavBar>
      </div>
    );
  }

export default App