import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineSkype,
  AiOutlineInstagram,
} from "react-icons/ai";
import { RiPinterestFill } from "react-icons/ri";
import { motion } from "framer-motion";

const footer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "linear" } },
};

const signup = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 100, damping: 25 },
  },
};

const container = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.7,
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const icon = {
  hidden: {
		opacity: 0, y: 20,
	},
	visible: {
		opacity: 1, y: 0,
	},
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <motion.div
          variants={footer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="menu"
        >
          <span className="footer-list-title">Menu</span>
          <ul className="footer-list">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently Viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </motion.div>
        <motion.div
          variants={footer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="categories"
        >
          <span className="footer-list-title">Categories</span>
          <ul className="footer-list">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </motion.div>
        <motion.div
          variants={footer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="ourcompany"
        >
          <span className="footer-list-title">Our company</span>
          <ul className="footer-list">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </motion.div>
        <motion.div
          variants={signup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mail-input"
        >
          <span className="footer-title">Join our mailing list</span>
          <div>
            <input
              placeholder="your@email.com"
              type="text"
              className="input-footer"
            />
            <button className="signup-footer">Sign up</button>
          </div>
        </motion.div>
      </div>
      <hr />
      <div className="footer-bot">
        <div className="copyright">Copyright 2022 Furniture LTD</div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={icon}>
            <AiOutlineFacebook className="social-icons" />
          </motion.span>
          <motion.span variants={icon}>
            <AiOutlineInstagram className="social-icons" />
          </motion.span>
          <motion.span variants={icon}>
            <AiOutlineSkype className="social-icons" />
          </motion.span>
          <motion.span variants={icon}>
            <AiOutlineLinkedin className="social-icons" />
          </motion.span>
          <motion.span variants={icon}>
            <AiOutlineTwitter className="social-icons" />
          </motion.span>
          <motion.span variants={icon}>
            <RiPinterestFill className="social-icons" />
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
