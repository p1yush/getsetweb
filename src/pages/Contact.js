import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import "../App.css";

const Contact = () => {
  return (
    <div className="contact">
    <Navbar />
    <div className="contact-heading">
    <h1>We'd Love To Hear </h1>
    <h1>From You!</h1>
    </div>
    <ContactSection />
    <Footer />
    </div>
  );
};

export default Contact;
