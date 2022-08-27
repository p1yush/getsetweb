import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    return (
      <div className="about">
      <Navbar />
       <div className='about-section'>
       <div className='about-container'>
       <h1>About Us</h1>
       <p>Get Set Web is a platform for small to medium scale businesses to get themselves digitalized through our website development services. No pre-made templates or designs, Getsetweb will provide you with the customized website as per your choice that best suits your pocket.</p><br/>
        <p>We are a team of highly dedicated and committed website developers, who will be available to assist their clients, each and every second.</p><br />
        <p>We are specialised in designing and developing your own website, customised by you, handled by us. Our website developers will contact you once our business development team connects with you.</p>
     </div>
     <div className='about-image'>
       <img src="images/Specializationimage.png" alt='logo'/>
     </div>
     </div>
     <Footer />
     </div>
    );
  };

export default About;