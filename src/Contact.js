import React from 'react'
import emailjs from "emailjs-com"
//import React, { useRef } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Navbar from './Navbar'

function Contact() {
   const message="msg"
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_rifei2p', 'template_o6m4opj', e.target, 'nII7AWRtMY9BtxBGG')
        .then((msg) => {
            msg="Message sent successfully"
            setTimeout(function () {
                msg=""
            },5000)
            e.target.reset()
           
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
}

  return (
<>
    <Navbar></Navbar>

   <div id="Contact">
    <div className='container'>
    <div className="row">
    <div className='contact-left'>
<h1 className='sub-title'>Contact Me</h1>
<p> <FontAwesomeIcon icon={faPaperPlane} className="icons"/>   naveenthiwary20@gmail.com</p>
<p><FontAwesomeIcon icon={faPhone} className="icons"/>   +91 8608270670</p>
<div className='social-icons'>
<a href="https://mail.google.com/mail/u/1/#inbox?compose=new"  class=""><FontAwesomeIcon icon={faEnvelope}/></a>
<a href="https://www.linkedin.com/messaging/thread/2-YTVkMzMxZWItZjVkYi00YzQ2LWI1MmEtZmQ4ZTU5MzYzMDFmXzAxMA==/"  class=""><FontAwesomeIcon icon={faLinkedin}/></a>
</div>
<a href="../skillsimg/Naveen-Resume.pdf" download id="click">Download CV</a>
    </div>

    <div className='contact-right'>
<form  onSubmit={sendEmail} >
    <input type="text" name="Name" placeholder='Your Name' required></input>
    <input type="email" name="Email" placeholder='Your Email' required></input>
    <textarea name='Message' rows='6' placeholder='Your Message'></textarea>
    <button type='submit' class="click" >Submit</button>
</form>

    </div>

    </div>
    </div>
   </div>
   </>
  )
}

export default Contact
