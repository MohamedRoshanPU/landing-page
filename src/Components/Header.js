import logo from "./logo.png";
import menu from "./menu.svg";
import React, { useState } from "react";
import "./Header.css";
import close from "./close.svg";
import Button from "./Button";

function Header() {
  const [link, setLinks] = useState(false);

  const openMenu = () => {
    setLinks(!link);
  };

  return (
    <div>
      <div className="header-main-container">
        <div className="header-container">
          <div className="company-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={link ? "links active" : "links"}>
            <li>Features</li>
            <li>Projects</li>
            <li>Contact us</li>
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
