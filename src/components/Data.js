import { FaCode } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { VscServerProcess } from "react-icons/vsc";
import projectFive from "../assets/images/projects/projectFive.png";
import projectFour from "../assets/images/projects/projectFour.png";
import projectOne from "../assets/images/projects/projectOne.png";
import projectThree from "../assets/images/projects/projectThree.png";
import projectTwo from "../assets/images/projects/projectTwo.png";

const featuresData = [
  {
    id: 1,
    icon: FaCode,
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
    title: "Chat App",
    github: "https://github.com/akanshuchauhan/ChatFrontend",
    liveLink: "https://chat-frontend-topaz-six.vercel.app/",
    description:
      "Developed a real-time messaging app with instant messaging, user authentication, and real-time updates. This application significantly improved message delivery speed and user engagement by leveraging Socket.IO's event-driven architecture for efficient data exchange between clients and the server.",
  },
  {
    id: 2,
    img: projectTwo,
    title: "Food Delivery",
    github: "https://github.com/akanshuchauhan/Delivary_app_next_js",
    liveLink: "https://delivary-app-next-js-c4dw.vercel.app/",
    description:
      "Created a robust delivery application optimizing routing and real-time tracking, reducing delivery times. Implemented a user-friendly interface, enhancing customer satisfaction and increasing order frequency. Additionally, scaled backend infrastructure to support high-volume orders and peak-time traffic efficiently.  ",
  },
  {
    id: 3,
    img: projectThree,
    title: "Ecommerce",
    github: "https://github.com/akanshuchauhan/ecom_Fromtend",
    liveLink: "https://ecom-fromtend-223i.vercel.app/",
    description:
      "Built a full-stack e-commerce platform with a 40% faster query response time. Enhanced UI/UX, increasing user retention by 25%, and scaled the application to handle 1,000 transactions per second. ",
  },
  {
    id: 4,
    img: projectFour,
    title: "Health-Care System",
    github: "https://github.com/akanshuchauhan/HealthCareSystem",
    liveLink: "https://healthcaresystem-vsf0.onrender.com/",
    description:
      "Created a scalable platform for medical data management and provider-patient communication. Achieved compliance with medical data standards, reducing record retrieval time by 30%, and implemented features to cut scheduling errors and streamline patient management.",
  },
  {
    id: 5,
    img: projectFive,
    title: "Portfolio",
    github: "https://akanshuchauhan.github.io/Password-Generator/",
    liveLink: "https://akanshuchauhan.github.io/Password-Generator/",
    description:
      "Portfolio project leveraging React.js and Tailwind CSS for dynamic UI. Designed to optimize user experience with intuitive navigation and modern aesthetics.",
  },
];

export { featuresData, ProjectsData };

