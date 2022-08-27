import '../App.css';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div className='footer-container'>
      <section className='footer-subscription'>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <NavLink to="/about"><h2>About Us</h2></NavLink>
          </div>
          <div class='footer-link-items'>
            <NavLink to="/contact"><h2>Contact Us</h2></NavLink>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              GetSetWeb
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>GetSetWeb © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link envelope'
              href="info@getsetweb.co"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a
              class='social-icon-link linkedin'
              href="https://www.linkedin.com/company/get-set-web/" 
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer