import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight, FiPhone } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  return (
    <section ref={ref} className="relative overflow-hidden py-[120px] bg-bg-card">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c4a66] via-[#050d0ae6] to-[#c9a2271a] z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,_rgba(26,158,95,0.15)_0%,_transparent_70%)] z-2" />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,158,95,0.05)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(26,158,95,0.05)_1px,_transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-50 z-3"
          style={{
            width: `${4 + (i % 5)}px`,
            height: `${4 + (i % 5)}px`,
            backgroundColor: i % 2 === 0 ? 'var(--primary)' : 'var(--gold)',
            left: `${(i * 13 + 5) % 90}%`,
            bottom: '-10px',
            animation: `particleFloat ${5 + i}s ease-in-out ${i * 0.6}s infinite`,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="container relative z-[5]">
        <div className="reveal text-center max-w-[700px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/12 border border-primary/30 text-primary-light px-5.5 py-2 rounded-[50px] text-[0.88rem] font-bold mb-6 animate-[glow_3s_ease-in-out_infinite]">
            {t('cta.badge')}
          </div>

          {/* Title */}
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black text-white leading-[1.25] mb-5">
            {t('cta.title').includes('مع فريق') ? t('cta.title').split('مع فريق')[0] : t('cta.title')}
            <br />
            <span className="gold-text">
              {t('cta.title').includes('مع فريق') ? 'with a team that guarantees the result' : ''}
            </span>
          </h2>

          <p className="text-[1.05rem] text-[#e8f5ee]/75 leading-[1.8] mb-8">
            {t('cta.sub')}
          </p>

          {/* Features */}
          <div className="flex gap-5 justify-center flex-wrap mb-10">
            {[t('cta.f1'), t('cta.f2'), t('cta.f3'), t('cta.f4')].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-[#e8f5ee]/80 text-[0.9rem] font-medium">
                <span className="text-primary font-bold">✓</span>
                {f}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-4 justify-center flex-wrap mb-5">
            <a
              href="https://wa.me/201234567890?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-[50px] text-[1.05rem] font-bold no-underline font-main shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 animate-[goldGlow_3s_ease-in-out_infinite]"
            >
              <FaWhatsapp size={22} />
              <span>{t('cta.btn')}</span>
            </a>
            <Link to="/contact" className="btn-outline">
              <span>{t('cta.btn_sub')}</span>
              {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
            </Link>
          </div>

          {/* Phone */}
          <a href="tel:+201234567890" className="inline-flex items-center gap-2 text-text-muted text-[0.9rem] no-underline mt-2 hover:text-primary transition-colors duration-200">
            <FiPhone size={16} />
            <span>{t('cta.call_us')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
