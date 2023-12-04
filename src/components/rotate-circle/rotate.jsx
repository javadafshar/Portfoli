import React from "react";
import "./rotate.scss";
import reacticon from "../../Asesist/icons8-react-native-150.png";
import center from "../../Asesist/centrCircl.png";
import nodeicon from "../../Asesist/icons8-nodejs-144.png";
import emprespng from "../../Asesist/ExpresPNG.png";
import mongodbpng from "../../Asesist/mongodbpng.png";
import ReactPNg from "../../Asesist/ReactPNG.png";
import Nodpng from "../../Asesist/NodePNG.png";

const Rotate = () => {
  return (
    <div className="rotatecontainer">
      <div className="circleCenter">
        <p className="merntext">
          <span>M </span>
          <span>E </span>
          <span>R </span>
          <span>N </span>

          <span>S T A C K </span>
          <span>developer </span>
        </p>
      </div>
      <div className="RotateCircle RotateCircle1">
        <img src={mongodbpng} alt="mongodb" />
        {/*     <p className="Mongodb middle"> MongoDB</p> */}
      </div>
      <div className="RotateCircle RotateCircle2">
        <img src={emprespng} alt="REACT ICON" />
        {/*   <p className="Mongodb middle"> ExpressJS</p> */}
      </div>
      <div className="RotateCircle RotateCircle3">
        {" "}
        <img src={ReactPNg} alt="REACT ICON" />
        {/*   <p className="Mongodb middle"> ReactJS</p>{" "} */}
      </div>
      <div className="RotateCircle RotateCircle4">
        {" "}
        <img src={Nodpng} alt="REACT ICON" />
        {/*    <p className="Mongodb middle"> NodeJS</p> */}
      </div>
    </div>
  );
};

export default Rotate;
