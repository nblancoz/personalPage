import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <span id="Home"><a href="#">Home</a></span>
      <span id="About"><a href="#About">About</a></span>
      <span id="Bio"><a href="#Biography">Biography</a></span>
      <span id="Port"><a href="#Portfolio">Portfolio</a></span>
    </div>
  );
};

export default Header;
