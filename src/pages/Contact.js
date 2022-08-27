import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import "../App.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div className="contact"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <Navbar />
    <div className="contact-heading">
    <h1>We'd Love To Hear </h1>
    <h1>From You!</h1>
    </div>
    <ContactSection />
    <Footer />
    </motion.div>
  );
};

export default Contact;
