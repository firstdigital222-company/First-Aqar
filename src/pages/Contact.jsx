import React from 'react';
import ContactFormSection from '../sections/contact/ContactFormSection';
import CTASection from '../sections/home/CTASection';
import FAQAccordionSection from '../sections/faq/FAQAccordionSection';

const Contact = () => {
  return (
    <main>
      <ContactFormSection />
      <FAQAccordionSection />    
      <CTASection />

    </main>
  );
};

export default Contact;
