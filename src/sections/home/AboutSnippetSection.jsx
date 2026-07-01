import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const AboutSnippetSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const values = [
    { icon: '✅', label: t('about_snippet.v1_lbl'), desc: t('about_snippet.v1_desc') },
    { icon: '⏱️', label: t('about_snippet.v2_lbl'), desc: t('about_snippet.v2_desc') },
    { icon: '🎨', label: t('about_snippet.v3_lbl'), desc: t('about_snippet.v3_desc') },
    { icon: '🤝', label: t('about_snippet.v4_lbl'), desc: t('about_snippet.v4_desc') },
  ];

  return (
    <section className="section section-card bg-dots" ref={ref}>
      <div className="glow-orb glow-orb-green w-[500px] h-[400px] top-[-100px] left-[-150px] opacity-50" />

      <div className="container">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-16 items-center">

          {/* Text Content */}
          <div className="reveal">
            <span className="section-badge">{t('about_snippet.badge')}</span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-text-main leading-[1.3] mt-3 mb-5">
              {t('about_snippet.title_main')}
            </h2>
            <p className="text-text-muted leading-[1.9] text-base mb-4">
              {t('about_snippet.p1')}
            </p>
            <p className="text-text-muted leading-[1.9] text-base mb-8">
              {t('about_snippet.p2')}
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link to="/about" className="btn-primary">
                <span>{t('about_snippet.cta_more')}</span>
                {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
              </Link>
              <Link to="/contact" className="btn-outline">
                <span>{t('about_snippet.cta_consult')}</span>
              </Link>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            {values.map((v, i) => (
              <div key={i} className={`glass-card reveal delay-${i + 1} p-5 flex items-start gap-3`}>
                <div className="text-[1.6rem] leading-none flex-shrink-0">{v.icon}</div>
                <div>
                  <h3 className="text-[0.95rem] font-bold text-text-main mb-1">{v.label}</h3>
                  <p className="text-[0.82rem] text-text-muted leading-[1.5]">{v.desc}</p>
                </div>
              </div>
            ))}

            {/* Experience Badge */}
            <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 bg-bg-card2 border-2 border-border-gold rounded-2xl p-[16px_28px] text-center shadow-[0_8px_32px_rgba(201,162,39,0.15)] z-2 min-w-[160px]">
              <div className="text-[2.8rem] font-black leading-none gradient-text">8+</div>
              <div className="text-[0.85rem] text-text-muted font-medium">{t('about_snippet.exp_lbl')}</div>
              <div className="w-10 h-[3px] bg-gold rounded-[4px] mt-2 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippetSection;
