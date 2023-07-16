import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col items-center p-20 dark:bg-black"
      >
        <h1 className="text-black text-3xl dark:text-white">Contact me</h1>
        <form className="flex flex-col items-center justify center mt-10 gap-5 w-full sm:w-[80%] lg:w-[45%]">
          <div className="flex flex-col w-full gap-2">
            <label className="dark:text-white text-[17px]" htmlFor="name">
              Name
            </label>
            <input
              className="rounded bg-gray-300 text-black p-2 w-full outline-0 placeholder:text-black"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col mt-4 gap-2 w-full">
            <label
              className="rounded dark:text-white text-[17px]"
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="bg-gray-300 text-black p-2 w-full outline-0 placeholder:text-black"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mt-4 w-full gap-2">
            <label htmlFor="msg">Message</label>
            <textarea
              className="rounded bg-gray-300 outline-none p-3 h-[30vh] placeholder:text-black text-black"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="w-full p-[10px] bg-red-500 rounded text-1xl text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
