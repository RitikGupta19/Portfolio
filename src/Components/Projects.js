import React, { useState } from "react";
import projectData from "./ProjectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projectData);
  const [activeItem, setActiveItem] = useState("All");
  const handleFilterCategory = (name) => {
    const filterProj = projectData.filter((project) =>
      project.category.includes(name)
    );
    setProjects(filterProj);
    setActiveItem(name);
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
        <div
          className={activeItem === "All" && "project_navbar_active"}
          onClick={() => {
            setProjects(projectData);
            setActiveItem("All");
          }}>
          All
        </div>
        <div
          className={activeItem === "ReactJS" && "project_navbar_active"}
          onClick={() => handleFilterCategory("ReactJS")}>
          ReactJS
        </div>
        <div
          className={activeItem === "Redux" && "project_navbar_active"}
          onClick={() => handleFilterCategory("Redux")}>
          Redux
        </div>
        <div
          className={activeItem === "NodeJS" && "project_navbar_active"}
          onClick={() => handleFilterCategory("NodeJS")}>
          NodeJS
        </div>
        <div
          className={activeItem === "MongoDB" && "project_navbar_active"}
          onClick={() => handleFilterCategory("MongoDB")}>
          MongoDB
        </div>
        <div
          className={activeItem === "CSS" && "project_navbar_active"}
          onClick={() => handleFilterCategory("CSS")}>
          CSS
        </div>
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
