import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import './contact.css'

const Contact = () => {

   

     const form = useRef();


      const [done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tkwgb8n', 'template_07yi6ke', form.current, 'DD7YvA62j8pdAwexw')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
            

            <div className="blur s-blur1" style={{background: "ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='message'/>
                <input type="submit" value='Send' className="button"/>

                <div className="blur c-blur1" style={{ background: 'var(--purple)'}}></div>

                <span>{done && 'Thanks for contacting me'}</span>
            
            </form>
        </div>
    </div>
  )
}

export default Contact