import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa";

import { IoIosLink } from "react-icons/io";

export default function ProjectCard({ title_img }) {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={title_img} alt="" />

        <div className="project-card-img-overlay">
          <div>
            <a href="https://seven-wireless-tay1.vercel.app/" target="_blank"><IoIosLink /></a>
          </div>
        </div>
      </div>
      <div className="project-detail">
        <div className="project-detail-top">
          <h2>Seven wireless</h2>
          <p>Premium quality wireless headphone market place. Where you can get <br />Premium quality headphone in wholesale price.</p>
        </div>
        <div className="project-detail-tech">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux.js</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
