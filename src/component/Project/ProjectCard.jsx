import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

export default function ProjectCard({ title, sub_title }) {
  return (
    <div className="project-card">
      <h1>{title}</h1>
      <p>{sub_title}</p>
      <p className="project-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae
        dignissimos architecto dolores vero, magni neque eligendi reiciendis
        laudantium repellendus.
      </p>

      <div className="project-view">
        <ul>
          <li>
            <FaGithub />
            <p>github</p>
          </li>
          <li>
            <MdLiveTv />
            <p>go live</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
