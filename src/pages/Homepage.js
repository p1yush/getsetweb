import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Section from "../components/Section";

const Homepage = () => {
    return (
      <div className="home">
      <Navbar />
      <Section />
      <Card />
      <Footer />
      </div>
    );
};

export default Homepage;
