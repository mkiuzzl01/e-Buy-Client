import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
     <div className="max-w-7xl m-auto">
     <header className="sticky top-0 z-10">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-205px)]">
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
