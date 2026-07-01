import React from 'react';
import PortfolioGallerySection from '../sections/portfolio/PortfolioGallerySection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import CTASection from '../sections/home/CTASection';

const Portfolio = () => {
  return (
    <main>
      <PortfolioGallerySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Portfolio;
