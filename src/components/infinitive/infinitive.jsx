import React from "react";
import "./Infinitive.scss";

const COLORS = [
  "#bbf7d0",
  "#99f6e4",
  "#bfdbfe",
  "#ddd6fe",
  "#f5d0fe",
  "#fed7aa",
  "#fee2e2",
];
const TAGS = [
  "Redux",
  "RestAPI",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "MongoDB",
  "UI/UX",
  "NodeJs",
  "animation",
  "Asp.Net",
  "Adobe-AE",
  "AdobeIL",
  "Adobe XD",
  "Adobe PS",
  "Adobe PR",
  "Adobe AU",
  "3D MAX",
];
const DURATION = 25000;
const ROWS = 3;
const TAGS_PER_ROW = 7;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

const Infinitive = () => {
  return (
    <div className="infinitiveContainer">
      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag text={tag} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
        <div className="fade" />
      </div>
    </div>
  );
};

export default Infinitive;
