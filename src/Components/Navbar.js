import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navItem, setNavItem] = useState("");
  const [componenet, setComponenet] = useState("");

  useEffect(() => {
    let url = window.location.pathname;
    setNavItem(url);
    if (url === "/") setComponenet("About");
    else if (url === "/resume") setComponenet("Resume");
    else if (url === "/projects") setComponenet("Projects");
  }, [navItem]);

  const handleNav = (nav) => {
    setNavItem(nav);
  };

  return (
    <div className='navbar'>
      <div className='navbar_active'>{componenet}</div>
      <div className='navbar_items'>
        {navItem !== "/" && (
          <Link to='/'>
            <div className='navbar_item' onClick={() => handleNav("About")}>
              About
            </div>
          </Link>
        )}
        {navItem !== "/resume" && (
          <Link to='/resume'>
            <div className='navbar_item' onClick={() => handleNav("Resume")}>
              Resume
            </div>
          </Link>
        )}
        {navItem !== "/projects" && (
          <Link to='/projects'>
            <div className='navbar_item' onClick={() => handleNav("Projects")}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
