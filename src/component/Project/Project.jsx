import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectBg from './../../assets/project_bg.jpg';
import './Project.scss';
import SevenWireless from './../../assets/Project_image/seven_wireless.png';

export default function Project() {
  return (
    <div className='project_section' style={{ backgroundImage: `url(${ProjectBg})`, backgroundSize: "cover", backgroundPosition: "center" }} id='project'>

      <h1>Project</h1>
      <ProjectCard title_img={SevenWireless} />
    </div>
  )
}
