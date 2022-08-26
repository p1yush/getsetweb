import '../App.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function ContactSection() {
      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
      return (
        <div class="container">
  <div class="form-container">
    <div class="left-container">
      <div class="left-inner-container">
      <img src="images/Contactimage.png" alt=""/>
    </div> 
      </div>
    <div class="right-container">
      <div class="right-inner-container">
      <form ref={form} onSubmit={sendEmail}>
      <h2 class="sm-view">Let's Chat</h2>
       Name <input type="text" placeholder="Name *"/> 
       Email <input type="email" placeholder="Email *" />
			 Phone <input type="phone" placeholder="Phone" />
       Message<textarea rows="6" placeholder="Message"></textarea>
			<button className='contact-button'>Submit</button>
		</form>
      </div>
    </div>
  </div>
</div>
    )
}

export default ContactSection