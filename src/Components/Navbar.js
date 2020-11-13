import React, { useState } from "react";

const Navbar = () => {
  const [navItem, setNavItem] = useState("About");

  const handleNav = (nav) => {
    setNavItem(nav);
  };

  return (
    <div className='navbar'>
      <div className='navbar_active'>{navItem}</div>
      <div className='navbar_items'>
        {navItem !== "About" && (
          <div className='navbar_item' onClick={() => handleNav("About")}>
            About
          </div>
        )}
        {navItem !== "Resume" && (
          <div className='navbar_item' onClick={() => handleNav("Resume")}>
            Resume
          </div>
        )}
        {navItem !== "Projects" && (
          <div className='navbar_item' onClick={() => handleNav("Projects")}>
            Projects
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
