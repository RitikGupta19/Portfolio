import React from "react";

const SkillBar = ({ skill: { icon, name } }) => {
  return (
    <div className='bar'>
      <div className='bar_wrapper'>
        <span className='bar_name '>
          <img src={icon} alt='icon' className='bar_icon mr-2' />
          {name}
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
