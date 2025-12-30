import React from 'react';
import './Home.css';
import { HeroSection } from './HeroSection';

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />

      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Our Church Family</h2>
          <p>
            First Naga Baptist Church is a vibrant community of believers committed to sharing
            the Word of God, supporting our Naga brothers and sisters, and reaching out to the
            broader community in the Dallas-Fort Worth area.
          </p>
          <p>
            Founded in 2018, our church serves as a spiritual home for Nagas living in America,
            fostering fellowship, worship, and outreach while maintaining our rich cultural heritage
            and Christian faith.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">📖</div>
              <h3>Share the Word</h3>
              <p>To share the Word and engage with the unreached</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">👨‍👩‍👧‍👦</div>
              <h3>Support Our Community</h3>
              <p>To support Naga students and families in the DFW area</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">🌍</div>
              <h3>Connect Nationwide</h3>
              <p>To connect with the Naga community throughout the United States</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">🤝</div>
              <h3>Build Relationships</h3>
              <p>To strengthen connections among Naga churches and American communities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-section">
        <div className="container">
          <h2>Join Us This Week</h2>
          <div className="service-info">
            <div className="service-card">
              <h3>Sunday Worship Service</h3>
              <p className="service-time">10:00 AM - 12:00 PM</p>
              <p className="service-location">Burton Hill Baptist Church</p>
              <p>Join us for worship, prayer, and fellowship every Sunday morning.</p>
            </div>
            <div className="service-card">
              <h3>Bible Study & Prayer</h3>
              <p className="service-time">Wednesday Evenings</p>
              <p className="service-location">Various Locations</p>
              <p>Weekly Bible study and prayer meetings for spiritual growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Join Our Community?</h2>
          <p>
            Whether you're a longtime member of the Naga community or new to our congregation,
            we welcome you with open arms. Come experience the love of Christ and the warmth
            of our church family.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
