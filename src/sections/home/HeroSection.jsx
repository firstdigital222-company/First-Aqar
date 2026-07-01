import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: '/hero1.png',
      badge: t('hero.badge1'),
      title: t('hero.title1'),
      titleGold: t('hero.titleGold1'),
      subtitle: t('hero.sub1'),
      cta: t('hero.cta1'),
      ctaLink: '/contact',
    },
    {
      id: 2,
      image: '/hero2.png',
      badge: t('hero.badge2'),
      title: t('hero.title2'),
      titleGold: t('hero.titleGold2'),
      subtitle: t('hero.sub2'),
      cta: t('hero.cta2'),
      ctaLink: '/portfolio',
    },
    {
      id: 3,
      image: '/hero3.png',
      badge: t('hero.badge3'),
      title: t('hero.title3'),
      titleGold: t('hero.titleGold3'),
      subtitle: t('hero.sub3'),
      cta: t('hero.cta3'),
      ctaLink: '/services',
    },
  ];

  const goTo = (idx) => {
    setCurrent((idx + slides.length) % slides.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(next, 5500);
    }
    return () => clearInterval(intervalRef.current);
  }, [current, isPlaying]);

  const slide = slides[current];
  const isEn = i18n.language === 'en';

  return (
    <section className={`relative h-[100dvh] min-h-[700px] overflow-hidden flex flex-col ${isEn ? '[direction:ltr]' : '[direction:rtl]'}`}>
      {/* Background Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-[opacity,transform] transition-[opacity,transform]"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1.05)' : 'scale(1)',
            transition: 'opacity 1.2s ease, transform 8s ease',
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050d0ab8] z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050d0a]/85 via-transparent to-[#050d0a]/40 z-2" />

      {/* Content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-end pb-25 pt-25">
        <div className={`max-w-[750px] animate-[fadeInUp_0.9s_ease] ${isEn ? 'text-left' : 'text-right'}`}>
          {/* Badge */}
          <div key={`badge-${current}`} className="inline-flex items-center gap-2 bg-[#2ecc71]/12 border border-[#2ecc71]/25 text-primary-light px-4.5 py-1.75 rounded-[50px] text-[0.85rem] font-bold mb-5 animate-[fadeInDown_0.7s_ease_0.2s_both] backdrop-blur-[10px]">
            {slide.badge}
          </div>

          {/* Main Heading */}
          <h1 key={`title-${current}`} className="text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[1.15] mb-5 animate-[fadeInUp_0.8s_ease_0.3s_both]">
            <span className="text-white inline">{slide.title}</span>{' '}
            <span className="gold-text">{slide.titleGold}</span>
          </h1>

          {/* Subtitle */}
          <p key={`sub-${current}`} className="text-[clamp(0.95rem,2vw,1.2rem)] text-[#e8f5ee]/80 max-w-[580px] leading-[1.8] mb-3 animate-[fadeInUp_0.8s_ease_0.4s_both] mx-0">
            {slide.subtitle}
          </p>

          {/* Tag line */}
          <div className="mb-8 animate-[fadeInUp_0.8s_ease_0.5s_both]">
            <span className="text-primary italic font-semibold">
              {t('hero.tagline')}
            </span>
          </div>

          {/* CTAs */}
          <div key={`cta-${current}`} className="flex items-center gap-4 flex-wrap mb-10 animate-[fadeInUp_0.8s_ease_0.6s_both] justify-center">
            <Link to={slide.ctaLink} className="btn-gold inline-flex items-center gap-2.5">
              <span>{slide.cta}</span>
              {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
            </Link>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.25 bg-[#25d366]/12 border border-[#25d366]/30 text-white rounded-[50px]  font-bold no-underline font-main backdrop-blur-[8px] transition-all duration-300 hover:bg-[#25d366]/20"
            >
              <FaWhatsapp color='#25d366' size={20} />
              <span className='text-white font-bold'>{t('hero.whatsapp')}</span>
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2 animate-[fadeIn_0.8s_ease_0.8s_both] justify-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-2 rounded-[50px] border-none cursor-pointer transition-all duration-500 p-0"
                style={{
                  width: i === current ? '36px' : '8px',
                  background: i === current
                    ? 'linear-gradient(90deg, var(--primary-light), var(--primary-dark))'
                    : 'rgba(255,255,255,0.25)',
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex gap-0 bg-[#091410d9] backdrop-blur-[20px] border border-border-brand rounded-[20px] p-[20px_32px] mt-12 flex-wrap animate-[fadeInUp_0.8s_ease_1s_both] self-center select-none cursor-default mb-16">
          {[
            { num: t('hero.s1_val'), label: t('hero.s1_lbl') },
            { num: t('hero.s2_val'), label: t('hero.s2_lbl') },
            { num: t('hero.s3_val'), label: t('hero.s3_lbl') },
            { num: t('hero.s4_val'), label: t('hero.s4_lbl') },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 px-8 cursor-default"
              style={{
                borderLeft: i !== 0 ? '1px solid var(--border)' : 'none',
              }}
            >
              <span className="text-[1.6rem] font-black text-white leading-none cursor-default">
                {stat.num}
              </span>
              <span className="text-[0.8rem] text-text-muted font-medium cursor-default">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next Arrows */}
      <button onClick={isEn ? prev : next} className="absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#091410b3] border border-border-brand text-primary flex items-center justify-center cursor-pointer backdrop-blur-[10px] transition-all duration-300 hover:scale-110" style={{ right: '20px' }}>
        <FiChevronRight size={22} />
      </button>
      <button onClick={isEn ? next : prev} className="absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#091410b3] border border-border-brand text-primary flex items-center justify-center cursor-pointer backdrop-blur-[10px] transition-all duration-300 hover:scale-110" style={{ left: '20px' }}>
        <FiChevronLeft size={22} />
      </button>



    </section>
  );
};

export default HeroSection;
