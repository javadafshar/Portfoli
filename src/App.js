import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/home.jsx";
import AboutMe from "./Pages/aboutme/aboutme.jsx";
import Transition from "./components/transition/transition.jsx";
import AudioPlayer from "./components/audioplayer/audioplayer.jsx";
import Works from "./Pages/Works/works.jsx";
import AboutMe2 from "./Pages/aboutme/AboutMe2.jsx";
import Contact from "./Pages/contact/contact.jsx";
import Testimonialp from "./Pages/Testimonial/Testimonialp.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </Router>
    </div>
  );
};

const AppContent = () => {
  return (
    <AnimatePresence mode="wait">
      <AudioPlayer />
      <Routes>
        <Route
          path="/"
          element={<HomeWithTransition key="homeWithTransition" />}
        />
        <Route
          path="/aboutme"
          element={<AboutMeWithTransition key="aboutMeWithTransition" />}
        />
        <Route
          path="/works"
          element={<WorksWithTransition key="worksWithTransition" />}
        />
        <Route
          path="/aboutme2"
          element={<About2MeWithTransition key="about2MeWithTransition" />}
        />{" "}
        <Route path="/Contact" element={<ContactC key="ContactC" />} />
        <Route
          path="/Testimonial"
          element={
            <TestimonialWithTransition key="testimonialWithTransition" />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const HomeWithTransition = () => {
  return (
    <>
      <Transition isVisible={true} />
      <Home />
    </>
  );
};

const TestimonialWithTransition = () => {
  return (
    <>
      <Transition isVisible={true} />
      <Testimonialp />
    </>
  );
};

const WorksWithTransition = () => {
  return (
    <>
      <Transition isVisible={true} />
      <Works />
    </>
  );
};

const AboutMeWithTransition = () => {
  return (
    <>
      <Transition isVisible={true} />
      <AboutMe />
    </>
  );
};

const About2MeWithTransition = () => {
  return (
    <>
      <Transition isVisible={true} />
      <AboutMe2 />
    </>
  );
};
const ContactC = () => {
  return (
    <>
      <Transition isVisible={true} />
      <Contact />
    </>
  );
};

export default App;
