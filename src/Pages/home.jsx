import React from "react";
import Topimg from "../components/background/topimg";
import Nav from "../components/Nav/nav";
import Header from "../components/header/header";
import Particular from "../components/particular";
import Background from "../components/background/background";
import Avatar from "../components/Avatar/avatar";
//import Mern from "../components/Mern/mern";
import TypedComponent from "../components/typed/Typed";

import "./home.scss";

//import Avatar3 from "../components/Avatar/avatar3";
//import Rotate from "../components/rotate-circle/rotate";
import Infinitive from "../components/infinitive/infinitive";
import TypoGraphy from "../components/TypoGraphy/TypoGraphy";
import Back from "../components/TypoGraphy/back";
import Sketch from "../components/TypoGraphy/TypoGraphy";
import CanvasSketch from "../components/TypoGraphy/TypoGraphy";

const Home = () => {
  return (
    /*  <CanvasSketch /> */

    <div className="homcontainer">
      <Topimg />
      <Header />
      <Nav />
      <TypedComponent className="typed" />
      <Avatar />
      <Background /> <Infinitive />
      <div className="particular">
        <Particular />
      </div>
    </div>
  );
};

export default Home;
