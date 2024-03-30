import React, { useRef } from "react";
import "./Hero.scss";
import HeroBg from "./../../assets/hero-bg.jpg";
import { motion, useInView } from "framer-motion";
import AnimationFactory from "../../factory/anymation";
import { BiSolidFileDoc } from "react-icons/bi";

export default function Hero() {
  return (
    <>
      <div
        id="about"
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0, 0.2)),url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimationFactory dir={"right"} dirValue={"200px"}>
          <div>
            <h1>Front End Developer</h1>
            <p>
              I am very dedicated developer who <br /> create user friendly web
              application based on JavaScript & React.
            </p>
            <button className="resume-btn">
              resume <BiSolidFileDoc />
            </button>
          </div>
        </AnimationFactory>
      </div>
    </>
  );
}
