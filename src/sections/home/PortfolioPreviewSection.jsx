import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiMaximize2 } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const PortfolioPreviewSection = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const categories = [
    { id: 'all', label: t('portfolio.filter_all') },
    { id: 'res', label: t('portfolio.filter_res') },
    { id: 'com', label: t('portfolio.filter_com') },
    { id: 'adm', label: t('portfolio.filter_adm') },
    { id: 'des', label: t('portfolio.filter_des') },
  ];

  const projects = [
    {
      id: 1,
      image: '/hero1.png',
      title: isEn ? 'Luxury Villa in New Cairo' : 'فيلا فاخرة بالقاهرة الجديدة',
      category: 'res',
      type: isEn ? 'Super Deluxe Finishing' : 'تشطيب سوبر لوكس',
      location: isEn ? 'New Cairo' : 'القاهرة الجديدة',
    },
    {
      id: 2,
      image: '/hero2.png',
      title: isEn ? 'Modern Exterior Facade' : 'مشروع الواجهة الخارجية',
      category: 'res',
      type: isEn ? 'Exterior Design' : 'تصميم خارجي',
      location: isEn ? 'Nasr City' : 'مدينة نصر',
    },
    {
      id: 3,
      image: '/portfolio-restaurant.png',
      title: isEn ? 'El-Mazza Restaurant' : 'مطعم المزة الفاخر',
      category: 'com',
      type: isEn ? 'Interior Design' : 'تصميم داخلي',
      location: isEn ? 'Maadi' : 'المعادي',
    },
    {
      id: 4,
      image: '/hero3.png',
      title: isEn ? '3D Duplex Design' : 'تصميم 3D شقة دوبلكس',
      category: 'des',
      type: isEn ? '3D Render' : 'تصميم 3D',
      location: isEn ? 'Sheikh Zayed' : 'الشيخ زايد',
    },
    {
      id: 5,
      image: '/hero1.png',
      title: isEn ? 'Tech Office Spaces' : 'مكاتب شركة التقنية',
      category: 'adm',
      type: isEn ? 'Finishing & Design' : 'تشطيب + تصميم',
      location: isEn ? 'Nasr City' : 'مدينة نصر',
    },
    {
      id: 6,
      image: '/hero2.png',
      title: isEn ? 'Green Meadow Cafe' : 'كافيه الروضة الخضراء',
      category: 'com',
      type: isEn ? 'Interior Design' : 'تصميم داخلي',
      location: isEn ? 'Mohandessin' : 'المهندسين',
    },
  ];

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="section section-card" ref={ref}>
      <div className="glow-orb glow-orb-green w-[600px] h-[500px] top-[-200px] left-1/2 -translate-x-1/2 opacity-20" />

      <div className="container relative z-1">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">{t('portfolio.badge')}</span>
          <h2 className="section-title">
            {t('portfolio.title')}
          </h2>
          <p className="section-subtitle">
            {t('portfolio.sub')}
          </p>
          <div className="section-divider" />
        </div>

        {/* Filter Tabs */}
        <div className="reveal flex gap-2.5 flex-wrap justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5.5 py-2.25 rounded-[50px] text-[0.88rem] font-semibold cursor-pointer transition-all duration-300 font-main ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-br from-primary-light to-primary-dark text-white border-none'
                  : 'bg-primary/6 text-text-muted border border-border-brand'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`reveal delay-${(i % 4) + 1} bg-bg-card rounded-[20px] overflow-hidden border border-primary/15 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:scale-[1.02] hover:shadow-lg`}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#050d0aa6] flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <FiMaximize2 size={28} color="#fff" />
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-br from-primary-light to-primary-dark text-white px-3 py-1 rounded-[50px] text-[0.78rem] font-bold">
                  {categories.find(c => c.id === project.category)?.label}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div>
                  <h3 className="text-[0.95rem] font-bold text-text-main mb-2">{project.title}</h3>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-[0.8rem] text-text-muted">🏷️ {project.type}</span>
                    <span className="text-[0.8rem] text-text-muted">📍 {project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-14">
          <Link to="/portfolio" className="btn-primary">
            <span>{t('portfolio.all')}</span>
            {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewSection;
