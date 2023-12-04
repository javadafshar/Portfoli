import React from "react";
import ReactTyped from "react-typed";
import "./typed.scss";
import DownloadButton from "../donloadCV/DownloadCV";

const TypedComponent = () => {
  return (
    <div className="typedContainers">
      {/*  <h1 className="intro">JAVAD AFSHAR</h1>{" "} */}
      <p className="type">
        <span>Transform Your Dreams </span>
        <span>into </span> <br />
        <span style={{ color: "#ff0037" }}> Stunning Design Reality</span>{" "}
        <span>.</span>
      </p>
      {/*  <h1 className="intro">Fullstack Developer </h1> */}
      <strong className="slider">
        <ReactTyped
          strings={[
            '<span style="color: red;">Front End Developer</span>',
            '<span style="color: rgba(0, 255, 255, 0.7)">Back End Developer</span>',
            '<span style="color: red;">Graphic Designer</span>',
          ]}
          typeSpeed={120}
          backDelay={3100}
          backSpeed={30}
          loop
          contentType="html"
        />
      </strong>
      <br />
      <br />
      <DownloadButton />
    </div>
  );
};

export default TypedComponent;
