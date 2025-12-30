import React from 'react';
import './Ministries.css';

const Ministries: React.FC = () => {
  return (
    <div className="ministries">
      <div className="ministries-hero">
        <div className="container">
          <h1>Our Ministries</h1>
          <p>Serving God through various ministries and outreach programs</p>
        </div>
      </div>

      <section className="ministries-section">
        <div className="container">
          <div className="ministries-intro">
            <p>
              At First Naga Baptist Church, we believe in serving God and our community through
              various ministries that reach out to different groups and address various needs.
              Our ministries reflect our commitment to spiritual growth, fellowship, and outreach.
            </p>
          </div>

          <div className="ministries-grid">
            <div className="ministry-card">
              <div className="ministry-icon">👨‍👩‍👧‍👦</div>
              <h3>Family Ministry</h3>
              <p>
                Supporting Naga families in the DFW area through counseling, fellowship events,
                and resources for spiritual and emotional well-being.
              </p>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">🎓</div>
              <h3>Youth Ministry</h3>
              <p>
                Mentoring and guiding young people in their faith journey, providing opportunities
                for growth, service, and fellowship.
              </p>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">📚</div>
              <h3>Bible Study</h3>
              <p>
                Regular Bible study groups and classes for all ages, fostering deeper understanding
                of God's Word and spiritual growth.
              </p>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">🎵</div>
              <h3>Worship Ministry</h3>
              <p>
                Leading worship services with hymns, music, and praise that honor God and inspire
                our congregation in worship.
              </p>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">🤝</div>
              <h3>Outreach Ministry</h3>
              <p>
                Reaching out to the broader community, including the Indian subcontinent community
                in DFW, to share God's love and build relationships.
              </p>
            </div>

            <div className="ministry-card">
              <div className="ministry-icon">🌍</div>
              <h3>Missions</h3>
              <p>
                Supporting missions work and connecting with Naga communities throughout the
                United States and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="get-involved">
        <div className="container">
          <h2>Get Involved</h2>
          <p>
            We welcome everyone to participate in our ministries. Whether you have specific skills,
            time to volunteer, or simply a desire to serve, there's a place for you in our church family.
          </p>
          <div className="involvement-options">
            <div className="option">
              <h4>Volunteer</h4>
              <p>Join our volunteer teams for various church activities and events.</p>
            </div>
            <div className="option">
              <h4>Lead a Ministry</h4>
              <p>Take leadership in one of our ministry areas based on your passion and calling.</p>
            </div>
            <div className="option">
              <h4>Participate</h4>
              <p>Join existing ministry groups and activities that interest you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
