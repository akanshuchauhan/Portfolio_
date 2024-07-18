import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Akanshu Chauhan</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          {/* I am a proficient MERN stack developer, adept at crafting robust web
          solutions. With expertise in MongoDB, Express.js, React, and Node.js,
          I excel in building dynamic and scalable applications. My skills span
          both frontend and backend development, ensuring seamless user
          experiences from start to finish. */}
          I am a skilled MERN stack developer, proficient in crafting robust web
          solutions. With expertise in MongoDB, Express.js, React, and Node.js,
          I deliver seamless and dynamic applications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7827102613</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">akanshuchauhan2000@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/akanshu-chauhan-627622205">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/akanshuchauhan">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
           
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
