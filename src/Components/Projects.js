import React, { useState } from "react";
import projectData from "./ProjectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);

  const handleFilterCategory = (name) => {
    const filterProj = projectData.filter((project) =>
      project.category.includes(name)
    );
    setProjects(filterProj);
  };

  const project_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={project_variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='container project'>
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
    </motion.div>
  );
};

export default Projects;
