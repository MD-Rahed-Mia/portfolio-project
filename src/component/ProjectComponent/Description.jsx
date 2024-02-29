import React from "react";
import "./Style.scss";

export default function Description({ description }) {
  return (
    <>
      {description && (
        <div className="description">
          <div className="project_title">
            <h1>{description.title}</h1>
            <p>{description.subTitle}</p>
          </div>

          <div className="project_technologies">
            <h2>Technologies used in this Project.</h2>
            <ul>
              {description.technologies.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="project_working">
            <h1>What I have done?</h1>
            <p>{description.working}</p>
          </div>
        </div>
      )}
    </>
  );
}
