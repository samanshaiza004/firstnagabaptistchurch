import React from 'react';
import { HeroSection } from './HeroSection';
import { WelcomeSection } from './welcome-section';
import { ServiceTimes } from './service-time';
import { ObjectivesSection } from './objective-section';
import { MeetTheTeam } from './meet-members';
import { UpcomingEvents } from './upcoming-events';

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />
      <WelcomeSection />
      <ServiceTimes />
      <ObjectivesSection />
      <MeetTheTeam />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
