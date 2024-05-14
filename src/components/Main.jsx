import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.pexels.com/photos/355887/pexels-photo-355887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Tony Li
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Software Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Administrative Assistant",
                2000,
                "Graphics Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedinIn className="cursor-pointer"></FaLinkedinIn>
            <FaGithub className="cursor-pointer"></FaGithub>
            <FaInstagram className="cursor-pointer"></FaInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
