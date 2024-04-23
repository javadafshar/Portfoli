import React from "react";
import "./header.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, LinkedIn, YouTube, WhatsApp } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="headercontainer">
      <div className="sec1h">
        <h5 className="javad">Javad </h5>
        <h5 className="Afshar"> Afshar</h5>
      </div>
      <div className="sec2h">
        <a
          href="https://www.facebook.com/javad.afshar.7"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <FacebookIcon />
        </a>

        <a
          className="Instagram"
          href="https://www.instagram.com/afsharjavad/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>

        <a
          className="Youtube"
          href="http://wa.me/033751272799"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsApp />
        </a>

        <a
          className="Linkdin"
          href="https://www.linkedin.com/in/javad-afshar-0a3692a1"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
};

export default Header;
