import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const Stars = ({ count }) => (
  <div className="flex gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`text-base ${i < count ? 'text-gold' : 'text-text-dim'}`}>★</span>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto]   = useState(true);
  const ref = useScrollReveal();

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.h1_title').split(' — ')[0],
      title: t('testimonials.h1_title').includes(' — ') ? t('testimonials.h1_title').split(' — ')[1] : t('testimonials.h1_title'),
      avatar: '👤',
      rating: 5,
      text: t('testimonials.h1_text'),
    },
    {
      id: 2,
      name: t('testimonials.h2_title').split(' — ')[0],
      title: t('testimonials.h2_title').includes(' — ') ? t('testimonials.h2_title').split(' — ')[1] : t('testimonials.h2_title'),
      avatar: '👤',
      rating: 5,
      text: t('testimonials.h2_text'),
    },
    {
      id: 3,
      name: t('testimonials.h3_title').split(' — ')[0],
      title: t('testimonials.h3_title').includes(' — ') ? t('testimonials.h3_title').split(' — ')[1] : t('testimonials.h3_title'),
      avatar: '👤',
      rating: 5,
      text: t('testimonials.h3_text'),
    },
  ];

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAuto, testimonials.length]);

  const goTo = (i) => {
    setIsAuto(false);
    setCurrent(i);
    setTimeout(() => setIsAuto(true), 8000);
  };

  const currentTestimonial = testimonials[current] || testimonials[0];

  return (
    <section className="section section-dark bg-grid relative overflow-hidden" ref={ref}>
      <div className="glow-orb glow-orb-gold w-[500px] h-[400px] top-1/2 right-[-100px] -translate-y-1/2 opacity-20" />
      <div className="glow-orb glow-orb-green w-[400px] h-[400px] top-1/2 left-[-100px] -translate-y-1/2 opacity-15" />

      <div className="container relative z-1">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">{t('testimonials.badge')}</span>
          <h2 className="section-title">
            {t('testimonials.title')}
          </h2>
          <p className="section-subtitle">
            {t('testimonials.sub')}
          </p>
          <div className="section-divider" />
        </div>

        {/* Big Featured Testimonial */}
        <div className="reveal bg-white border border-primary/15 rounded-[24px] p-[48px_56px] relative max-w-[800px] mx-auto mb-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
          <div className="absolute top-4 right-8 text-[6rem] leading-none text-primary opacity-15 font-serif">"</div>
          <p className="text-[1.1rem] text-text-main leading-[1.9] italic mb-8 relative z-1">
            {currentTestimonial.text}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-light to-primary-dark flex items-center justify-center text-[1.6rem] flex-shrink-0">
              {currentTestimonial.avatar}
            </div>
            <div>
              <Stars count={currentTestimonial.rating} />
              <h4 className="text-text-main font-bold mt-1 text-base">
                {currentTestimonial.name}
              </h4>
              <p className="text-text-muted text-[0.85rem]">
                {currentTestimonial.title}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="reveal flex gap-3 justify-center flex-wrap mb-6">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              className={`flex flex-col items-center gap-1.5 p-[10px_14px] rounded-[14px] cursor-pointer transition-all duration-300 font-main min-w-[70px] ${
                i === current ? 'border-2 border-primary bg-primary/10 scale-108' : 'border-2 border-border-brand bg-bg-card scale-100'
              }`}
            >
              <span className="text-[1.3rem]">{t.avatar}</span>
              <span className={`text-[0.75rem] font-semibold text-center leading-[1.3] ${
                i === current ? 'text-primary' : 'text-text-muted'
              }`}>
                {t.name}
              </span>
            </button>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-2 rounded-[50px] border-none cursor-pointer transition-all duration-400 p-0"
              style={{
                width: i === current ? '32px' : '8px',
                background: i === current
                  ? 'linear-gradient(90deg, var(--primary), var(--primary-dark))'
                  : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="reveal flex justify-center gap-16 flex-wrap">
          {[
            { num: '500+', label: t('testimonials.happy_clients') },
            { num: '4.9/5', label: t('testimonials.rating') },
            { num: '98%', label: t('testimonials.recommend') },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[1.4rem] font-black text-text-main">{item.num}</span>
              <span className="text-[0.8rem] text-text-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
