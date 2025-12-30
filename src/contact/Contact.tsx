import React from 'react';
import { ContactHero } from './contact-hero';
import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';
import { LocationMap } from './location-map';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <ContactHero />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <LocationMap />
    </div>
  );
};

export default Contact;
