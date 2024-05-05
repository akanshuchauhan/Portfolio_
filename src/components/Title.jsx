import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14 lgl:mt-0 mt-[6rem]">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="xl:text-4xl text-2xl  md:text-5xl text-gray-300 font-bold capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
