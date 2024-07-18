import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div className="lgl:w-1/2 w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="M.Tech in Computer Science"
            subTitle="Vit Vellore (2022 - 2024)"
            result="8.2/10"
            des=" Post Graduated from VIT Vellore in 2024, under  Vellore Institute Of Technology , refining skills for dynamic career paths and Logical thinking."
          />
          <ResumeCard
            title="B.Tech in Computer Science"
            subTitle=" IITM Murthal (2017-2021)"
            result="6.8/10"
            des="Graduate from IITM Murthal, Delhi NCR, in 2021 under the DCRUST, Computer Science stream, laying the groundwork for higher academic pursuits."
          />
          <ResumeCard
            title="Secondary School"
            subTitle="Nalanda Modern Public School(2015)"
            result="8.2/10"
            des="Completed Secondary from NMPS School Delhi in 2015 under the CBSE Board, initiating the journey through secondary education, setting the stage for further academic growth."
          />
        </div>
      </div>
      {/* part Two */}

      <div className="lgl:w-1/2 w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer Intern"
            subTitle="AffieFly (March -Present)"
            result="India"
            des="Engaged as a Full Stack Developer Intern at Brand AffieFly, Banglore from March to Present 2024, specializing in React.js. Leveraged expertise to contribute dynamically to projects, embracing Google's hiring culture and fostering team synergy."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="VMC Technologies - (Dec 2022 - May 2023)"
            result="Virtual"
            des="Embarked on a virtual Web Developer Internship journey at VMC Technologies in January 2023, delving into the realms of web development for a 6-months duration. Despite the challenges of securing roles in Malaysia, embraced the opportunity to hone skills alongside highly qualified homegrown graduates."
          />
          <ResumeCard
            title="Full Stack Trainee"
            subTitle="Zepskill By Placewit - (2022 - 2023)"
            result="Virtual"
            des="Enrolled as a Full Stack Trainee at Zepskill By Placewit from January 2022 to August 2023, undertaking a virtual bootcamp experience. Guided by mentors, mastered the MERN stack and C++ programming languages, amidst Oman's evolving economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
