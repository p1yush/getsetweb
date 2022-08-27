import { motion } from "framer-motion";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Section from "../components/Section"

const Homepage = () => {
    return (
      <motion.div className="home"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <Navbar />
      <Section />
      <Card />
      <Footer />
      </motion.div>
    );
};

export default Homepage;

