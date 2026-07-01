import React from 'react';
import { useTranslation } from 'react-i18next';
import useCounter from '../../hooks/useCounter';
import useScrollReveal from '../../hooks/useScrollReveal';

const StatCard = ({ stat, index }) => {
  const { count, ref } = useCounter(stat.target, 2200);

  return (
    <div
      ref={ref}
      className={`glass-card reveal delay-${index + 1} p-[36px_24px] text-center relative overflow-hidden`}
    >
      {/* Icon */}
      <div className="text-[2.2rem] mb-4 block">{stat.icon}</div>

      {/* Number */}
      <div className="inline-flex items-start gap-0.5 mb-2">
        <span className="text-[3rem] font-black text-gradient-to-br from-[#1a9e5f] leading-none [font-variant-numeric:tabular-nums] bg-gradient-to-br from-primary-light to-primary-dark bg-clip-text text-transparent [webkit-background-clip:text] [webkit-text-fill-color:transparent]">{count}</span>
        <span className="text-[1.8rem] font-black text-gold leading-none mt-1">{stat.suffix}</span>
      </div>

      <h3 className="text-base font-bold text-text-main mb-1.5">{stat.label}</h3>
      <p className="text-[0.82rem] text-text-muted">{stat.desc}</p>

      {/* Glow effect */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[120px] h-20 bg-[radial-gradient(circle,_rgba(26,158,95,0.15),_transparent)] pointer-events-none" />
    </div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  const stats = [
    { target: 500, suffix: '+', label: t('hero.s1_lbl'), icon: '🏗️', desc: t('services.s1_title') },
    { target: 8, suffix: '+', label: t('hero.s2_lbl'), icon: '🏆', desc: t('about_snippet.exp_lbl') },
    { target: 98, suffix: '%', label: t('hero.s3_lbl'), icon: '⭐', desc: t('testimonials.recommend') },
    { target: 50, suffix: '+', label: t('hero.s4_lbl'), icon: '👷', desc: t('hero.s4_lbl') },
  ];

  return (
    <section className="section section-card relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a9e5f08] via-transparent to-[#c9a22708] pointer-events-none" />

      <div className="container relative z-1">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">📊 {t('hero.s1_lbl')}</span>
          <h2 className="section-title">
            {t('hero.tagline').split('…')[0]} <span className="highlight">{t('hero.tagline').split('…')[1]}</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-6 ">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
