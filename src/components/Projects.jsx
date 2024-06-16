import React from "react";
import ProjectItem from "./ProjectItem";
import One from "../assets/one.jpg";
import Two from "../assets/two.jpg";
import Three from "../assets/three.jpg";
import Four from "../assets/four.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">Here are some projects I made </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={One}
          title="StuStack"
          description={
            "Created an automated newsletter catered to post secondary students advertising opportunities and events"
          }
          projectURL={"https://stustack.vercel.app/"}
        ></ProjectItem>
        <ProjectItem
          img={Two}
          title="second app"
          description={"description"}
          projectURL={"/"}
        ></ProjectItem>
        <ProjectItem
          img={Three}
          title="third app"
          description={"description"}
          projectURL={"/"}
        ></ProjectItem>
        <ProjectItem
          img={Four}
          title="fourth app"
          description={"description"}
          projectURL={"/"}
        ></ProjectItem>
      </div>
    </div>
  );
};

export default Projects;
