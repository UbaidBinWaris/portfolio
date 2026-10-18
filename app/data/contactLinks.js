// contactLinks.js
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaDiscord } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

// `color` is each brand's official color, revealed on hover in Contact and the footer.
const contactLinks = [
  {
    id: 1,
    name: "GitHub",
    color: "#181717",
    url: "https://github.com/UbaidBinWaris",
    icon: <FaGithub />,
  },
  {
    id: 2,
    name: "LinkedIn",
    color: "#0A66C2",
    url: "https://www.linkedin.com/in/ubaidbinwaris",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "Email",
    color: "#EA4335",
    url: "mailto:ubaidwaris34@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 4,
    name: "Portfolio",
    color: "#0A0A0A",
    url: "https://ubaidbinwaris.com",
    icon: <FaGlobe />,
  },
  {
    id: 5,
    name: "Upwork",
    color: "#14A800",
    url: "https://www.upwork.com/freelancers/~01d2f557e6c01a0296",
    icon: <SiUpwork />,
  },
  {
    id: 6,
    name: "Fiverr",
    color: "#1DBF73",
    url: "https://www.fiverr.com/ubaidwaris655",
    icon: <SiFiverr />,
  },
  {
    id: 7,
    name: "Discord",
    color: "#5865F2",
    url: "https://discord.com/users/1194654569578373121",
    icon: <FaDiscord />,
  },
];


export default contactLinks;
