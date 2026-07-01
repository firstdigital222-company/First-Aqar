import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const PortfolioCategoriesSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const portfolioCategories = [
    {
      id: 'residential',
      icon: '🏠',
      title: t('services.cat_res'),
      items: isEn ? ['Apartments', 'Villas', 'Duplexes', 'Penthouses'] : ['شقق سكنية', 'فيلات', 'دوبلكس', 'بنتهاوس'],
      color: '#2ECC71',
      image: '/hero1.png',
    },
    {
      id: 'commercial',
      icon: '🍽️',
      title: t('services.cat_com'),
      items: isEn ? ['Commercial Shops', 'Restaurants', 'Cafes', 'Salons'] : ['محلات تجارية', 'مطاعم', 'كافيهات', 'صالونات'],
      color: '#C9A227',
      image: '/portfolio-restaurant.png',
    },
    {
      id: 'administrative',
      icon: '🏢',
      title: t('services.cat_adm'),
      items: isEn ? ['Offices', 'Companies', 'Workspaces', 'Medical Centers'] : ['مكاتب', 'شركات', 'مساحات عمل', 'مراكز طبية'],
      color: '#3DD68C',
      image: '/hero2.png',
    },
    {
      id: 'design-only',
      icon: '🎨',
      title: t('services.cat_des'),
      items: isEn ? ['3D Renders', '2D Blueprints', 'Virtual Tours', 'Interior Designs'] : ['رندرات 3D', 'مخططات 2D', 'جولات افتراضية', 'تصميمات داخلية'],
      color: '#C9A227',
      image: '/hero3.png',
    },
  ];

  return (
    <section className="section section-card" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">{t('services.cat_badge')}</span>
          <h2 className="section-title">
            {t('services.cat_title').split(' ')[0]} <span className="highlight">{t('services.cat_title').substring(t('services.cat_title').indexOf(' '))}</span>
          </h2>
          <p className="section-subtitle">
            {t('services.cat_sub')}
          </p>
          <div className="section-divider" />
        </div>

        <div style={gridStyle}>
          {portfolioCategories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/portfolio"
              className={`reveal delay-${i + 1}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={categoryCardStyle}>
                <div style={{ ...imgContainerStyle, backgroundImage: `url(${cat.image})` }}>
                  <div style={cardOverlayStyle(cat.color)} />
                  <div style={cardContentStyle}>
                    <div style={iconStyle}>{cat.icon}</div>
                    <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>
                      {cat.title}
                    </h3>
                    <div style={itemsListStyle}>
                      {cat.items.map((item, ii) => (
                        <span key={ii} style={itemTagStyle(cat.color)}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '32px' }}>
          <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '1.05rem' }}>
            "{t('hero.tagline')}"
          </p>
          <Link to="/contact" className="btn-gold" style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>{t('services.cat_btn')}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '24px',
};

const categoryCardStyle = {
  borderRadius: '20px',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const imgContainerStyle = {
  position: 'relative',
  height: '280px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const cardOverlayStyle = (color) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, rgba(5,13,10,0.9) 0%, rgba(5,13,10,0.4) 50%, transparent 100%)`,
  transition: 'all 0.3s ease',
});

const cardContentStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '24px',
};

const iconStyle = {
  fontSize: '2rem',
  marginBottom: '8px',
  display: 'block',
};

const itemsListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
};

const itemTagStyle = (color) => ({
  background: `${color}20`,
  border: `1px solid ${color}40`,
  color: '#fff',
  padding: '3px 10px',
  borderRadius: '50px',
  fontSize: '0.75rem',
  fontWeight: 600,
});

export default PortfolioCategoriesSection;
