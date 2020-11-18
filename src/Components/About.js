import React from "react";
import frontend from "../assets/myicons/web-design.svg";
import backend from "../assets/myicons/backend.svg";
import api from "../assets/myicons/api.svg";
import SkillCard from "./SkillCard";

const About = () => {
  const skills = [
    {
      icon: frontend,
      title: "Veniam anim consectetur minim mollit aute enim.",
      about:
        "Lorem eiusmod exercitation enim commodo aute incididunt ipsum id commodo. Ea occaecat exercitation veniam eu nostrud deserunt aute pariatur nostrud nisi nulla aute deserut.",
    },
    {
      icon: backend,
      title: "Veniam anim consectetur minim mollit aute enim.",
      about:
        "Lorem eiusmod exercitation enim commodo aute incididunt ipsum id commodo. Ea occaecat exercitation veniam eu nostrud deserunt aute pariatur nostrud nisi nulla aute deserut.",
    },
    {
      icon: api,
      title: "Veniam anim consectetur minim mollit aute enim.",
      about:
        "Lorem eiusmod exercitation enim commodo aute incididunt ipsum id commodo. Ea occaecat exercitation veniam eu nostrud deserunt aute pariatur nostrud nisi nulla aute deserut.",
    },
  ];

  return (
    <div className='about'>
      <h6 className='about_intro'>
        Reprehenderit consectetur qui Lorem ullamco amet eu veniam id nulla.
        Lorem nisi quis. Ad veniam sunt amet adipisicing cupidatat cupidatat
        laboris esse laboris et culpa amet sunt excepteur.
      </h6>
      <div className='container about_container'>
        <h6 className='about_heading'>What I Offer</h6>
        <div className='row'>
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
