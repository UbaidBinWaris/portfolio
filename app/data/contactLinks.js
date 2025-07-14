// contactLinks.js
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

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
    url: "https://www.linkedin.com/in/ubaid-bin-waris-441942284",
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
    url: "https://portfolio-beta-hazel.vercel.app/",
    icon: <FaGlobe />,
  },
];


export default contactLinks;
