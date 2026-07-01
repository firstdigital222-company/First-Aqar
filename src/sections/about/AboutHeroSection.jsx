import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const AboutHeroSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  return (
    <section ref={ref} className="relative bg-bg-brand overflow-hidden min-h-[550px] pt-32 pb-12 ">
      <div className="absolute inset-0 bg-[url(/hero2.png)] bg-cover bg-center opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#050d0afd] to-[#0d5c4a33]" />

      <div className="container relative z-2 pt-[140px] pb-20">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-14 items-center">

          {/* Left */}
          <div className={`reveal ${isEn ? 'text-left' : 'text-right'}`}>
            <span className="section-badge">{t('about_snippet.badge')}</span>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[1.25] mt-4 mb-5">
              {isEn ? 'Transforming Spaces' : 'نحوّل المساحات'}
              <br />
              <span className="gradient-text">{isEn ? 'Into Masterpieces' : 'لتحف فنية'}</span>
            </h1>
            <p className="text-white text-base font-bold leading-[1.85] mb-7">
              {isEn
                ? 'At First Aqar, we believe every space has a soul… and our mission is to reveal this soul in the best possible way. We started with the goal of providing design and finishing services of high quality and in a professional style that matches the latest market trends.'
                : 'في "فيرست عقار" نؤمن أن كل مساحة لها روح… ومهمتنا نُظهر هذه الروح بأفضل شكل ممكن. بدأنا بهدف تقديم خدمات تصميم وتشطيب بجودة عالية وبأسلوب احترافي يواكب أحدث الاتجاهات في السوق.'}
            </p>
            <Link to="/contact" className="btn-gold">
              <span>{t('faq.btn')}</span>
              {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
            </Link>
          </div>

          {/* Right: Quote Card */}
          <div className="reveal-left">
            <div className="bg-bg-glass border border-border-brand rounded-[24px] p-9 backdrop-blur-[20px]">
              <div className="text-[3rem] text-primary opacity-30 font-['Georgia'] leading-none mb-3">"</div>
              <p className="text-[1.15rem] italic text-text-main leading-[1.85] mb-5">
                {isEn
                  ? 'Every space has a soul — and our mission is to display this soul in the most beautiful picture possible.'
                  : 'كل مساحة لها روح — ومهمتنا إظهار هذه الروح بأجمل صورة ممكنة'}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-[1.2rem]">
                  👤
                </div>
                <div>
                  <div className="text-gradient-to-r from-primary to-primary-dark font-bold text-[0.9rem]">{isEn ? 'CEO' : 'المدير التنفيذي'}</div>
                  <div className="text-primary text-[0.8rem]">{t('brand')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
