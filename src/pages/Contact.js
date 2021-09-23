import React from 'react';

export default function Contact() {
  return (
    <div className="contact-container l-flex--center">
      <div className="contact-inner-container">
        <p>Contact Us</p>
        <form className='form'>
          <label for='name'>Name</label>
          <input id='name' type='text'/>

          <label for='email'>Email</label>
          <input id='email' type='email'/>

          <label for='message'>Message</label>
          <textarea id='message'/>
        </form>
      </div>
    </div>
  );
}
