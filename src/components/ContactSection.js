import '../App.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactSection = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const phone = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yplio6i",
        "template_eqbgua8",
        form.current,
        "518W0plzoPMMukERO"
      )
      .then(
        (result) => {
          
          
        },
        (error) => {
          
        }
      );
      e.target.reset();
      toast.success("Message Sent");
  };
    
      return (
  <div className="container">
  <div className="form-container">
    <div className="left-container">
      <div className="left-inner-container">
      <img src="images/Contactimage.png" alt=""/>
    </div> 
      </div>
    <div className="right-container">
      <div className="right-inner-container">
        <h2>Let's Talk</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" ref={name}/>
        <label>Your Email</label>
        <input type="email" name="user_email" ref={email}/>
        <label>Your Phone</label>
        <input type="text" name="user_phone" ref={phone} />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        <ToastContainer />
      </form>
      </div>
    </div>
  </div>
</div>
    )
}

export default ContactSection