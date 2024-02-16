import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Hero from "../../component/Hero/Hero";
import Experts from "../../component/Experts/Experts";
import Project from "../../component/Project/Project";
import ContactMe from "../../component/ContactMe/ContactMe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experts />
      <Project />
      <ContactMe />
    </div>
  );
}
