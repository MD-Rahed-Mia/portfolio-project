import React, { useRef } from "react";
import "./Experts.scss";
import { FaLaptopCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { MdOutlineFilterFrames } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { CiMobile1 } from "react-icons/ci";
import { FaGit } from "react-icons/fa";
import { VscDebug } from "react-icons/vsc";
import { useInView } from "framer-motion";
import AnimationFactory from "../../factory/anymation";

export default function Experts() {
  const ref = useRef(null);
  const isView = useInView(ref, { once: false });

  return (
    <div className="expertise">
      <h1>My Expertise</h1>
      <div className="expert-cards">
        <AnimationFactory dir={"right"} dirValue={"100px"}>
          <div className="expert-card">
            <h1>
              <FaLaptopCode /> Key Language
            </h1>
            <ul>
              <li>
                <FaHtml5 />
                HTML
              </li>
              <li>
                <FaCss3 />
                CSS
              </li>
              <li>
                <IoLogoJavascript />
                JavaScript
              </li>
            </ul>
          </div>
        </AnimationFactory>

        <div className="expert-card">
          <h1>
            <MdOutlineFilterFrames /> FrameWork
          </h1>
          <ul>
            <li>
              <FaReact />
              React
            </li>
            <li>
              <FaBootstrap />
              Bootstrap
            </li>
            <li>
              <SiTailwindcss />
              TailWind
            </li>
          </ul>
        </div>

        <AnimationFactory dir={"left"} dirValue={"100px"}>
          <div className="expert-card">
            <h1>
              <MdOutlineFilterFrames /> Development
            </h1>
            <ul>
              <li>
                <CiMobile1 />
                Responsive Design
              </li>
              <li>
                <FaGit />
                Git & Version Control
              </li>
              <li>
                <VscDebug />
                Testing & Debugging
              </li>
            </ul>
          </div>
        </AnimationFactory>
      </div>
    </div>
  );
}
