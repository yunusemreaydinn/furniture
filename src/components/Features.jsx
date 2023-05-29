import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiPlantLine } from "react-icons/ri";
import { motion } from "framer-motion";

const featurestitle = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

const containerVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.7,
			duration: 0.2,
			when: 'beforeChildren',
			staggerChildren: 0.4,
		}
	},
}

const listItem = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1,
	},
}


const Features = () => {
  return (
    <div className="features">
      <motion.div
        variants={featurestitle}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        className="features-title"
      >
        What makes us different
      </motion.div>

      <motion.div className="container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once:true}}>
        <motion.li variants={listItem} className="features-content">
          <FaShippingFast className="features-content-icon" />
          <div className="features-content-title">Next day as standard</div>
          <div className="features-content-description">
            Order before 3pm and get your order the next day as standard
          </div>
        </motion.li>
        <motion.li variants={listItem} className="features-content">
          <TiInputChecked className="features-content-icon" />
          <div className="features-content-title">Made by true artisans</div>
          <div className="features-content-description">
            Handmade crafted goods made with real passion and craftmanship
          </div>
        </motion.li>
        <motion.li variants={listItem} className="features-content">
          <AiOutlineCreditCard className="features-content-icon" />
          <div className="features-content-title">Unbeatable prices</div>
          <div className="features-content-description">
            For our materials and quality you won’t find better prices anywhere
          </div>
        </motion.li>
        <motion.li variants={listItem} className="features-content">
          <RiPlantLine className="features-content-icon" />
          <div className="features-content-title">Recycled packaging</div>
          <div className="features-content-description">
            We use 100% recycled packaging to ensure our footprint is manageable
          </div>
        </motion.li>
      </motion.div>

    </div>
  );
};

export default Features;
