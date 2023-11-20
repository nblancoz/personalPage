import React from "react";
import "./Header.css"

const Header = () => {
  return (
    <div className="Header">
      <span id="Home"><a className="a-headers" href="#">Home</a></span>
      <span id="About"><a className="a-headers" href="#About">About</a></span>
      <span id="Bio"><a className="a-headers" href="#Biography">Biography</a></span>
      <span id="Port"><a className="a-headers" href="#Portfolio">Portfolio</a></span>
    </div>
  );
};

export default Header;
