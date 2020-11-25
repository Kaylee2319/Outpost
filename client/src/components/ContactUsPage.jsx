import React from 'react';
import '../css/ContactUsPage.css';
import NavBar from './NavBar';
import Footer from './footer';
const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="contactTitle">
        <h1 className="contactTitle">Contact Us</h1>
        <h3 className="contactTitle1">Have a question or feedback?</h3>
        <h3 className="contactTitle1">Leave us a message!</h3>
      </div>
      <form
        className="contactform"
        action="https://formspree.io/f/meqplaao"
        method="POST"
      >
        <div>
          <div htmlFor="firstName">First Name:</div>
          <input className="firstNameContact" type="text" name="name" />
        </div>
        <div>
          <div htmlFor="lastName">Last Name:</div>
          <input className="lastNameContact" type="text" name="name" />
        </div>
        <div>
          <div htmlFor="message">Message:</div>
          <textarea
            className="messageContact"
            name="messageContact"
            placeholder="Questions & Feedback here..."
          ></textarea>
        </div>
        <div className="sendbutton">
          <button type="submit" className="contactSend">
            SEND
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default ContactUs;
