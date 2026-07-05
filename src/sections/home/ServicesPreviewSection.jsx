import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const ServicesPreviewSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      icon: '🏗️',
      shortLabel: isEn ? 'Finishing' : 'تشطيبات',
      title: t('services.s1_title'),
      desc: t('services.s1_desc'),
      features: [t('services.s1_f1'), t('services.s1_f2'), t('services.s1_f3')],
      color: '#1A9E5F',
      colorLight: '#2ECC71',
      bg: 'rgba(26, 158, 95, 0.08)',
    },
    {
      icon: '🛋️',
      shortLabel: isEn ? 'Interior' : 'تصميم داخلي',
      title: t('services.s2_title'),
      desc: t('services.s2_desc'),
      features: [t('services.s2_f1'), t('services.s2_f2'), t('services.s2_f3')],
      color: '#C9A227',
      colorLight: '#E8B830',
      bg: 'rgba(201, 162, 39, 0.08)',
    },
    {
      icon: '🏢',
      shortLabel: isEn ? 'Exterior' : 'تصميم خارجي',
      title: t('services.s3_title'),
      desc: t('services.s3_desc'),
      features: [t('services.s3_f1'), t('services.s3_f2'), t('services.s3_f3')],
      color: '#1A9E5F',
      colorLight: '#3DD68C',
      bg: 'rgba(61, 214, 140, 0.08)',
    },
    {
      icon: '🎨',
      shortLabel: isEn ? '3D Design' : 'تصميم 3D',
      title: t('services.s4_title'),
      desc: t('services.s4_desc'),
      features: [t('services.s4_f1'), t('services.s4_f2'), t('services.s4_f3')],
      color: '#C9A227',
      colorLight: '#E8B830',
      bg: 'rgba(201, 162, 39, 0.08)',
    },
  ];

  const active = services[activeIndex];

  return (
    <section
      className="section section-dark bg-grid"
      ref={ref}
      style={{ direction: isEn ? 'ltr' : 'rtl' }}
    >
      {/* Glow background */}
      <div style={{
        position: 'absolute', width: 600, height: 600,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,158,95,0.09), transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div className="section-header reveal">
          <span className="section-badge">{t('services.badge')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.sub')}</p>
          <div className="section-divider" />
        </div>

        {/* ── Main Two-Column Layout ── */}
        <div className="sps-layout reveal">

          {/* ────── LEFT COLUMN: Vertical Timeline List ────── */}
          <div className="sps-list-col">
            {/* Connecting line */}
            <div className="sps-timeline-line" />

            {services.map((srv, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className={`sps-list-item${isActive ? ' sps-list-item--active' : ''} delay-${i + 1}`}
                  style={{
                    borderColor: isActive ? srv.color : 'var(--border)',
                    background: isActive ? srv.bg : 'var(--bg-card)',
                    boxShadow: isActive ? `0 8px 28px ${srv.color}28` : '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                  onClick={() => setActiveIndex(i)}
                >
                  {/* Timeline dot */}
                  <span
                    className="sps-dot"
                    style={{
                      background: isActive ? srv.color : 'var(--border)',
                      boxShadow: isActive ? `0 0 14px ${srv.color}99` : 'none',
                      transform: isActive ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />

                  <div className="sps-item-header">
                    <span className="sps-icon">{srv.icon}</span>
                    <h3
                      className="sps-item-title"
                      style={{ color: isActive ? srv.color : 'var(--text)' }}
                    >
                      {srv.title}
                    </h3>
                  </div>

                  {/* Collapsible description */}
                  <div
                    className="sps-item-desc-wrap"
                    style={{ maxHeight: isActive ? 100 : 0 }}
                  >
                    <p className="sps-item-desc">{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ────── RIGHT COLUMN: Active Service Card ────── */}
          <div className="sps-card-col">

            {/* Floating pill labels */}
            {services.map((srv, i) => {
              const isActive = i === activeIndex;
              const pillPositions = [
                { top: '8%', insetInlineStart: '-14%' },
                { top: '32%', insetInlineStart: '-18%' },
                { bottom: '30%', insetInlineStart: '-16%' },
                { bottom: '8%', insetInlineStart: '-12%' },
              ];
              return (
                <button
                  key={i}
                  className="sps-pill"
                  onClick={() => setActiveIndex(i)}
                  style={{
                    ...pillPositions[i],
                    background: isActive ? srv.color : 'var(--bg-card)',
                    border: `1px solid ${isActive ? srv.color : 'var(--border)'}`,
                    color: isActive ? '#fff' : 'var(--text-muted)',
                    boxShadow: isActive ? `0 4px 18px ${srv.color}55` : 'none',
                  }}
                >
                  {srv.icon} {srv.shortLabel}
                </button>
              );
            })}

            {/* Main card */}
            <div
              key={activeIndex}
              className="sps-main-card"
              style={{
                borderColor: active.color + '44',
                boxShadow: `0 24px 64px ${active.color}22, 0 8px 32px rgba(0,0,0,0.1)`,
              }}
            >
              {/* Top colour bar */}
              <div style={{
                position: 'absolute', top: 0, insetInlineStart: 0, insetInlineEnd: 0,
                height: 4,
                background: `linear-gradient(90deg, ${active.colorLight}, ${active.color}, transparent)`,
                borderRadius: '20px 20px 0 0',
              }} />

              {/* Brand chip */}
              <div
                className="sps-brand-chip"
                style={{
                  background: active.bg,
                  border: `1px solid ${active.color}44`,
                  color: active.color,
                }}
              >
                🏠 {isEn ? 'First Aqar' : 'فيرست عقار'}
              </div>

              <h3 className="sps-card-title">{active.title}</h3>
              <p className="sps-card-desc">{active.desc}</p>

              {/* Features list */}
              <ul className="sps-features">
                {active.features.map((f, fi) => (
                  <li key={fi} className="sps-feature-item">
                    <span
                      className="sps-check"
                      style={{
                        background: active.bg,
                        border: `1px solid ${active.color}55`,
                        color: active.color,
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Pagination dots */}
              <div className="sps-dots">
                {services.map((_, di) => (
                  <div
                    key={di}
                    className="sps-page-dot"
                    onClick={() => setActiveIndex(di)}
                    style={{
                      width: di === activeIndex ? 24 : 7,
                      background: di === activeIndex ? active.color : 'var(--border)',
                    }}
                  />
                ))}
              </div>

              <Link to="/services" className="btn-primary" style={{ fontSize: '0.9rem', padding: '11px 26px' }}>
                <span>{t('services.more')}</span>
                {isEn ? <FiArrowRight size={15} /> : <FiArrowLeft size={15} />}
              </Link>
            </div>

            {/* Decorative ring */}
            <div className="sps-ring" />
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 56 }}>
          <Link to="/services" className="btn-primary">
            <span>{t('services.all')}</span>
            {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
          </Link>
        </div>
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        @keyframes spsCardIn {
          from { opacity: 0; transform: scale(0.93) translateY(14px); }
          to   { opacity: 1; transform: scale(1)   translateY(0); }
        }

        .sps-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* ── List column ── */
        .sps-list-col {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding-inline-end: 36px;
        }

        .sps-timeline-line {
          position: absolute;
          top: 28px; bottom: 28px;
          inset-inline-end: 16px;
          width: 2px;
          background: linear-gradient(180deg, var(--primary), var(--gold), transparent);
          opacity: 0.3;
          border-radius: 2px;
          pointer-events: none;
        }

        .sps-list-item {
          position: relative;
          border-radius: 16px;
          border: 1.5px solid var(--border);
          padding: 18px 22px 18px 22px;
          padding-inline-end: 52px;
          cursor: pointer;
          transition: all 0.35s ease;
          transform: scale(1);
        }
        .sps-list-item:hover { transform: scale(1.015); }
        .sps-list-item--active { transform: scale(1.02); }

        .sps-dot {
          position: absolute;
          top: 50%; inset-inline-end: -30px;
          transform: translateY(-50%) scale(1);
          width: 12px; height: 12px;
          border-radius: 50%;
          transition: all 0.35s ease;
          display: block;
        }

        .sps-item-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sps-icon { font-size: 1.35rem; }

        .sps-item-title {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          transition: color 0.3s ease;
          font-family: var(--font-main);
        }

        .sps-item-desc-wrap {
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .sps-item-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin: 8px 0 0 0;
        }

        /* ── Card column ── */
        .sps-card-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 440px;
        }

        .sps-pill {
          position: absolute;
          border-radius: 50px;
          padding: 5px 13px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.35s ease;
          z-index: 3;
          white-space: nowrap;
          font-family: var(--font-main);
        }

        .sps-main-card {
          position: relative;
          background: var(--bg-card);
          border: 1.5px solid var(--border);
          border-radius: 24px;
          padding: 36px 30px;
          width: 100%;
          max-width: 420px;
          z-index: 2;
          animation: spsCardIn 0.45s ease both;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .sps-brand-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 50px;
          padding: 4px 14px;
          font-size: 0.78rem;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .sps-card-title {
          font-size: clamp(1.35rem, 2.5vw, 1.8rem);
          font-weight: 800;
          color: var(--text);
          margin: 0 0 10px 0;
          line-height: 1.3;
          font-family: var(--font-main);
        }

        .sps-card-desc {
          font-size: 0.87rem;
          color: var(--text-muted);
          line-height: 1.85;
          margin: 0 0 18px 0;
        }

        .sps-features {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sps-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.84rem;
          color: var(--text-muted);
        }

        .sps-check {
          width: 22px; height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.68rem;
          font-weight: 700;
        }

        .sps-dots {
          display: flex;
          gap: 6px;
          margin-bottom: 22px;
          justify-content: flex-end;
        }

        .sps-page-dot {
          height: 7px;
          border-radius: 99px;
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .sps-ring {
          position: absolute;
          width: 360px; height: 360px;
          border-radius: 50%;
          border: 1px dashed var(--border);
          opacity: 0.35;
          z-index: 0;
          animation: rotate 25s linear infinite;
        }

        @media (max-width: 900px) {
          .sps-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sps-timeline-line { display: none; }
          .sps-dot { display: none; }
          .sps-list-col { padding-inline-end: 0; }
          .sps-pill { display: none; }
          .sps-ring { display: none; }
          .sps-card-col { min-height: auto; }
        }
      `}</style>
    </section>
  );
};

export default ServicesPreviewSection;
