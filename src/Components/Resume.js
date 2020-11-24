import React from "react";
import react from "../assets/icons/react.svg";
import SkillBar from "./SkillBar";
import python from "../assets/icons/python.svg";
import { motion } from "framer-motion";

const Resume = () => {
  const skills = [
    {
      icon: python,
      name: "React",
    },
    {
      icon: react,
      name: "React",
    },
    {
      icon: react,
      name: "React",
    },
    {
      icon: react,
      name: "React",
    },
  ];

  const resume_variants = {
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
      className='container resume'
      variants={resume_variants}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <div className='row'>
        <div className='col-lg-6 resume_card'>
          <h4 className='resume_card_heading'>Education</h4>
          <div className='resume_card_body'>
            <h5 className='resume_card_title'>
              Computer Science & Engineering
            </h5>
            <p className='resume_card_name'>Inderprastha Engineering College</p>
            <p className='resume_card_details'>
              Veniam ex deserunt excepteur duis voluptate qui ipsum pariatur
              nisi laboris amet sit cupidatat occaecat.
            </p>
          </div>
        </div>
        <div className='col-lg-6 resume_card'>
          <h4 className='resume_card_heading'>Experience</h4>
          <div className='resume_card_body'>
            <h5 className='resume_card_title'>
              Ut culpa enim duis magna pariatur ea.
            </h5>
            <p className='resume_card_name'>
              Voluptate proident consequat excepteur pariatur culpa nulla est
              exercitation.
            </p>
            <p className='resume_card_details'>
              Veniam ex deserunt excepteur duis voluptate qui ipsum pariatur
              nisi laboris amet sit cupidatat occaecat.
            </p>
          </div>
        </div>
      </div>
      <h5 className='resume_skills_heading'>Language and Framework</h5>
      <div className='row'>
        <div className='col resume_skills'>
          <div className='resume_skills_body mt-3'>
            {skills.map((skill, index) => (
              <SkillBar skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
