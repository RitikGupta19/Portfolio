import React from "react";
import react from "../assets/myicons/react.svg";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

const Resume = () => {
  const skills = [
    {
      icon: react,
      name: "ReactJS",
    },
    {
      icon: react,
      name: "NodeJS & ExpressJS",
    },
    {
      icon: react,
      name: "MongoDB",
    },
    {
      icon: react,
      name: "HTML & CSS",
    },
    {
      icon: react,
      name: "C & C++",
    },
    {
      icon: react,
      name: "Python",
    },
  ];

  const tools = [
    {
      icon: react,
      name: "Git",
    },

    {
      icon: react,
      name: "Firebase",
    },
    {
      icon: react,
      name: "Google API",
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
              Currently a pre-final year student of B.Tech (Computer Science and
              Engineering) from DR. APJ Abdul Kalam Technical University
              (formerly known as UPTU).
            </p>
          </div>
        </div>
        <div className='col-lg-6 resume_card'>
          <h4 className='resume_card_heading'>Experience</h4>
          <div className='resume_card_body'>
            <h5 className='resume_card_title'>
              MyKaam: Solving Jobs for Blue Collor
            </h5>
            <p className='resume_card_name'>Web Developer</p>
            <p className='resume_card_details'>
              Some of my roles were to do optimization of website to increase
              performance and efficiency. Used automation tools like Gulp,
              Webpack. Server Side rendering of React for better SEO.
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-lg-6 resume_skills'>
          <h5 className='resume_skills_heading'>Language and Framework</h5>
          <div className='resume_skills_body mt-3'>
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
        <div className='col-12 col-lg-6 resume_skills'>
          <h5 className='resume_skills_heading'>Tools and Software</h5>
          <div className='resume_skills_body mt-3'>
            {tools.map((tool, index) => (
              <SkillBar key={index} skill={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
