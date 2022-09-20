import '../App.css';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div className='footer-container'>
      <section className='footer-subscription'>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <NavLink to="/about"><h2>About Us</h2></NavLink>
          </div>
          <div className='footer-link-items'>
            <NavLink to="/contact"><h2>Contact Us</h2></NavLink>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              GetSetWeb
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>GetSetWeb © 2022</small>
          <div className='social-icons'>
            <a
              className='social-icon-link envelope'
              href="https://api.whatsapp.com/send/?phone=%2B918920265833&text&type=phone_number&app_absent=0"
              target='_blank'
              rel="noopener noreferrer"
              aria-label='Facebook'
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
            <a
              className='social-icon-link linkedin'
              href="https://www.linkedin.com/company/get-set-web/" 
              target='_blank'
              rel="noopener noreferrer"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer