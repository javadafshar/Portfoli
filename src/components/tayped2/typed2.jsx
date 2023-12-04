import React, { useState } from "react";
import "./typed2.scss";
import aboutData from "../AboutMeData/AbouteMe";

const Typed2 = () => {
  const [index, setIndex] = useState(0);

  const handleTitleClick = (titleIndex) => {
    setIndex(titleIndex);
  };

  return (
    <>
      <div className="Typed2Container">
        <div className="sec1">
          <p className="type">
            <span>Make your Dream a Reality</span>
            <br /> <span>With </span>
            <span style={{ color: "#ff0037" }}>Magnificent Design</span>{" "}
            <span>.</span>
          </p>
          <p className="worked">
            Over 10 years of experience in
            <span style={{ color: "rgba(0, 255, 255, 0.7)" }}>
              {" "}
              Graphic
            </span>{" "}
            (Still & Animation) &
            <span style={{ color: "rgba(0, 255, 255, 0.7)" }}>
              {" "}
              Front-End Developer
            </span>
            .<br /> More than 10 big applications Backend with{" "}
            <span style={{ color: "rgba(0, 255, 255, 0.7)" }}> NodeJs</span>.
          </p>
          <br /> <br /> <br />
          <div className="workCounter">
            <div className="sec">
              <span>10 </span>
              <br />
              <span>Years Experience Front-End</span>
            </div>
            <div className="sec">
              <span>5 </span>
              <br />
              <span>Years Experience Mern-Stack</span>
            </div>
            <div className="sec">
              <span>12 </span>
              <br />
              <span>Years Graphic Designer (Still & motion)</span>
            </div>{" "}
            <div className="sec">
              <span>Design</span>
              <br />
              <span>Live Broadcasting PTP Over TCP-IP </span>
            </div>
          </div>
        </div>{" "}
        <div className="sec2">
          <div className="Header">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  onClick={() => handleTitleClick(itemIndex)}
                  className={`title cursor-pointer capitalize ${
                    itemIndex === index ? "activet" : ""
                  }`}
                >
                  <span> {item.title}</span>
                  <i></i>
                </div>
              );
            })}
          </div>
          <br />
          <div className="data">
            {aboutData[index]?.info?.map((info, infoIndex) => {
              return (
                <div key={infoIndex} className="zer">
                  <div className="info">
                    <div className={`${infoIndex === 8 ? "hide " : "stage"}`}>
                      <div className="titleC">
                        <span className="ss"> {info.stage}</span>{" "}
                        {/*   <br
                          className={`${infoIndex === 9 ? "hide " : "stage"}`}
                        />{" "} */}
                        <span className="title"> {info.title} </span>
                        <span className="icon">
                          {Array.isArray(info.icons) ? (
                            info.icons.map((icon, iconIndex) => (
                              <span key={iconIndex}>{icon}</span>
                            ))
                          ) : (
                            <div>{info.icons}</div>
                          )}

                          <hr />
                        </span>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Typed2;
