import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link className="a-headers" to="/">Home</Link>
      <Link className="a-headers" to="/Biography">Biography</Link>
      <Link className="a-headers" to="/Portfolio">Portfolio</Link>
      <Link className="a-headers" to="/Contact">Contact</Link>
    </div>
  );
};

export default Header;
