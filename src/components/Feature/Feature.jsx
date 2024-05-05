import React from "react";
import Title from "../Title";
import Card from "./Card";
import { featuresData } from "../Data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full xl:px-16 px-8 xl:py-10 py-4 xl:border-b-[1px] border-b-black"
    >
      <div className="lgl:block flex justify-center items-center ">
        <Title title="Experties" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
