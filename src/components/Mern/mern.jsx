import React from "react";
import mern from "../../Asesist/infor.png";
import "./mern.scss";

const Mern = () => {
  return (
    <div className="mernlogo">
      <div className="circle"></div>
      <img src={mern} alt="mernLogo" />
    </div>
  );
};

export default Mern;
