import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNabar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNabar(true);
    } else {
      setNabar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <nav className={navbar ? "navbar-active" : "navbar"}>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/LevyCalculator">
                Levy Calculator
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/login">
                Login
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-links" to="/SignUp">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
