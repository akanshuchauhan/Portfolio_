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
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="Patliputra University Patna (2020 - 2023)"
            result="6.1/10"
            des="Graduated from CIMAGE College Patna in 2023, under Patliputra University, refining skills for dynamic career paths and cultural contributions."
          />
          <ResumeCard
            title="Intermidiate"
            subTitle="S N Sinha College (2017 - 2017)"
            result="7.8/10"
            des="Intermidiate from S N Sinha College, Aurangabad, in 2019 under the BSEB Board, specializing in PCM stream, laying the groundwork for higher academic pursuits."
          />
          <ResumeCard
            title="Matriculation"
            subTitle="High School Bhadwa ( 2017)"
            result="6.2/10"
            des="Completed Matriculation from High School Bhadwa in 2017 under the BSEB Board, initiating the journey through secondary education, setting the stage for further academic growth."
          />
        </div>
      </div>
      {/* part Two */}

      <div className="lgl:w-1/2 w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Developer Intern"
            subTitle="Brand Monkey (Feb - April - 2024)"
            result="Noida (Delhi)"
            des="Engaged as a Frontend Developer Intern at Brand Monkey, Noida (Delhi) from February to April 2024, specializing in React.js. Leveraged expertise to contribute dynamically to projects, embracing Google's hiring culture and fostering team synergy."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="Afame Technologies - (Jan - 2014)"
            result="Virtual"
            des="Embarked on a virtual Web Developer Internship journey at Afame Technologies in January 2014, delving into the realms of web development for a 30-day duration. Despite the challenges of securing roles in Malaysia, embraced the opportunity to hone skills alongside highly qualified homegrown graduates."
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
