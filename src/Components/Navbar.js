import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  const navbar_variants = {
    hidden: {
      y: "-30vh",
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className='navbar'
      variants={navbar_variants}
      initial='hidden'
      animate='visible'>
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
    </motion.div>
  );
};

export default Navbar;
