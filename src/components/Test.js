// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/infinia.avif";

const Test = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="navbar">
      <div>{showLogo && <img className="logo" src={logo} alt="Logo" />}</div>
      <div className="navbar-buttons">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Test;
