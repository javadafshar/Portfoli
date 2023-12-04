import React from "react";
import "./topimg.scss";
import img1 from "../../Asesist/bg-explosion.png";

const topimg = () => {
  return (
    <>
      <div className="topimgContainer">
        <img src={img1} alt="gfg" className="img" />
      </div>
    </>
  );
};

export default topimg;
