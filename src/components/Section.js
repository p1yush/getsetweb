import '../App.css';
import { Button } from './Button';

function Section() {
  return (
    <div className='hero-container'>
    <h1>ADVENTURE AWAITS</h1>
    <p>What are you waiting for?</p>
    <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
      >
        Get in Touch   
      </Button>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Designs for you <i class="fa-solid fa-circle-arrow-right"></i>
        </Button>
    </div>
  </div>
  );
}

export default Section;