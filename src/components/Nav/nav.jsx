// Nav.js
import React from "react";
import "./nav.scss";
import { Feedback, Home, Mail, Person } from "@material-ui/icons";
import { AutoAwesomeMosaic } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="navContainer"
    >
      <NavLink to="/" exact key="Home">
        <Home className="muiIcon" />
      </NavLink>
      <NavLink to="/AboutMe2" key="AboutMe">
        <Person className="muiIcon" />
      </NavLink>
      <NavLink to="/Works" key="Works">
        <AutoAwesomeMosaic className="muiIcon" />
      </NavLink>

      <NavLink to="/Testimonial" key="AboutMe2">
        <Feedback className="muiIcon" />
      </NavLink>

      <NavLink to="/Contact" key="YetAnotherRoute">
        <Mail className="muiIcon" />
      </NavLink>
    </motion.div>
  );
};

export default Nav;
