import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaCode } from "react-icons/fa";

export default function ProjectCard({ title, sub_title, id }) {
  return (
    <div className="project-card">
      <h1>{title}</h1>
      <p>{sub_title}</p>
      <p className="project-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae
        dignissimos architecto dolores vero, magni neque eligendi reiciendis
        laudantium repellendus.
      </p>

      <div className="project-image">
        <ul>
          <li>
            <img
              src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div className="project-view">
        <ul>
          <li>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <p>github</p>
          </li>
          <li>
            <MdLiveTv />
            <p>go live</p>
          </li>
        </ul>
      </div>

      <div className="veiw_project">
        <a href={`/project/${id}`}>
          <FaCode />
        </a>
      </div>
    </div>
  );
}
