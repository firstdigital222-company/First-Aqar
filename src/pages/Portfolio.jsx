import React from 'react';
import OurProjectsShowcaseSection from '../sections/portfolio/OurProjectsShowcaseSection';
import PortfolioVideosSection from '../sections/portfolio/PortfolioVideosSection';
import PortfolioDesigns3D2DSection from '../sections/portfolio/PortfolioDesigns3D2DSection';
import PortfolioFinishingSection from '../sections/portfolio/PortfolioFinishingSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import CTASection from '../sections/home/CTASection';

const Portfolio = () => {
  return (
    <main className="overflow-hidden">
      {/* Flagship Signature Projects Album Section (Our 3 Projects) */}

      {/* 1. Videos & Live Tours Section */}
      <PortfolioVideosSection />

      {/* 2. 2D & 3D Engineering & Interior Design Section */}
      <PortfolioDesigns3D2DSection />

      {/* 3. Executed Finishing & Fit-out Section */}
      <PortfolioFinishingSection />
      <OurProjectsShowcaseSection />


      {/* Client Testimonials & Trust */}
      <TestimonialsSection />

      {/* Contact / Consultation Call to Action */}
      <CTASection />
    </main>
  );
};

export default Portfolio;
