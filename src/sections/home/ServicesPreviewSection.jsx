import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const ServicesPreviewSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const services = [
    {
      icon: '🏗️',
      title: t('services.s1_title'),
      desc: t('services.s1_desc'),
      features: [t('services.s1_f1'), t('services.s1_f2'), t('services.s1_f3')],
      color: '#2ECC71',
      bgColor: 'rgba(46, 204, 113, 0.07)',
      link: '/services',
    },
    {
      icon: '🛋️',
      title: t('services.s2_title'),
      desc: t('services.s2_desc'),
      features: [t('services.s2_f1'), t('services.s2_f2'), t('services.s2_f3')],
      color: '#C9A227',
      bgColor: 'rgba(201, 162, 39, 0.07)',
      link: '/services',
    },
    {
      icon: '🏢',
      title: t('services.s3_title'),
      desc: t('services.s3_desc'),
      features: [t('services.s3_f1'), t('services.s3_f2'), t('services.s3_f3')],
      color: '#3DD68C',
      bgColor: 'rgba(61, 214, 140, 0.07)',
      link: '/services',
    },
    {
      icon: '🎨',
      title: t('services.s4_title'),
      desc: t('services.s4_desc'),
      features: [t('services.s4_f1'), t('services.s4_f2'), t('services.s4_f3')],
      color: '#C9A227',
      bgColor: 'rgba(201, 162, 39, 0.07)',
      link: '/services',
    },
  ];

  return (
    <section className="section section-dark bg-grid" ref={ref}>
      <div className="glow-orb glow-orb-gold w-[600px] h-[600px] top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="container relative z-1">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">{t('services.badge')}</span>
          <h2 className="section-title">
            {t('services.title')}
          </h2>
          <p className="section-subtitle">
            {t('services.sub')}
          </p>
          <div className="section-divider" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`dark-card reveal delay-${i + 1} p-[32px_28px] border-t-3 relative overflow-hidden`}
              style={{ borderTopColor: service.color }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-[16px] border flex items-center justify-center mb-5" style={{ background: service.bgColor, borderColor: service.color + '33' }}>
                <span className="text-[2rem]">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-[1.15rem] font-extrabold text-text-main mb-3">{service.title}</h3>
              <p className="text-text-muted text-[0.88rem] leading-[1.8] mb-5">{service.desc}</p>

              {/* Features */}
              <ul className="list-none flex flex-col gap-2 mb-6">
                {service.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2.5 text-text-muted text-[0.85rem]">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link to={service.link} className="inline-flex items-center gap-1.5 text-[0.9rem] font-bold no-underline font-main transition-[gap] duration-300 hover:gap-2.5" style={{ color: service.color }}>
                <span>{t('services.more')}</span>
                {isEn ? <FiArrowRight size={16} /> : <FiArrowLeft size={16} />}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-15">
          <Link to="/services" className="btn-primary">
            <span>{t('services.all')}</span>
            {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreviewSection;
