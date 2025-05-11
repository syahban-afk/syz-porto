import React from "react";
import ProjectCardAll from "../sub/ProjectCardAll";

const AllProjects = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 animate-gradient-x">
        See All My Projects
      </h1>
      <ProjectCardAll />
    </div>
  );
};

export default AllProjects;
