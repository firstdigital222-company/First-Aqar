import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const ServicesHeroSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  return (
    <section ref={ref} className="relative min-h-[500px] bg-bg overflow-hidden pt-32 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero1.png')] bg-cover bg-center opacity-85" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(5,13,10,0.95)] to-[rgba(13,92,74,0.3)]" />

      {/* Content */}
      <div className="container relative z-[2] pt-[120px] pb-[80px]">
        <div className={`reveal max-w-[700px] ${isEn ? 'text-left' : 'text-right'}`}>
          <span className="section-badge">{t('services.badge')}</span>

          <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-[1.25] mt-4 mb-5">
            {isEn ? 'Integrated Solutions from' : 'حلول متكاملة من'}
            <br />
            <span className="gradient-text">{isEn ? 'Concept to Execution' : 'الفكرة للتنفيذ'}</span>
          </h1>

          <p className="text-white text-[1.1rem] font-light leading-[1.8] mb-8">
            {isEn
              ? 'We provide a comprehensive range of interior and exterior design and finishing services to transform any space into an exceptional experience.'
              : 'نقدّم طيفاً شاملاً من خدمات التصميم والتشطيب الداخلي والخارجي لتحويل كل مساحة لتجربة استثنائية'}
          </p>

          <div className={`flex gap-4 flex-wrap ${isEn ? 'justify-start' : 'justify-end'}`}>
            <Link to="/contact" className="btn-gold">
              <span>{t('hero.cta1')}</span>
              {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
            </Link>
            <Link to="/portfolio" className="btn-outline">
              <span>{t('hero.cta2')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
