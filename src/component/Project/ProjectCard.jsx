import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa";

import { IoIosLink } from "react-icons/io";

export default function ProjectCard({
  title_img,
  live,
  tech,
  title,
  subTitle,
}) {
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={title_img} alt="" />

        <div className="project-card-img-overlay">
          <div>
            <a href={live} target="_blank">
              <IoIosLink />
            </a>
          </div>
        </div>
      </div>
      <div className="project-detail">
        <div className="project-detail-top">
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <div className="project-detail-tech">
          <ul>
            {tech &&
              tech.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
