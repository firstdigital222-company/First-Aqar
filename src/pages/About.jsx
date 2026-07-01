import React from 'react';
import AboutHeroSection from '../sections/about/AboutHeroSection';
import VisionMissionSection from '../sections/about/VisionMissionSection';
import StatsSection from '../sections/home/StatsSection';
import CTASection from '../sections/home/CTASection';

const About = () => {
  return (
    <main>
      <AboutHeroSection />
      <VisionMissionSection />
      <StatsSection />
      <CTASection />
    </main>
  );
};

export default About;
