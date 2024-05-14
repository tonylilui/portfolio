import React from "react";
import ProjectItem from "./ProjectItem";

const data = [
  {
    year: 2020,
    title: "content creator",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus commodi doloribus eos atque ducimus blanditiis sapiente mollitia adipisci nulla eligendi reprehenderit soluta similique nihil quae molestiae, culpa voluptatum optio!",
  },
  {
    year: 2020,
    title: "content creator",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus commodi doloribus eos atque ducimus blanditiis sapiente mollitia adipisci nulla eligendi reprehenderit soluta similique nihil quae molestiae, culpa voluptatum optio!",
  },
  {
    year: 2020,
    title: "content creator",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus commodi doloribus eos atque ducimus blanditiis sapiente mollitia adipisci nulla eligendi reprehenderit soluta similique nihil quae molestiae, culpa voluptatum optio!",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
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
