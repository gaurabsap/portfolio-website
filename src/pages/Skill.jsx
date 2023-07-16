import React from "react";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoFirebase,
} from "react-icons/bi";
const Skill = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-7 p-5 dark:bg-black h-[25vh]">
        <h1 className="text-2xl text-black dark:text-white sm:text-3xl">
          My skills
        </h1>
        <div className="flex items-center justify-center gap-5 flex-wrap text-black text-5xl dark:text-red-500">
          <AiFillHtml5 size={32} />
          <DiCss3 size={32} />
          <BiLogoJavascript size={32} />
          <BiLogoReact size={32} />
          <TbBrandNextjs size={32} />
          <BiLogoTailwindCss size={32} />
          <BiLogoNodejs size={32} />
          <SiExpress size={32} />
          <BiLogoMongodb size={32} />
          <BiLogoFirebase size={32} />
        </div>
      </div>
    </>
  );
};

export default Skill;
