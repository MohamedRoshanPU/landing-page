import logo from "./logo.png";
import menu from "./menu.svg";
import React, { useState } from "react";
import "./Header.css";
import close from "./close.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  const [link, setLinks] = useState(false);

  const openMenu = () => {
    setLinks(!link);
  };

  const closeMenu = () =>{
    setLinks(false)
  }

  return (
    <div>
      <div className="header-main-container">
        <div className="header-container">
          <Link to='/'><div className="company-logo">
            <img src={logo} alt="logo" />
          </div>
          </Link>
          <div className={link ? "links active" : "links"}>
            <Link to='features' className="links-li" onClick={closeMenu}>
              Features
            </Link>
            <Link to='projects' className="links-li" onClick={closeMenu}>
              Projects
            </Link>
            <Link to='team' className="links-li" onClick={closeMenu}>
              Team
            </Link>

            <Button />
          </div>
          <div className="menu">
            <img src={link ? close : menu} alt="menu" onClick={openMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
