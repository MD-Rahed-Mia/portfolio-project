import React from "react";
import "./Project.scss";
import ProjectCard from "./ProjectCard";
import ProjectBg from "./../../assets/project_bg.jpg";

export default function Project() {
  return (
    <div
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
        />
        <ProjectCard
          title={"Linkdinclone.com"}
          sub_title={"clone website | social | Responsive"}
        />
        <ProjectCard
          title={"Shoptop.com"}
          sub_title={"front end || Ecommerce || Responsive"}
        />
      </div>
    </div>
  );
}
