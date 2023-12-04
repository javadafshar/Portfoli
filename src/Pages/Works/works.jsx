import React from "react";
import Nav from "../../components/Nav/nav";
//import { Slide } from "@material-ui/core";
import SliderScrol from "../../components/SliderScrol/SliderScrol";
import Header from "../../components/header/header";
//import Lamp from "../../components/lamp/lamp";
import lamp from "../../Asesist/bulb.png";
import "./Work.scss";

const Works = () => {
  return (
    <>
      <div className="workContainer">
        <Header />
        <Nav />

        <h2>Sample Work</h2>

        <SliderScrol />
        {/*  <div className="lamp-container"> */}
        <img src={lamp} className="lamp" alt="lamp" />
        {/*   </div> */}
      </div>
    </>
  );
};

export default Works;
