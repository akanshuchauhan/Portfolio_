"use client";
import React from "react";
import CountUp from "react-countup";

const Badge = ({ containerStyles, icon }) => {
  return (
    <div className={`${containerStyles} badge`}>
      {icon && (
        <div className="text-3xl text-primary dark:text-black cursor-pointer">{icon}</div>
      )}
    </div>
  );
};

export default Badge;
