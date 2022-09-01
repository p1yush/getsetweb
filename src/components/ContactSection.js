import '../App.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
        <h2>Let's Talk</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        <label>Your Email</label>
        <input type="text" name="user_name" />
        <label>Your Phone</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default ContactSection