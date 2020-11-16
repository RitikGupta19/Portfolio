import React, { Fragment } from "react";
import linkedin from "../assets/icons/linkedin.svg";
import placeholder from "../assets/myicons/placeholder.svg";
import graduated from "../assets/myicons/graduated.svg";
import mightycoder from "../assets/mightycoder.svg";
import github from "../assets/myicons/github.svg";
import resumeFile from "../assets/resume.pdf";

const Main = () => {
  const handleEmail = () => {
    window.open("mailto: ritikgupta1982@gmail.com");
  };

  return (
    <div className='sidebar'>
      <img src={mightycoder} alt='ProfileImage' className='sidebar_image'></img>
      <div className='sidebar_name'>
        <span className='firstName'>Ritik</span>{" "}
        <span className='lastName'>Gupta</span>
      </div>
      <div className='sidebar_item sidebar_title'>Web Developer</div>
      <a href={resumeFile} download='resume.pdf'>
        <div className='sidebar_item sidebar_icons sidebar_resume my-2'>
          <img
            src={graduated}
            alt='download icon'
            style={{ height: "25px", width: "25px" }}
          />
          Download Resume
        </div>
      </a>
      <figure className='sidebar_social-icons my-3'>
        <a href='https://www.linkedin.com/in/ritikgupta1982'>
          <img
            src={linkedin}
            alt='linkedin'
            style={{ height: "30px", width: "30px" }}
          />
        </a>
      </figure>
      <div className='sidebar_contact my-4'>
        <div className='sidebar_item sidebar_github'>
          <a href='https://github.com/RitikGupta19/MERN'>
            <img
              src={github}
              alt='github'
              style={{ height: "25px", width: "25px" }}
            />{" "}
            Github
          </a>
        </div>
        <div className='sidebar-location'>
          <img
            src={placeholder}
            alt='location'
            style={{ height: "25px", width: "25px" }}
          />
          Delhi, India
        </div>
        <div className='sidebar_item'>ritikgupta1982@gmail.com</div>
        <div className='sidebar_item'>8010708079</div>
      </div>
      <div className='sidebar-item sidebar_email my-5' onClick={handleEmail}>
        Email Me
      </div>
    </div>
  );
};

export default Main;
