import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#2E4F4F] text-white p-4">
      <div className="max-w-7xl m-auto">
        <h1 className="text-4xl">e-Buy</h1>
        <div className="space-x-4">
          <Link to='/'>Home</Link>
          <Link to='/Shop'>Shop</Link>
          <Link to='/Cart'>Cart</Link>
        </div>
      <hr className="w-full"/>
        <p>Copyright © 2024 - All right reserved by e-Buy Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
