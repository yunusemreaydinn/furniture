import React from "react";
import sofa from "../assets/images/sofa.png";
import dandy from "../assets/images/product5.png";
import dandy2 from "../assets/images/product6.png";
import { motion } from 'framer-motion'


const cards = {
  hidden: {filter:"blur(10px)"},
  visible: {filter:"blur(0px)", transition: {duration:0.5, delay:0.3}}
}

const button = {
  hidden: {opacity:0, scale:0.8},
  visible: {opacity:1, scale:1, transition:{type:"spring", duration:0.8, delay:0.2}}
}


const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-title">Our popular products</div>
      <div className="popular-list">
        <div className="popular-product-card">
          <motion.img variants={cards} initial="hidden" whileInView="visible" src={sofa} alt="sofa" className="sofa" />
          <div className="listings-card-description">
          <span className="listings-card-title">The Poplar suede sofa</span>
          <span className="listings-card-price">£980</span>
          </div>
        </div>
        <div className="popular-product-card">
          <motion.img variants={cards} initial="hidden" whileInView="visible" src={dandy} alt="sofa" className="dandy" />
          <div className="listings-card-description">
          <span className="listings-card-title">The Kitchen Table set</span>
          <span className="listings-card-price">£250</span>
          </div>
        </div>
        <div className="popular-product-card">
          <motion.img variants={cards} initial="hidden" whileInView="visible" src={dandy2} alt="sofa" className="dandy" />
          <div className="listings-card-description">
          <span className="listings-card-title">The Armchair</span>
          <span className="listings-card-price">£250</span>
          </div>
        </div>
      </div>
      <div className="listings-btn-div">
        <motion.button variants={button} initial="hidden" whileInView="visible" viewport={{once:true}} className="listings-btn">View Collection</motion.button>
      </div>
    </div>
  );
};

export default Popular;
