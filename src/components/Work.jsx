import React from "react";
import ProjectItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Co:med ",
    duration: "1 month",
    details:
      "Developed a full-stack web application using JavaScript alongside a team to create a medical emergency indicator driven by co:here AI library ",
  },
  {
    year: 2023,
    title: "Ride Ranger",
    duration: "1 month",
    details:
      "Efficiently created a web application allowing clients to arrange group rides pertaining to personal electric vehicles",
  },
  {
    year: 2022,
    title: "Explosive Chess",
    duration: "1 month",
    details:
      "Successfully completed an explosive variant of chess using fundamentals of object oriented programming design",
  },
];
const Projects = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      {data.map((item, idx) => (
        <ProjectItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        ></ProjectItem>
      ))}
    </div>
  );
};

export default Projects;
