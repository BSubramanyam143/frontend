import React from 'react';
import './contact.css';
import MailIcon from '../../assets/mail_icon.svg';
import LocationIcon from '../../assets/location_icon.svg';
import CallIcon from '../../assets/call_icon.svg';


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "69f1bec2-d852-4651-9602-6bb3d34c4dfb");

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
    alert(res.message)
    }
  };
  return (
    <div id="Contact"className="contact">
      <div className="contact-title">
        <h1>Contact me</h1>
        <hr></hr>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Hire Me</h1>
          <p> If you want to hire me, you can contact me anytime.</p>
        
        <div className="contact-details">
          <div className="contact-detail">
            <img src={MailIcon} alt="Mail icon" />
            <p>viratsubbu464@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={CallIcon} alt="Call icon" />
            <p>+91 7995273904</p>
          </div>
          <div className="contact-detail">
            <img src={LocationIcon} alt="Location icon" />
            <p>Hyderabad</p>
           </div>
           </div>
  
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name:</label>
          <input type="text" placeholder="Enter your name" name="name" id="name" />
          <label htmlFor="email">Your E-mail:</label>
          <input type="email" placeholder="Enter your E-mail" name="email" id="email" />
          <label htmlFor="message" >Write your message here:</label>
          <textarea name="message" placeholder="Enter your text" rows="8" id="message"></textarea>
          <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
