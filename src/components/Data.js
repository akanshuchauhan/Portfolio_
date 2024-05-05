import { FaCode, FaMobile, FaGlobe } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress } from "react-icons/si";
import projectOne from "../assets/images/projects/projectOne.png";
import projectTwo from "../assets/images/projects/projectTwo.png";
import projectThree from "../assets/images/projects/projectThree.png";
import projectFour from "../assets/images/projects/projectFour.png";
import projectFive from "../assets/images/projects/projectFive.png";
import projectSix from "../assets/images/projects/projectSix.jpg";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { VscServerProcess } from "react-icons/vsc";

const featuresData = [
  {
    id: 1,
    icon: FaCode, // Just reference the component here, don't use JSX syntax
    title: "Full Stack Development",
    des: "I utilize the MERN stack to develop high-quality web applications, seamlessly integrating frontend and backend components for superior user interaction.",
  },
  {
    id: 2,
    icon: HiOutlineDesktopComputer,
    title: "Frontend Development",
    des: "In front-end development, I specialize in creating user-friendly interfaces with React , Next And Tailwind CSS for seamless experiences across devices.",
  },
  {
    id: 3,
    icon: VscServerProcess,
    title: "Backend Development",
    des: "In backend development, I create efficient server-side solutions with Node.js, Express.Js, for Database MongoDB, ensuring seamless integration with front-end systems.",
  },
];

const ProjectsData = [
  {
    id: 1,
    img: projectOne,
    title: "Real Estate",
    github: "https://github.com/Himanshu8825/RealEstate.git",
    liveLink: "https://verma-estate.onrender.com/",
    description:
      "'Real Estate' is my MERN stack creation, using Tailwind CSS, Firebase, and Redux. Seamlessly list and manage properties for sale or rent on this robust platform, offering an intuitive user experience.",
  },
  {
    id: 2,
    img: projectTwo,
    title: "Food Delivery",
    github: "https://github.com/Himanshu8825/FoodDeleveryProject.git",
    liveLink: "https://github.com/Himanshu8825/FoodDeleveryProject.git",
    description:
      "'Food Delivery' is my MERN stack project, featuring an admin panel for efficient management. Enjoy seamless ordering and tracking for an enhanced dining experience.",
  },
  {
    id: 3,
    img: projectThree,
    title: "Stay Sanse",
    github: "https://github.com/Himanshu8825/Hotel-Stay-Sense.git",
    liveLink: "https://stay-sense.onrender.com/",
    description:
      "'Stay Sense' is my full-stack hotel booking app, offering seamless reservations and delightful stays. Experience hassle-free booking and memorable accommodations with ease.",
  },
  {
    id: 4,
    img: projectFour,
    title: "Razor pay",
    github: "https://github.com/Himanshu8825/Razorpay-Front-End.git",
    liveLink: "https://profound-queijadas-e68ae3.netlify.app/",
    description:
      "'RazorPay Clone' is my project, replicating RazorPay's functionality with HTML and Tailwind CSS. Seamlessly handle payments and transactions with a sleek, responsive interface.",
  },
  {
    id: 5,
    img: projectFive,
    title: "Portfolio",
    github: "https://github.com/Himanshu8825/Password-Generator.git",
    liveLink: "https://resilient-duckanoo-7c0618.netlify.app/",
    description:
      "Portfolio project leveraging React.js and Tailwind CSS for dynamic UI. Designed to optimize user experience with intuitive navigation and modern aesthetics.",
  },
  {
    id: 6,
    img: projectSix,
    title: "Tic tac toe",
    github: "https://github.com/Himanshu8825/Tic-Tac-Toe.git",
    liveLink: "https://illustrious-tarsier-808121.netlify.app/",
    description:
      "'Tic Tac Toe' is my HTML, CSS, and JavaScript creation, offering classic gaming fun. Experience timeless entertainment with this web-based rendition of the beloved game.",
  },
];

export { featuresData, ProjectsData };
