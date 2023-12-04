import React from "react";
import Coverflow from "react-coverflow";
import imga from "../../Asesist/im1.webp";
import img2 from "../../Asesist/im2.jpg";
import img3 from "../../Asesist/im3.jpg";
import img4 from "../../Asesist/1.png";
import "./slider.scss";

const Slider = () => {
  const fn = () => {
    /* do what you want */
  };

  return (
    <div className="sliderContainer">
      <Coverflow
        width={1024}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={true}
        media={{
          "@media (max-width: 900px)": {
            width: "100%",
            height: "600px",
          },
          "@media (min-width: 900px)": {
            width: "100%",
            height: "600px",
          },
        }}
        className="coverflow"
      >
        <div onClick={fn} onKeyDown={fn} role="menuitem" tabIndex="0"></div>
        <img
          src={imga}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src={img2}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src={img3}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src={imga}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
          title="Title for Image 1"
        />

        <img
          src={img4}
          alt="Javad Afshar"
          data-action="http://andyyou.github.io/react-coverflow/"
          title="Title for Image 2"
        />
        <img
          src={imga}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src={imga}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src={imga}
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
      </Coverflow>
    </div>
  );
};

export default Slider;
