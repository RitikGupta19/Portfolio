import React, { useState } from "react";
import projectData from "./ProjectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);

  const handleFilterCategory = (name) => {
    const filterProj = projectData.filter((project) =>
      project.category.includes(name)
    );
    setProjects(filterProj);
  };

  return (
    <div className='container project'>
      <div className='project_navbar'>
        <div onClick={() => setProjects(projectData)}>All</div>
        <div onClick={() => handleFilterCategory("react.js")}>ReactJS</div>
        <div onClick={() => handleFilterCategory("node.js")}>Node</div>
        <div onClick={() => handleFilterCategory("mongoDB")}>MongoDB</div>
      </div>
      <div className='row'>
        {projects.map((proj, index) => (
          <ProjectCard key={index} details={proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
