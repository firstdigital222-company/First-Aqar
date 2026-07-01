import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const PortfolioGallerySection = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActive] = useState('all');
  const [lightbox, setLightbox]     = useState(null);
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
    { id: 1, image: '/hero1.png', title: isEn ? 'Luxury Villa — New Cairo' : 'فيلا فاخرة — القاهرة الجديدة', category: 'res', type: isEn ? 'Super Deluxe' : 'سوبر لوكس', area: '350m²', location: isEn ? 'New Cairo' : 'القاهرة الجديدة', year: '2024' },
    { id: 2, image: '/hero2.png', title: isEn ? 'Premium Exterior Facade' : 'مشروع الواجهة الفاخرة', category: 'res', type: isEn ? 'Exterior Design' : 'تصميم خارجي', area: '500m²', location: isEn ? 'Nasr City' : 'مدينة نصر', year: '2024' },
    { id: 3, image: '/portfolio-restaurant.png', title: isEn ? 'El-Mazza Restaurant' : 'مطعم المزة', category: 'com', type: isEn ? 'Interior Design' : 'تصميم داخلي', area: '200m²', location: isEn ? 'Maadi' : 'المعادي', year: '2023' },
    { id: 4, image: '/hero3.png', title: isEn ? '3D Duplex Apartment' : 'شقة دوبلكس 3D', category: 'des', type: isEn ? '3D Design' : 'تصميم 3D', area: '180m²', location: isEn ? 'Sheikh Zayed' : 'الشيخ زايد', year: '2024' },
    { id: 5, image: '/hero1.png', title: isEn ? 'Tech Company Offices' : 'مكاتب شركة التقنية', category: 'adm', type: isEn ? 'Deluxe' : 'لوكس', area: '400m²', location: isEn ? 'Nasr City' : 'مدينة نصر', year: '2023' },
    { id: 6, image: '/hero2.png', title: isEn ? 'El-Rawda Cafe' : 'كافيه الروضة', category: 'com', type: isEn ? 'Interior Design' : 'تصميم داخلي', area: '120m²', location: isEn ? 'Mohandessin' : 'المهندسين', year: '2024' },
    { id: 7, image: '/hero3.png', title: isEn ? 'Residential Apartment — Tagamoa' : 'شقة سكنية — التجمع', category: 'res', type: isEn ? 'Deluxe' : 'لوكس', area: '150m²', location: isEn ? 'Fifth Settlement' : 'التجمع الخامس', year: '2023' },
    { id: 8, image: '/hero1.png', title: isEn ? 'Luxury Perfume Shop' : 'محل عطور فاخر', category: 'com', type: isEn ? 'Interior Design' : 'تصميم داخلي', area: '80m²', location: isEn ? 'Mohandessin' : 'المهندسين', year: '2024' },
    { id: 9, image: '/portfolio-restaurant.png', title: isEn ? 'Integrated Medical Center' : 'مركز طبي متكامل', category: 'adm', type: isEn ? 'Finishing + Design' : 'تشطيب + تصميم', area: '600m²', location: isEn ? 'Helwan' : 'حلوان', year: '2023' },
  ];

  const filtered = activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section section-dark pt-[120px]" ref={ref}>
      <div className="glow-orb glow-orb-green w-[700px] h-[600px] top-[-200px] left-1/2 -translate-x-1/2 opacity-[0.08]" />

      <div className="container relative z-1">
        <div className="section-header reveal">
          <span className="section-badge">{t('portfolio.badge')}</span>
          <h1 className="section-title">
            {isEn ? 'Our Completed' : 'مشاريعنا'} <span className="highlight">{isEn ? 'Projects' : 'المنجزة'}</span>
          </h1>
          <p className="section-subtitle">
            {isEn 
              ? 'Over 500 completed projects — browse our work and get inspired for your own project.'
              : 'أكثر من 500 مشروع منجز — تصفح أعمالنا واستلهم أفكاراً لمشروعك'}
          </p>
          <div className="section-divider" />
        </div>

        {/* Filter */}
        <div className="reveal flex gap-2.5 flex-wrap justify-center mb-12">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActive(cat.id)} className={`px-5.5 py-2.25 rounded-[50px] text-[0.88rem] font-semibold cursor-pointer transition-all duration-300 font-main ${
              activeCategory === cat.id ? 'bg-gradient-to-br from-primary-light to-primary-dark text-white border-none' : 'bg-primary/6 text-text-muted border border-border-brand'
            }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))] gap-6">
          {filtered.map((project, i) => (
            <div key={project.id} className={`reveal delay-${(i % 4) + 1} bg-bg-card rounded-[20px] overflow-hidden border border-primary/15 cursor-pointer transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:scale-[1.02] hover:shadow-lg group`} onClick={() => setLightbox(project)}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-[230px] object-cover block transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#050d0ab3] opacity-0 transition-opacity duration-300 ease-in-out flex items-end p-5 group-hover:opacity-100">
                  <div>
                    <div className="text-[0.85rem] text-white/80 mb-1">{project.type} • {project.area}</div>
                    <div className="text-[0.8rem] text-primary">📍 {project.location}</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#050d0acc] text-primary px-2.5 py-0.75 rounded-[50px] text-[0.75rem] font-bold backdrop-blur-[4px]">{project.year}</div>
                <div className="absolute top-3 right-3 bg-gradient-to-br from-primary-light to-primary-dark text-white px-2.5 py-0.75 rounded-[50px] text-[0.75rem] font-bold">{categories.find(c => c.id === project.category)?.label}</div>
              </div>
              <div className="p-[16px_20px]">
                <h3 className="text-text-main font-bold text-[0.95rem]">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-15">
          <Link to="/contact" className="btn-gold">
            <span>{t('portfolio.start_project')}</span>
            {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 bg-[#050d0af2] z-[9999] flex items-center justify-center p-5 backdrop-blur-[10px]" onClick={() => setLightbox(null)}>
          <div className="bg-[#0c1e17] rounded-[20px] max-w-[600px] w-full border border-primary/20 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)]" onClick={e => e.stopPropagation()}>
            <button className="absolute top-3 right-3 z-10 bg-white/90 border border-primary/20 text-text-main w-9 h-9 rounded-full cursor-pointer text-[0.9rem] font-main flex items-center justify-center" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.image} alt={lightbox.title} className="w-full rounded-[16px_16px_0_0] max-h-[60vh] object-cover" />
            <div className="p-6">
              <h3 className="text-white font-extrabold text-[1.1rem] mb-3">{lightbox.title}</h3>
              <div className="flex gap-4 flex-wrap">
                <span className="bg-primary/8 border border-border-brand text-text-muted px-3 py-1 rounded-[50px] text-[0.8rem]">{t('portfolio.lightbox_type')}: {lightbox.type}</span>
                <span className="bg-primary/8 border border-border-brand text-text-muted px-3 py-1 rounded-[50px] text-[0.8rem]">{t('portfolio.lightbox_area')}: {lightbox.area}</span>
                <span className="bg-primary/8 border border-border-brand text-text-muted px-3 py-1 rounded-[50px] text-[0.8rem]">{t('portfolio.lightbox_loc')}: {lightbox.location}</span>
                <span className="bg-primary/8 border border-border-brand text-text-muted px-3 py-1 rounded-[50px] text-[0.8rem]">{t('portfolio.lightbox_year')}: {lightbox.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallerySection;
