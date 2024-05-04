import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import SocialIcons from "./socialIcons";
import Image from "next/image";
import { SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import { FaFigma, FaReact } from "react-icons/fa6";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="max-padd-container py-20 bg-[#fdf3fb] dark:bg-transparent">
      <div className="flexCenter gap-24 flex-col xl:flex-row">
        {/*left */}
        <div className="flex flex-1 flex-col pt-12 xl:pt-2">
          <h1 className="h1 !font-extrabold">
            From Pixels to Perfactions Exploring the Essance of Full Stack
          </h1>
          <p>
            Explore my portfolio where creativity and functionality coverage ,
            showcasing innovative web development projects crafted with
            precision and passion for digital excellance.
          </p>
          <div className="flex gap-4 mt-6">
            <Button className="gap-x-2 shadow-xl">
              Hire me <MoveRight size={20} />
            </Button>
            <Button className=" shadow-xl bg-black hover:bg-[#222] text-white">
              Download CV
            </Button>
          </div>
          <div className="mt-20">
            <SocialIcons />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-1 relative z-10 top-12">
          <div>
            <Image
              src={"/bg.png"}
              height={488}
              width={488}
              priority
              className=""
            />
          </div>

          {/* photo badge */}
          <div className="hidden xl:flex">
            <Badge
              containerStyles={"absolute -top-5 right-[45%]"}
              icon={<SiNodedotjs />}
            />
            <Badge
              containerStyles={"absolute bottom-[5%] right-[27%]"}
              icon={<FaFigma />}
            />
            <Badge
              containerStyles={"absolute top-[15%] -left-5 "}
              icon={<FaReact />}
            />
            <Badge
              containerStyles={"absolute -bottom-[5%] left-[30%] "}
              icon={<SiMongodb />}
            />
            <Badge
              containerStyles={"absolute top-[60%] left-0"}
              icon={<SiExpress />}
            />
            <Badge
              containerStyles={"absolute top-[40%] left-[80%]"}
              icon={<SiNextdotjs />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
