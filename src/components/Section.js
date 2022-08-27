import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Typewriter from 'typewriter-effect';
import '../App.css';
import { Button } from './Button';


function Section() {
  return (
    <div className='section'>
    <div className='hero-container'>
      <div className='typing'>
      <Typewriter
      onInit ={(typewriter) => {
        typewriter
        .typeString("You Think, We Create")
        .pauseFor(1000)
        .start();
      }} />
      </div>
    <p>Build a website the way you want</p>
    <div className='hero-btns'>
      <NavLink to="/contact"><Button 
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
      >
        Get in Touch   
      </Button></NavLink>
      <HashLink smooth to='#Designs'>
       <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Website Template <i class="fa-solid fa-circle-arrow-right"></i>
        </Button>
        </HashLink>
    </div>
  </div>
  <div className='image'>
    <img src="images/proimage.png" alt='logo'/>
  </div>
  </div>
  );
}

export default Section;