import React from "react";

const SkillCard = ({ skill: { icon, title, about } }) => {
  return (
    <div className='col-lg-4'>
      <div className='skill_card'>
        <img src={icon} alt='icon' className='skill_card_icon'></img>
        <div className='skill_card_body'>
          <h6 className='skill_card_title'>{title}</h6>
          <p className='skill_card_about'>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
