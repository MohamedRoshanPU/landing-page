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

  const closeMenu = () =>{
    setLinks(false)
  }

  return (
    <div>
      <div className="header-main-container">
        <div className="header-container">
          <div className="company-logo">
            <img src={logo} alt="logo" />
          </div>
          
          <div className={link ? "links active" : "links"}>
            <li className="links-li" >
              Features
            </li>
            <li  className="links-li" >
              Projects
            </li>
            <li  className="links-li" >
              Team
            </li>

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
