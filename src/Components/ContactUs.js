import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col } from 'reactstrap';

import './ContactUs.css';

export default function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function sendEmail(e) {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('Thank you. Your email has been successfully sent');
    // emailjs.sendForm('MoahWebApp', 'template_m7j4gnl', e.target, 'user_MEDyu14kNj280fdNXcQp5')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }

  return (
    <form className="container mb-5" onSubmit={sendEmail}>
        <div className='header1'>CONTACT US</div>
        <div className='col-8 form-group mx-auto'>
            <input type="text" className='form-control' placeholder='name' name="user_name" value ={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <input type="email" className='form-control' placeholder='Email Address' name="user_email" value ={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='col-8 form-group pt-2 mx-auto'>
            <textarea className='form-control' cols='30' rows='8' placeholder='Your message' name="message" value ={message} onChange={e => setMessage(e.target.value)}/>
        </div>
        <input type="submit" className='btn-info-custom footer' value="Send Message" />
        {/* <Spinner animation="border" variant="primary" /> */}
    </form>
  );
}