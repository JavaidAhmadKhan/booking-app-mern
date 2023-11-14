import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="py-4 px-8 flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
