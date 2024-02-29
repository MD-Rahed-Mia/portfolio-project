import React, { useEffect, useState } from "react";
import "./Style.scss";

export default function Image({ projectImg }) {
  const [titleImage, setTitleImage] = useState(null);
  useEffect(() => {
    if (projectImg != null) {
      setTitleImage(projectImg[0]);
    }
  }, [projectImg]);

  function handleTitleImage(img) {
    switch (img) {
      case "img0":
        setTitleImage(projectImg[0]);
        break;
      case "img1":
        setTitleImage(projectImg[1]);
        break;
      case "img2":
        setTitleImage(projectImg[2]);
        break;
      case "img3":
        setTitleImage(projectImg[3]);
        break;

      default:
        break;
    }
    // if (img == "img1") {
    //   setTitleImage(projectImg[1]);
    // }
  }
  return (
    <>
      {projectImg && (
        <div className="project_img">
          <div className="poster">
            <img src={titleImage} alt="" />
          </div>
          <div className="sub_poster">
            <img
              src={projectImg[0]}
              alt=""
              onClick={() => handleTitleImage("img0")}
            />
            <img
              src={projectImg[1]}
              alt=""
              onClick={() => handleTitleImage("img1")}
            />
            <img
              src={projectImg[2]}
              alt=""
              onClick={() => handleTitleImage("img2")}
            />
            <img
              src={projectImg[3]}
              alt=""
              onClick={() => handleTitleImage("img3")}
            />
          </div>
        </div>
      )}
    </>
  );
}
