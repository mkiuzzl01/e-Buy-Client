import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
     <div className="max-w-7xl m-auto">
     <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-246px)]">
        <Outlet></Outlet>
      </main>
     </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
