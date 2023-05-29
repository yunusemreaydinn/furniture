import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {
  const navAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.02 },
    },
  };

  const child = {
    visible: {
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 0.5,
      },
    },
    hidden: {
      y: 40,
      transition: {
        ease: easeInOut,
      },
    },
  };

  const hover = {
    color: "black",
    borderBottom: "1px solid black",
    borderTop: "1px solid black",
  };

  return (
    <div>
      <div className="topbar">
        <motion.div variants={navAnimation} initial="hidden" animate="visible">
          <AiOutlineSearch className="topbar-search-icon" />
        </motion.div>
        
        <motion.div
          style={{ overflow: "hidden", display: "flex" }}
          variants={container}
          initial="hidden"
          animate="visible"
          className="topbar-logo"
        >
          {Array.from("furniture").map((word, i) => (
            <motion.span variants={child} className="logo-text" key={i}>
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={navAnimation} initial="hidden" animate="visible">
          <AiOutlineShoppingCart className="topbar-icons" />
          <CgProfile className="topbar-icons" />
        </motion.div>
      </div>
      <hr />

      <motion.ul
        className="links"
        variants={navAnimation}
        initial="hidden"
        animate="visible"
      >
        <motion.li whileHover={hover}>Sofas</motion.li>
        <motion.li whileHover={hover}>Dressers</motion.li>
        <motion.li whileHover={hover}>Beds</motion.li>
        <motion.li whileHover={hover}>Chairs</motion.li>
        <motion.li whileHover={hover}>Gaming Furniture</motion.li>
        <motion.li whileHover={hover}>Tables</motion.li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
