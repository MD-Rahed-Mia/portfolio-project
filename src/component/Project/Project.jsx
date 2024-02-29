import React from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import ProjectBg from "./../../assets/project_bg.jpg";

export default function Project() {
  return (
    <div
      id="project"
      style={{
        backgroundImage: `url(${ProjectBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="project"
    >
      <h1>Projects & OverView</h1>
      <div className="project-cards">
        <ProjectCard
          title={"Shoptop.com"}
          sub_title={"front end | Ecommerce | Responsive"}
          id="project_1"
        />
        <ProjectCard
          title={"Linkdinclone.com"}
          sub_title={"clone website | social | Responsive"}
          id="project_2"
        />
        <ProjectCard
          title={"Shoptop.com"}
          sub_title={"front end || Ecommerce || Responsive"}
          id="project_1"
        />
      </div>
    </div>
  );
}
