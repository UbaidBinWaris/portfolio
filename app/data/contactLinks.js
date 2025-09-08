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
  {
    id: 5,
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~your-upwork-profile", // Replace with your actual Upwork profile URL
    icon: <SiUpwork />,
  },
  {
    id: 6,
    name: "Fiverr",
    url: "https://www.fiverr.com/your-username", // Replace with your actual Fiverr profile URL
    icon: <SiFiverr />,
  },
  {
    id: 7,
    name: "Discord",
    url: "https://discord.gg/your-discord-invite", // Replace with your actual Discord invite or profile
    icon: <FaDiscord />,
  },
];


export default contactLinks;
