import React from "react";
import frontend from "../assets/myicons/web-design.svg";
import backend from "../assets/myicons/backend.svg";
import api from "../assets/myicons/api.svg";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      icon: frontend,
      title: "Frontend Development",
      about:
        "Develop scalable frontend application using HTML, CSS, JS, ReactJS",
    },
    {
      icon: backend,
      title: "Backend Development",
      about:
        "Building backend server using NodeJS, ExpresJS and have knowledge of database (MongoDb)",
    },
    {
      icon: api,
      title: "API Development",
      about: "Built robust REST API's with express framework.",
    },
  ];

  const about_variants = {
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
    // firerd when component is unMounted
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className='about'
      variants={about_variants}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <h6 className='about_intro'>
        A passionate guy who codes. An enthusiastic person with capability of
        quick learning and discipline you could count on. I have knowledge of
        some of the most popular technologies in industry and also exploring
        more and more. Devoted to field of development whole heartedly, even
        some times don't able to recogonise when the time passed while I am on
        my work ;).
      </h6>
      <div className='container about_container'>
        <div className='row'>
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default About;
