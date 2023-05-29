import React from "react";
import image1 from "../assets/images/product1.png";
import image2 from "../assets/images/product2.png";
import image3 from "../assets/images/product3.png";
import image4 from "../assets/images/product4.png";
import { motion } from 'framer-motion'


const title = {
  hidden: {opacity:0},
  visible: {opacity:1, transition: {duration:1}}
}

const cards = {
  hidden: {filter:"blur(10px)"},
  visible: {filter:"blur(0px)", transition: {duration:0.5, delay:0.3}}
}

const button = {
  hidden: {opacity:0, scale:0.8},
  visible: {opacity:1, scale:1, transition:{type:"spring", duration:0.8, delay:0.2}}
}

const Listings = () => {
  return (
    <div className="listings">
      <motion.span variants={title} initial="hidden" whileInView="visible" viewport={{once:true}} className="listings-title">New products</motion.span>
      <div className="listings-card">
        <motion.div variants={cards} initial="hidden" whileInView="visible" >
          <img src={image1} alt="image1" className="listings-card-image" />
          <div className="listings-card-description">
            <span className="listings-card-title">The Bar stool</span>
            <span className="listings-card-price">£250</span>
          </div>
        </motion.div>
        <motion.div variants={cards} initial="hidden" whileInView="visible" >
          <img src={image2} alt="image1" className="listings-card-image" />
          <div className="listings-card-description">
            <span className="listings-card-title">The Table Set</span>
            <span className="listings-card-price">£155</span>
          </div>
        </motion.div>
        <motion.div variants={cards} initial="hidden" whileInView="visible" >
          <img src={image3} alt="image1" className="listings-card-image" />
          <div className="listings-card-description">
            <span className="listings-card-title">The Modern Armchair</span>
            <span className="listings-card-price">£125</span>
          </div>
        </motion.div>
        <motion.div variants={cards} initial="hidden" whileInView="visible" >
          <img src={image4} alt="image1" className="listings-card-image" />
          <div className="listings-card-description">
            <span className="listings-card-title">The Dresser</span>
            <span className="listings-card-price">£399</span>
          </div>
        </motion.div>
      </div>
      <div className="listings-btn-div">
        <motion.button variants={button} initial="hidden" whileInView="visible" viewport={{once:true}} className="listings-btn">View Collection</motion.button>
      </div>
    </div>
  );
};

export default Listings;
