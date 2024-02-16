import React from "react";
import ContactBg from "./../../assets/aboutBg.jpg";
import "./ContactMe.scss";
import { FiSend } from "react-icons/fi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

export default function ContactMe() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(${ContactBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "50vh",
        color: "white",
        padding: "10%",
      }}
      className="contact-me"
    >
      <div>
        <h1>Contact Me</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@email.com"
            />
          </div>
          <div>
            <label htmlFor="number">Number</label>
            <input
              type="number"
              name="number"
              id="number"
              placeholder="01234567890"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="your message here..."
            ></textarea>
          </div>
          <div className="submit-btn">
            <button type="submit">
              send <FiSend />
            </button>
          </div>
        </form>
      </div>

      <div className="social-media">
        <h1>Social Media</h1>
        <ul>
          <li>
            <a
              href="http://facebook.com/mdrahed24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
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
          <li>
            <a
              href="https://www.linkedin.com/in/md-rahed-29b63a284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="http://wa.me/08801611891107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
        <div className="contact-details">
          <a href="mailto:mdrahed321@gmail.com">
            <IoMailSharp /> mdrahed321@gmail.com
          </a>
          <a href="tel:08801575088264">
            <MdOutlinePhone /> 088 01575-088264
          </a>
        </div>
      </div>
    </div>
  );
}
