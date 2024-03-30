import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectBg from "./../../assets/project_bg.jpg";
import "./Project.scss";
import SevenWireless from "./../../assets/Project_image/seven_wireless.png";
import WebTools from "./../../assets/Project_image/webtools_c.png";

const webToolTech = ["HTML", "CSS", "JavaScript", "Node.js"];
const sevenWirelessTech = ["HTML", "CSS", "SCSS", "JavaScript", "React.js"];

export default function Project() {
  return (
    <div
      className="project_section"
      style={{
        backgroundImage: `url(${ProjectBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="project"
    >
      <h1>Project</h1>
      <div className="project-cards">
        <ProjectCard
          title_img={SevenWireless}
          title="Seven wireless"
          subTitle="Premium quality wireless headphone market place. Where you can get
            Premium quality headphone in wholesale price."
          live={"https://seven-wireless-tay1.vercel.app/"}
          tech={sevenWirelessTech}
        />

        <ProjectCard
          title_img={WebTools}
          title={"Webtool"}
          subTitle={
            "Web related tools. Where you can find a lot of tools that usually help you."
          }
          live="https://webtool-project.vercel.app/"
          tech={webToolTech}
        />
      </div>
    </div>
  );
}
