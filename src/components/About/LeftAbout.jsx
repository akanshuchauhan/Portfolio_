import React from "react";
import {  bannerImg2 } from "../../assets/index";

const LeftAbout = () => {
  return (
    <div className="w-full lgl:w-[45%] flex  items-center relative ">
      <img className="z-10 lg:-ml-8" src={bannerImg2} alt="bannerImg" />
      <div className="absolute bottom-0 w-[300px] h-[250px] lgl:w-[450px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default LeftAbout;
