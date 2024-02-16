import React, { useRef } from "react";
import "./Hero.scss";
import HeroBg from "./../../assets/hero-bg.jpg";
import { motion, useInView } from "framer-motion";
import AnimationFactory from "../../factory/anymation";

export default function Hero() {
  return (
    <>
      <div
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
          </div>
        </AnimationFactory>
      </div>
    </>
  );
}
