import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./particular.scss";

const Particular = ({ isAvatarHovered }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = () => {};

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        style: {
          position: "absolute",
          zIndex: "-3",
          top: "0",
          right: "0",
          left: "auto",
          width: "50%",
        },
        fpsLimit: 30,
        particles: {
          number: {
            value: 60,
          },
          size: {
            value: 2,
          },
          color: {
            value: "#ff0000",
          },
          line_linked: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.6,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: !isAvatarHovered, // Disable hover effect when the avatar is hovered
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 180,
            },
          },
        },
      }}
    />
  );
};

export default Particular;
