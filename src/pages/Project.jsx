import React from "react";
import messenger from "../assets/chat.png";
import ecom from "../assets/ecom.png";
import anime from "../assets/anime.png";
import chat from "../assets/chatgb.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
const Project = () => {
  return (
    <div
      id="project"
      className="flex flex-col justify-center gap-4 dark:bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-blue-50"
    >
      <h1 className="text-center p-4 text-4xl text-red-600">My Projects</h1>
      <div className="flex flex-col justify-center gap-8 p-6 sm:flex-row sm:flex-wrap">
        <div className="p-5 mt-5 flex flex-col items-center justify-center gap-2 bg-white dark:bg-neutral-900 sm:w-[40%] lg:w-[35%]">
          <a href="https://chatgb.netlify.app/" target="_blank">
            <img
              className="w-[60vw] rounded hover:scale-105 transition-all duration-500 cursor-pointer sm:justify-center sm:gap-5"
              src={messenger}
              alt="messenger"
            />
          </a>
          <div className="flex items-center flex-col">
            <h1 className="text-2xl dark:text-white p-3 font-semibold">
              Messenger-App
            </h1>
            <p className="text-center p-2 sm:p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates rerum quisquam iste consequuntur corporis repellendus,
              quod beatae mollitia reiciendis molestiae.
            </p>
            <div className="flex gap-3 justify-center sm:items-start mt-3">
              <a
                className="flex items-center justify-center bg-red-500 text-white p-1 text-[18px] rounded gap-1"
                href="https://chatgb.netlify.app/"
                target="_blank"
              >
                Live <AiOutlineArrowRight />
              </a>
              <a
                className="flex items-center border border-gray-500 dark:border rounded gap-1 p-1 text-[18px]"
                href="https://github.com/gaurabsap/Messenger"
                target="_blank"
              >
                Code <BiCodeAlt />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="p-5 mt-5 flex flex-col items-center justify-center gap-2 bg-white dark:bg-neutral-900 sm:w-[40%] lg:w-[35%]">
          <a href="https://ecommgb.netlify.app/" target="_blank">
            <img
              className="w-[60vw] rounded hover:scale-105 transition-all duration-500 cursor-pointer sm:justify-center sm:gap-5"
              src={ecom}
              alt="ecommerce"
            />
          </a>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl dark:text-white p-3 font-semibold">
              E-commerce Website
            </h1>
            <p className="text-center p-3 sm:p-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates rerum quisquam iste consequuntur corporis repellendus,
              quod beatae mollitia reiciendis molestiae.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start mt-3">
              <a
                className="flex items-center justify-center bg-red-500 text-white p-1 text-[18px] rounded gap-1"
                href="https://ecommgb.netlify.app/"
                target="_blank"
              >
                Live <AiOutlineArrowRight />
              </a>
              <a
                className="flex items-center border border-gray-500 dark:border rounded gap-1 p-1 text-[18px]"
                href="https://github.com/gaurabsap/E-commercegb"
                target="_blank"
              >
                Code <BiCodeAlt />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="h-full mt-5 flex flex-col items-center justify-center-gap-5 p-3 bg-white dark:bg-neutral-900 sm:w-[40%] lg:w-[35%]">
          <a href="https://gbchatapp.netlify.app/" target="_blank">
            <img
              className="w-[60vw] rounded hover:scale-105 transition-all duration-500 cursor-pointer"
              src={chat}
              alt="messenger"
            />
          </a>
          <div className="flex flex-col items-center">
            <h1 className=" text-2xl dark:text-white p-3 font-semibold">
              Chatgb
            </h1>
            <p className="text-center p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates rerum quisquam iste consequuntur corporis repellendus,
              quod beatae mollitia reiciendis molestiae.
            </p>
            <div className="flex gap-3 justify-center mt-3">
              <a
                className="flex items-center justify-center bg-red-500 text-white p-1 text-[18px] rounded gap-1"
                href="https://gbchatapp.netlify.app/"
                target="_blank"
              >
                Live <AiOutlineArrowRight />
              </a>
              <a
                className="flex items-center border border-gray-500 dark:border rounded gap-1 p-1 text-[18px]"
                href="https://github.com/gaurabsap/chat-app"
                target="_blank"
              >
                Code <BiCodeAlt />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="h-full mt-5 flex flex-col items-center justify-center-gap-5 p-3 bg-white dark:bg-neutral-900 sm:w-[40%] lg:w-[35%]">
          <a href="https://animegb.netlify.app/" target="_blank">
            <img
              className="w-[60vw] rounded hover:scale-105 transition-all duration-500 cursor-pointer"
              src={anime}
              alt="anime"
            />
          </a>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl dark:text-white p-3 font-semibold">
              Animixgb
            </h1>
            <p className="text-center p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates rerum quisquam iste consequuntur corporis repellendus,
              quod beatae mollitia reiciendis molestiae.
            </p>
            <div className="flex gap-3 justify-center mt-3">
              <a
                className="flex items-center justify-center bg-red-500 text-white p-1 text-[18px] rounded gap-1"
                href="https://animegb.netlify.app/"
                target="_blank"
              >
                Live <AiOutlineArrowRight />
              </a>
              <a
                className="flex items-center border border-gray-500 dark:border rounded gap-1 p-1 text-[18px]"
                href="#"
              >
                Code <BiCodeAlt />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
