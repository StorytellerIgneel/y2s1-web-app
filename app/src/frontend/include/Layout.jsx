import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div>
      <main>
        <NavBar />
        <div className="layout-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
