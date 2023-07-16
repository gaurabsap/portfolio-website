import React, { useRef, useState } from "react";
import gb from "../assets/gb.jpg";
const About = () => {
  const [data, setData] = useState("skill");
  const FindId = (id) => {
    console.log(id);
    setData(id);
  };
  return (
    <div
      id="about"
      className="p-10 bg-gray-900 mt-3 flex flex-col items-center gap-5 sm:justify-center"
    >
      <h1 className="text-white text-[30px]">About</h1>
      <div className="w-full flex flex-col items-center justify-around gap-7 sm:flex-row sm:items-start md:justify-center">
        <img
          className="rounded-full sm:rounded-md hover:scale-105 transition-all duration-3000"
          src={gb}
          alt="gb"
        />
        <div className="p-4 sm:w-[50%]">
          <p className="text-gray-200 sm:text-start sm:w-full text-center">
            My name is Gaurab sapkota. i m Full stack Web developer currently
            pursuing my Bachelor's degree in Computer Science. I am passionate
            about exploring the vast realm of technology and continuously
            expanding my knowledge. I possess a strong drive to continuously
            learn and explore new techs and frameworks.
          </p>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-5 mt-5  p-1 rounded-md text-white">
              <a
                className={
                  data === "skill"
                    ? "p-2 bg-red-500 text-[0.9rem] rounded"
                    : "p-2 text-[0.9rem] rounded border bg-transparent"
                }
                href="#skill"
                onClick={() => FindId("skill")}
              >
                Skills
              </a>
              <a
                className={
                  data === "exp"
                    ? "p-2 bg-red-500 text-[0.9rem] rounded"
                    : "p-2 text-[0.9rem] rounded border"
                }
                href="#exp"
                onClick={() => FindId("exp")}
              >
                Experience
              </a>
              <a
                className={
                  data === "proj"
                    ? "p-2 bg-red-500 text-[0.9rem] rounded"
                    : "p-2 text-[0.9rem] rounded border"
                }
                href="#proj"
                onClick={() => FindId("proj")}
              >
                Projects
              </a>
            </div>
            <p
              className={
                data === "skill"
                  ? " sm:text-start text-center mt-3 text-white sm:w-[100%]"
                  : "hidden"
              }
            >
              I have skill on Html, Css, Sass, javascript, React, Node, Express,
              Mongodb, sql, python, firebase and others frameworks etc. i m
              continuously increasing my skills.
            </p>
            <p
              className={
                data === "exp"
                  ? "sm:w-[100%] text-center mt-3 text-white sm:text-start"
                  : "hidden"
              }
            >
              I have 2 year of Experience in web development. i have done many
              internship and works in many company in Nepal. i m currently on
              job hunting.
            </p>
            <p
              className={
                data === "proj"
                  ? "sm:w-[100%] sm:text-start text-center mt-3 text-white"
                  : "hidden"
              }
            >
              I have create more than 50 projects during my learning and working
              in the field of web development. They are all Productive and User
              friendly websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
