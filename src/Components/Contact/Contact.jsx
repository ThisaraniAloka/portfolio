import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg' 
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "/*put access key*/");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
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
        <p>thisaranialoka07@gmail.com</p>
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
    <input type="text" placeholder="Enter your name" name="name" />
    <label>Your Email</label>
    <input type="email" placeholder="Enter your email" name="email" />
    <label>Write your message here</label>
    <textarea name="message" rows="8" placeholder="Enter your message" />
    <button type="submit" className="contact-submit">
      Submit now
    </button>
  </form>
</div>

    </div>
  )
}

export default Contact