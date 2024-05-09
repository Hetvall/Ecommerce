import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 345px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
