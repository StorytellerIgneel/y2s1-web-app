import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="layout-container">
          <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      
      </div>
  );
}

export default Layout;
