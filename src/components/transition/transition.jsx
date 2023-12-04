import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./transition.scss";

const Transition = ({ isVisible }) => {
  const transitionVariant = {
    initial: {
      width: "100vw",
      x: isVisible ? "0%" : "100%",
    },
    animate: {
      width: "0%",
      x: isVisible ? "100%" : "0%",
    },
    exit: {
      width: "100vw",
      x: isVisible ? "0%" : "0%",
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <>
          <motion.div
            id="slide1"
            className="slide fixed top-0 left-0 w-screen h-screen z-30 bg-[#0d5fd4]  drop-shadow-2xl stroke-1 border-s-gray"
            variants={transitionVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            id="slide2"
            className="slide fixed top-0 left-0 w-screen h-screen z-20 bg-[#0b55bd] drop-shadow-2xl border-s-gray "
            variants={transitionVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            id="slide3"
            className="slide fixed top-0 left-0 w-screen h-screen z-10 bg-[#093c85]  drop-shadow-2xl border-s-gray"
            variants={transitionVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Transition;
