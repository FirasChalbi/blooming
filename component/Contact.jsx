import React from 'react';

function Contact() {
  return (
    <div className="contact-wrap" style={{marginBottom: "100px", marginTop: "30px"}}>
      <div className="contact-in">
        <h1>Contact Info</h1>
        <h2><i className="fa fa-phone" aria-hidden="true"></i> Phone</h2>
        <p>123-456-789</p>
        <h2><i className="fa fa-envelope" aria-hidden="true"></i> Email</h2>
        <p>info@democompany.com</p>
        <h2><i className="fa fa-map-marker" aria-hidden="true"></i> Address</h2>
        <p>Madina, Sfax, Tunisia</p>
        <ul>
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div className="contact-in">
        <h1>Send a Message</h1>
        <form>
          <input type="text" placeholder="Full Name" className="contact-in-input" />
          <input type="text" placeholder="Email" className="contact-in-input" />
          <input type="text" placeholder="Subject" className="contact-in-input" />
          <textarea placeholder="Message" className="contact-in-textarea"></textarea>
          <input type="submit" value="SUBMIT" className="contact-in-btn" />
        </form>
      </div>
      <div className="contact-in">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403302.6352629244!2d9.561068624817383!3d34.28582395320754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d36abafa6f6d1d%3A0x1874d87be3946e93!2sTunisia!5e0!3m2!1sen!2stn!4v1647947452827!5m2!1sen!2stn" width="100%" height="400" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  );
}

export default Contact;
