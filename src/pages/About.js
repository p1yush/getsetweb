import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Specialization from "../components/Specialization";

const About = () => {
    return (
      <div className="about">
      <Navbar />
       <div className='about-section'>
       <div className='about-container'>
       <h1>About Us</h1>
       <p>Get Set Web is a platform for small to medium scale businesses to get themselves digitalized through our website development services. No pre-made templates or designs, Getsetweb will provide you with the customized website as per your choice that best suits your pocket.</p><br/>
        <p>We are a team of highly dedicated and committed website developers, who will be available to assist their clients, each and every second.</p>
     </div>
     <div className='about-image'>
       <img src="images/Aboutimage.png" alt='logo'/>
     </div>
     </div>
     <hr />
     <Specialization />
     <Footer />
     </div>
    );
  };

export default About;