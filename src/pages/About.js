import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
      <div className="about">
      <Navbar />
       <div className='section'>
       <div className='section-container'>
       <h1>About Us</h1>
       <p>Get Set Web is a platform for small to medium scale businesses to get themselves digitalized through our website development services. No pre-made templates or designs, Getsetweb will provide you with the customized website as per your choice that best suits your pocket.
        We are a team of highly dedicated and committed website developers, who will be available to assist their clients, each and every second.</p>
     </div>
     <div className='image'>
       <img src="images/proimage.png" alt='logo'/>
     </div>
     </div>
     <Footer />
     </div>
    );
  };

export default About;