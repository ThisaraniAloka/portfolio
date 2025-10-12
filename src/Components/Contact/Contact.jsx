import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "d0b78b9d-09da-42e6-9010-11c6277ce169");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message || "Message sent successfully!");
        event.target.reset(); // clear form after submission
      } else {
        alert("Submission failed. Please try again.");
        console.log("Web3Forms error:", data);
      }
    } catch (err) {
      alert("Submission failed. Check your internet connection.");
      console.error("Fetch error:", err);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        {/* LEFT SIDE */}
        <div className="contact-left" data-aos="fade-right">
          <h1>Let's talk</h1>
          <p>
            I'm an undergraduate currently open to taking on new projects. If you have an idea
            or project you'd like me to work on, feel free to reach out anytime—I’d love to hear
            from you!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>thisaranialoka7@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+94 71 404 5769</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Namal Uyana Road, Mukalanhena, Bingiriya</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form onSubmit={onSubmit} className="contact-right" data-aos="fade-left">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required />
          
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
