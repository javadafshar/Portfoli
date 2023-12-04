import React from "react";
import TypoGraphy from "./TypoGraphy";
import back from "../../Asesist/1.png";
import "./back.scss";
const Back = () => {
  return (
    <div className="back">
      <TypoGraphy />
      <img src={back} alt="b" />
    </div>
  );
};

export default Back;
