import React from "react";
import github from "../assets/myicons/github.svg";

const ProjectCard = ({
  details: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className='project_card col-md-6 col-lg-4'>
      <figure className='project_card_wrapper'>
        <a href={deployed_url} target='_blank'>
          <img src={image} alt={name} className='project_card_image'></img>
        </a>
        <div className='project_card_title'>
          <a href={github_url} target='_blank'>
            <img
              src={github}
              alt='github link'
              className='project_card_icon'></img>
          </a>
          {name}
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
