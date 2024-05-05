import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";
const Media = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/suraj-ver789">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/Himanshu8825">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://twitter.com/suraj_ver789">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
          </div>
        </div>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/19OHnlq3JuKTAwgn9NMLYa1g7Xum5Nk4-/view?usp=drive_link"
          target="_blank"
        >
          <button className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
            Download Cv
          </button>
        </a>
      </div>
    </>
  );
};

export default Media;
