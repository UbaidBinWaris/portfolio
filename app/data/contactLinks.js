// contactLinks.js
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaDiscord } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

const contactLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/UbaidBinWaris",
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ubaidbinwaris",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:ubaidwaris34@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 4,
    name: "Portfolio",
    url: "https://uabidbinwaris.dev",
    icon: <FaGlobe />,
  },
  {
    id: 5,
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01d2f557e6c01a0296",
    icon: <SiUpwork />,
  },
  {
    id: 6,
    name: "Fiverr",
    url: "https://www.fiverr.com/ubaidwaris655",
    icon: <SiFiverr />,
  },
  {
    id: 7,
    name: "Discord",
    url: "https://discord.com/users/1194654569578373121",
    icon: <FaDiscord />,
  },
];


export default contactLinks;
