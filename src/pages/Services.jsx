import React from 'react';
import ServicesHeroSection from '../sections/services/ServicesHeroSection';
import DetailedServicesSection from '../sections/services/DetailedServicesSection';
import PortfolioCategoriesSection from '../sections/services/PortfolioCategoriesSection';
import CTASection from '../sections/home/CTASection';

const Services = () => {
  return (
    <main>
      <ServicesHeroSection />
      <DetailedServicesSection />
      <PortfolioCategoriesSection />
      <CTASection />
    </main>
  );
};

export default Services;
