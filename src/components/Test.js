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

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div>{showLogo && <img className="logo" src={logo} alt="Logo" />}</div>
        <div className="navbar-buttons">
          <Link onClick={() => handleScrollTo("first")}>FIRST</Link>
          <Link onClick={() => handleScrollTo("second")}>SECOND</Link>
          <Link onClick={() => handleScrollTo("third")}>THIRD</Link>
          <Link onClick={() => handleScrollTo("fourth")}>FOURTH</Link>
          <Link onClick={() => handleScrollTo("fifth")}>FIFTH</Link>
          <Link onClick={() => handleScrollTo("sixth")}>SIXTH</Link>
        </div>
      </nav>
      <div id="first" style={{ height: "50rem", background: "blue"}} >
        When click on FIRST page start from here
      </div>
      <div id="second" style={{ height: "50rem", background: "yellow" }}>
        When click on SECOND page start from here
      </div>
      <div id="third" style={{ height: "50rem", background: "pink" }}>
        When click on THIRD page start from here
      </div>
      <div id="fourth" style={{ height: "50rem", background: "black" }}>
        When click on FOURTH page start from here
      </div>
      <div id="fifth" style={{ height: "50rem", background: "yellow" }}>
        When click on FIFTH page start from here
      </div>
      <div id="sixth" style={{ height: "50rem", background: "blue" }}>
        When click on SIXED page start from here
      </div>
    </div>
  );
};

export default Test;
