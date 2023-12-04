import React from "react";
import "./AboutMe2.scss";
import Nav from "../../components/Nav/nav";
import Topimg from "../../components/background/topimg";
import critclimg from "../../Asesist/circles.png";
import Avatar from "../../components/Avatar/avatar";
import Header from "../../components/header/header";
import Typed2 from "../../components/tayped2/typed2";

const AboutMe2 = () => {
  return (
    <>
      <Nav />
      <Topimg className="topimg " />
      <Header /> <Typed2 />
      <div className="aboutemecontainer">
        {" "}
        <div className="avatard">{<Avatar />}</div>
        <img src={critclimg} alt="circleimage" className="circle" />
      </div>
    </>
  );
};

export default AboutMe2;
