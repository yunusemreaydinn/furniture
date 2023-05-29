import React from "react";
import sofa2 from "../assets/images/sofa2.png";
import { motion } from 'framer-motion'

const title = {
  hidden: { opacity: 0 },
  visible: {opacity:1, transition:{duration:1, delay:0.2}}
}

const desc = {
  hidden: { opacity: 0 },
  visible: {opacity:1, transition:{duration:1, delay:0.5}}
}

const desc2 = {
  hidden: { opacity: 0 },
  visible: {opacity:1, transition:{duration:1, delay:0.8}}
}

const img = {
  hidden: { opacity: 0 },
  visible: {opacity:1, transition:{duration:1, delay:0.8}}
}

const button = {
  hidden: {opacity:0, scale:0.8},
  visible: {opacity:1, scale:1, transition:{type:"spring", duration:0.8, delay:0.2}}
}

const Commercial = () => {
  return (
    <div className="commercial">
      <div className="commercial-left">
        <div className="commercial-left-description">
          <motion.span className="commercial-left-title"
          variants={title} initial="hidden" whileInView="visible" viewport={{once:true}}>
            From a studio in London to a global brand with over 400 outlets
          </motion.span>
          <motion.p style={{paddingTop:"35px"}}
          variants={desc} initial="hidden" whileInView="visible" viewport={{once:true}}>
            When we started Furniture, the idea was simple. Make high quality
            furniture affordable and available for the mass market.{" "}
          </motion.p>
          <motion.p
          variants={desc2} initial="hidden" whileInView="visible" viewport={{once:true}}>
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </motion.p>
        </div>
        <motion.button
        variants={button} initial="hidden" whileInView="visible" viewport={{once:true}}
        className="commercial-btn">Get in touch</motion.button>
      </div>
      <div>
        <motion.img 
        variants={img} initial="hidden" whileInView="visible" viewport={{once:true}}
        src={sofa2} alt="sofa 2" className="commercial-img" />
      </div>
    </div>
  );
};

export default Commercial;
