import React, { useState } from "react";
import "./Navbar.scss";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Logo from "./../../assets/logo.png";

export default function Navbar() {
  //
  const [isMenuActive, setIsMenuActive] = useState(false);

  function handleMenu() {
    setIsMenuActive(!isMenuActive);
    console.log(isMenuActive);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="menu-icon" onClick={() => setIsMenuActive(!isMenuActive)}>
        {isMenuActive ? <RxCross1 /> : <CiMenuFries />}
      </div>

      <div className={isMenuActive ? "menu-item active" : "menu-item"}>
        <ul>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#expertise">Skill</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
