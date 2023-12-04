import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNetworkWired,
  FaServer,
  FaWindows,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiSpringsecurity,
} from "react-icons/si";

import { Gi3DMeeple, GiAutoRepair } from "react-icons/gi";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiMongodb />,
          <SiExpress />,
          <FaReact />,
          <SiNodedotjs />,
          <SiNextdotjs />,
          <SiCsharp />,
          <SiMicrosoftsqlserver />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <SiAdobephotoshop />,
          <SiAdobeillustrator />,

          <SiAdobexd />,
          <FaFigma />,
        ],
      },
      {
        title: "Video Editing & Motion Graphic",
        icons: [
          <SiAdobepremierepro />,
          <SiAdobeaftereffects />,

          <SiAdobeaudition />,
          <div style={{ display: "flex" }}>
            {" "}
            <Gi3DMeeple />
            <p style={{ fontSize: "9px" }}> 3DMAX</p>
          </div>,
        ],
      },
      {
        title: "Network And Server",
        icons: [
          <FaServer />,
          <GiAutoRepair />,

          <SiSpringsecurity />,
          <div style={{ display: "flex" }}>
            {" "}
            <FaWindows />
            <p style={{ fontSize: "9px" }}> Server</p>
          </div>,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Tamadon TV",
        stage: "2008 - 2012",
      },
      {
        title: "UX/UI Designer - TaraTech Company",
        stage: "2013 - 2016",
      },
      {
        title: "IT Manager & fullstack-Developer - Tamadon TV",
        stage: "2016 - 2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BAC Computer-science University Ferdowsi",
        stage: "2014",
      },
      {
        title: "Certified Graphic Designer 2D + 3D  - Ava Institute",
        stage: "2007",
      },
      {
        title: "Certified Video  Editor - - Ava Institut",
        stage: "2007",
      },
    ],
  },
  {
    title: "Achievement",
    info: [
      {
        title:
          "Design LiveBroudCast App and Execution for Live BroadCasting Over TCP and UDP - TamadonTV",
        stage: "2021",
      },
      {
        title:
          "Design Newsroom App and Execution for News Production Automation - TamadonTV",
        stage: "2020 - 2021",
      },
      {
        title:
          "Cooperation in the implementation of water meter management AP for HiTech ",
        stage: "2019 - 2021",
      },
    ],
  },
];

export default aboutData;
