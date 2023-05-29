import welcome from "../assets/images/welcome.png";
import { motion } from "framer-motion";

const headerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

const headerlefttop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};

const headerimg = {
  hidden: { y: 1000, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3,
      duration: 1,
      type: "spring",
      stiffness: 500,
      damping: 100,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const headerleftbot = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1.5,
    },
  },
};

const headerbutton = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 2.5, duration: 1 } },
};

const Header = () => {
  return (
    <div className="header-wrapper">
      <motion.div
        className="header"
        variants={headerAnimation}
        initial="hidden"
        animate="visible"
        style={{ overflow: "hidden" }}
      >
        <div className="header-left" style={{ overflow: "hidden" }}>
          <div className="header-left-top">
            <motion.div
              variants={headerlefttop}
              initial="hidden"
              animate="visible"
            >
              <motion.span>The furniture brand for the future,</motion.span>{" "}
              <motion.span>with timeless designs</motion.span>
            </motion.div>
            <motion.button
              variants={headerbutton}
              initial="hidden"
              animate="visible"
              className="collection-btn"
            >
              View collection
            </motion.button>
          </div>
          <motion.div
            variants={headerleftbot}
            initial="hidden"
            animate="visible"
            className="header-left-bot"
            style={{maxWidth:"80%"}}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            convallis massa at sapien aliquet condimentum. Nulla tincidunt orci
            in consequat porttitor. 
          </motion.div>
        </div>
        <motion.img
          variants={headerimg}
          initial="hidden"
          animate="visible"
          src={welcome}
          alt="welcome image"
          className="welcome-img"
        />
      </motion.div>
    </div>
  );
};

export default Header;
