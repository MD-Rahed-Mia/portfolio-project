import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "./Project.scss";
import { useParams } from "react-router-dom";
import dataSet from "../../dataset/dataset";
import Description from "../../component/ProjectComponent/Description";
import Image from "../../component/ProjectComponent/Image";

export default function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  // console.log(projectId);
  useEffect(() => {
    setProject(dataSet[projectId]);
  }, [projectId]);
  return (
    <div>
      <Navbar />

      {console.log(dataSet[projectId])}
      <div className="project_Page">
        <div>
          <Image projectImg={project && project.projectImg} />
        </div>
        <div className="project_Description">
          <Description description={project && project} name={projectId} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
