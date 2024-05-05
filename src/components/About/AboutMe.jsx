import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";
import Title from "../Title";

const AboutMe = () => {
  return (
    <div id="about">
      <p className="xl:text-4xl text-3xl md:text-5xl text-gray-300 font-bold capitalize text-center lgl:pt-8 pt-16 lg:pb-0 pb-4">
        About Me
      </p>
      <section className="w-full xl:px-16 px-8 py-4 xl:py-0 xl:pb-10 flex flex-col gap-10 xl:gap-0 lgl:flex-row  items-center xl:border-b-[1px] font-titleFont border-b-black">
        <LeftAbout />
        <RightAbout />
      </section>
    </div>
  );
};

export default AboutMe;
