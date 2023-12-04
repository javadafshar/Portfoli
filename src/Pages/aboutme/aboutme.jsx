import React from "react";
import Nav from "../../components/Nav/nav";
//import Skill from "../../components/cv Components/skill/skill";
import Topimg from "../../components/background/topimg";
import "./aboutme.scss";
import Rotate from "../../components/rotate-circle/rotate";
import Avatar from "../../components/Avatar/avatar";
import TypedComponent from "../../components/typed/Typed";
import Header from "../../components/header/header";
import Particular from "../../components/particular";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <Header />
      <Nav />
      <Rotate />
      <div className="avatar">
        <Avatar />
      </div>
      <TypedComponent />
      {/* <Slide /> */}
      {/* <RotatingCircles /> */}
      {/*  <Skill /> */}
      <Particular />
    </div>
  );
};

export default AboutMe;
