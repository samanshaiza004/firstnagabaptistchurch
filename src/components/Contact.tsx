import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with First Naga Baptist Church</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Visit Us</h2>
              <div className="info-card">
                <h3>Service Location</h3>
                <p>Burton Hill Baptist Church</p>
                <p>DFW Area, Texas</p>
              </div>

              <div className="info-card">
                <h3>Service Times</h3>
                <p><strong>Sunday Worship:</strong> 10:00 AM - 12:00 PM</p>
                <p><strong>Bible Study:</strong> Wednesday Evenings</p>
              </div>

              <div className="info-card">
                <h3>Get Connected</h3>
                <p>
                  We're here to welcome you to our church family. Whether you're looking to join us
                  for worship, need spiritual guidance, or want to get involved in our ministries,
                  please don't hesitate to reach out.
                </p>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="connect-section">
        <div className="container">
          <h2>Connect With Our Community</h2>
          <div className="connect-options">
            <div className="connect-card">
              <h3>New to Our Church?</h3>
              <p>
                We'd love to welcome you! Visit us this Sunday or contact us to learn more
                about our services and community.
              </p>
            </div>

            <div className="connect-card">
              <h3>Need Prayer?</h3>
              <p>
                Our prayer team is here to support you. Share your prayer requests with us,
                and we'll lift you up in prayer.
              </p>
            </div>

            <div className="connect-card">
              <h3>Get Involved</h3>
              <p>
                Join one of our ministries or volunteer opportunities. There are many ways
                to serve and connect with our church family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
