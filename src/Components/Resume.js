import React from "react";
import react from "../assets/icons/react.svg";
import SkillBar from "./SkillBar";
import python from "../assets/icons/python.svg";

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

  return (
    <div className='container resume'>
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
    </div>
  );
};

export default Resume;
