import React from 'react';
import { AboutHero } from './about-hero';
import { HistorySection } from './history-section';
import { FoundersSection } from './founders-section';
import { ObjectivesDetail } from './objectives-detail';

const About: React.FC = () => {
  return (
    <div className="about">
      <AboutHero />
      <HistorySection />
      <FoundersSection />
      <ObjectivesDetail />
    </div>
  );
};

export default About;
