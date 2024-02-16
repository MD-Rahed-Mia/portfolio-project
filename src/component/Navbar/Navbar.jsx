import React, { useState } from "react";
import "./Navbar.scss";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
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
      <div className="menu-icon" onClick={handleMenu}>
        {isMenuActive ? <RxCross2 /> : <CiMenuFries />}
      </div>

      <div className={isMenuActive ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>about</li>
          <li>project</li>
          <li>contact</li>
          <li>blog</li>
          <li>
            <ul>
              <li>
                <a
                  href="http://www.facebook.com/mdrahed24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-rahed-29b63a284/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/MD-Rahed-Mia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
