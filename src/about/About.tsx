import React from "react";
import { AboutHero } from "./about-hero";
import { HistorySection } from "./history-section";
import { FoundersSection } from "./founders-section";
import { ObjectivesDetail } from "./objectives-detail";

const About: React.FC = () => {
  return (
    <div className="about">
      <AboutHero />
      <ObjectivesDetail />
      <HistorySection />
      <FoundersSection />
    </div>
  );
};

export default About;
