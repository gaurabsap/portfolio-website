import React, { useState } from "react";
import logo from "../assets/log.png";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const htmlElement = document.querySelector("body");
    htmlElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className="flex justify-between items-center p-5">
        <a
          className="text-[20px] sm:text-[28px] font-bold ml-2 md:ml-7 dark:text-white sm:text[28px]"
          href="#"
        >
          {"<Gaurab />"}
        </a>
        <div className="flex items-center gap-5 mr-4 md:mr-10">
          <BsFillMoonStarsFill
            className={`cursor-pointer text-black dark:text-white ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            size={20}
            onClick={toggleDarkMode}
          />
          <a
            className="p-[7px] bg-green-600 text-[14px] sm:text-[16px] rounded-[5px] hover:opacity-75 transition-all ease-linear text-white "
            href="#"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
