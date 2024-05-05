import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full xl:px-16 px-8 py-4 xl:py-10 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center xl:border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
