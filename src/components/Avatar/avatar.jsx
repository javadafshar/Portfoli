import React from "react";

//import motion from "framer-motion/dist/framer-motion";
import { motion } from "framer-motion";
import "./avatar.scss";
import myimage from "../../Asesist/my2.png";

const Avatar = () => {
  return (
    <div className="avatarContainer">
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        src={myimage}
        alt="myimage"
        className="avatar"
      />
    </div>
  );
};

export default Avatar;
