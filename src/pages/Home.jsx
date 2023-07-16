import React, { useState } from "react";
import me from "../assets/me.jpg";
import { Typewriter } from "react-simple-typewriter";
import Draggable from "react-draggable";

import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineGithub,
  AiOutlineHome,
  AiFillProject,
  AiFillContacts,
} from "react-icons/ai";

import { BsFillPersonLinesFill, BsFillMoonStarsFill } from "react-icons/bs";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const htmlElement = document.querySelector("body");
    htmlElement.classList.toggle("dark");
  };
  return (
    <>
      <div
        id="home"
        className="flex justify-evenly h-[85vh] flex-col mt-[1.2rem] items-center sm:flex-row sm:h-[80vh]"
      >
        <div className="flex flex-col gap-3 items-center p-5 sm:items-start">
          <h1 className="text-2xl mb-1 text-green-700 sm:text-4xl md:text-5xl font-[500]">
            Hi, i m Gaurab sapkota.
          </h1>
          <h1 className="text-[22px] mb-3 dark:text-white md:text-2xl ">
            A
            <Typewriter
              words={[" Software developer", " Video editor", " Youtuber"]}
              loop="0"
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-[0.9rem] w-9/12 leading-6 text-center dark:text-white sm:text-start sm:text-1xl md:text-[1rem]">
            Passionate about learning new technology and frameworks. Hire me and
            you won't regret it.
          </p>
          <a
            href="#"
            className="p-2 text-center bg-green-500 rounded mt-3 text-white text-[1rem]"
          >
            Hire me
          </a>
          <div className="text-[25px] flex dark:text-white items-center gap-4 mt-5">
            <a href="#">
              <AiFillTwitterCircle />
            </a>
            <a href="#">
              <AiFillYoutube />
            </a>
            <a href="#">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <div className="rounded-full relative sm:mr-5 bg-green-400 p-5 animate-border-anime hover:scale-100 transition-all">
          <img
            className="w-[7rem] rounded-full mt-2 duration-10000 sm:w-[12rem] "
            src={me}
            alt="me"
          />
        </div>
        {/* <Draggable> */}
        <div
          draggable={true}
          className="bg-green-600 text-white sm:p-2 p-1 rounded-full flex items-center sm:flex-row gap-6 fixed bottom-10 z-50"
        >
          <a href="#home" title="Home" className="p-2 bg-white rounded-full">
            <AiOutlineHome size={18} color="black" />
          </a>
          <a
            href="#about"
            title="About"
            className="sm:p-2 p-1 bg-white rounded-full"
          >
            <BsFillPersonLinesFill size={20} color="black" />
          </a>
          <a
            href="#project"
            title="Projects"
            className="sm:p-2 p-1 bg-white rounded-full"
          >
            <AiFillProject size={20} color="black" />
          </a>
          <a
            href="#contact"
            title="Contact"
            className="sm:p-2 p-1 bg-white rounded-full"
          >
            <AiFillContacts size={20} color="black" />
          </a>
          <a
            title="mode"
            className="sm:p-2 p-1 bg-white rounded-full cursor-pointer"
            onClick={toggleDarkMode}
          >
            <BsFillMoonStarsFill size={20} color="black" />
          </a>
        </div>
        {/* </Draggable> */}
      </div>
    </>
  );
};

export default Home;
