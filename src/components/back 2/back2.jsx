import React, { useState, useEffect } from "react";

const RotatingCircles = () => {
  const [rotations, setRotations] = useState([]);
  const numCircles = 5;

  useEffect(() => {
    const initialRotations = [0, 0, 0, 0, 0];
    setRotations(initialRotations);

    const animationInterval = setInterval(() => {
      setRotations((prevRotations) =>
        prevRotations.map((rotation, index) => {
          const rotationSpeed = index + 1; // Speed increases with index
          const newRotation = rotation + rotationSpeed;
          return newRotation % 360; // Ensure rotation stays within 360 degrees
        })
      );
    }, 50); // Base interval

    // No need to return clearInterval here
  }, []); // Empty dependency array for one-time setup

  const containerStyle = {
    width: "400px",
    height: "400px",
    position: "relative",
    margin: "50px auto",
  };

  const circleStyles = [];
  const baseSize = 100;

  for (let i = 0; i < numCircles; i++) {
    const circleStyle = {
      width: `${baseSize + i * 20}px`,
      height: `${baseSize + i * 20}px`,
      borderRadius: "50%",
      border: "2px solid transparent", // Transparent stroke
      borderBottom: "2px solid blue", // Bottom stroke (25%)
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) rotate(${rotations[i]}deg)`, // Rotate each circle with its own rotation value
      transition: "transform 0.1s ease-in-out",
    };
    circleStyles.push(circleStyle);
  }

  return (
    <div>
      <div style={containerStyle}>
        {circleStyles.map((circleStyle, index) => (
          <div key={index} style={circleStyle}></div>
        ))}
      </div>
    </div>
  );
};

export default RotatingCircles;
