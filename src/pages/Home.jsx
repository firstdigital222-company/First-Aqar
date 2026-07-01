import React from 'react';
import HeroSection from '../sections/home/HeroSection';
import AboutSnippetSection from '../sections/home/AboutSnippetSection';
import ServicesPreviewSection from '../sections/home/ServicesPreviewSection';
import StatsSection from '../sections/home/StatsSection';
import BeforeAfterSection from '../sections/home/BeforeAfterSection';
import PortfolioPreviewSection from '../sections/home/PortfolioPreviewSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import CTASection from '../sections/home/CTASection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSnippetSection />
      <ServicesPreviewSection />
      <StatsSection />
      <BeforeAfterSection />
      <PortfolioPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;
