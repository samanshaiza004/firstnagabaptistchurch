import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Join us for worship, fellowship, and spiritual growth</p>
        </div>
      </div>

      <section className="services-section">
        <div className="container">
          <div className="service-details">
            <div className="service-card main-service">
              <h2>Sunday Worship Service</h2>
              <div className="service-info">
                <p className="time">🕐 10:00 AM - 12:00 PM</p>
                <p className="location">📍 Burton Hill Baptist Church</p>
                <p className="description">
                  Join us every Sunday for worship, prayer, and fellowship. Our services include
                  hymns, scripture reading, and messages that inspire and encourage spiritual growth.
                </p>
              </div>
            </div>

            <div className="service-card">
              <h2>Midweek Bible Study</h2>
              <div className="service-info">
                <p className="time">🕐 Wednesday Evenings</p>
                <p className="location">📍 Various Locations</p>
                <p className="description">
                  Weekly Bible study and prayer meetings for deeper understanding of God's Word
                  and fellowship with fellow believers.
                </p>
              </div>
            </div>

            <div className="service-card">
              <h2>Special Services</h2>
              <div className="service-info">
                <p className="description">
                  We also host special services throughout the year including Christmas celebrations,
                  Easter services, and other important occasions in the life of our church community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-grid">
            <div className="event-card">
              <h3>Regular Sunday Service</h3>
              <p className="date">Every Sunday</p>
              <p>10:00 AM - 12:00 PM at Burton Hill Baptist Church</p>
            </div>
            <div className="event-card">
              <h3>Bible Study</h3>
              <p className="date">Every Wednesday</p>
              <p>Evening sessions - Location varies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
