import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiVideo, FiLayers, FiCheckCircle, FiArrowDown } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';

const PortfolioHeroHeader = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const ref = useScrollReveal();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-[140px] pb-12 overflow-hidden bg-gradient-to-b from-[#0a1f18] via-[#0d2a21] to-[var(--bg)] text-white" ref={ref}>
      {/* Decorative Orbs */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--primary)]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[var(--gold)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-emerald-300 text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          {isEn ? '🌟 First Aqar Portfolios & Works' : '🌟 سابقة أعمال ومعارض فيرست عقار'}
        </div>

        {/* Title */}
        <h1 className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto mb-6">
          {isEn ? (
            <>From <span className="text-emerald-400">2D & 3D Blueprints</span> to Luxury Real Finishing</>
          ) : (
            <>من <span className="text-emerald-400">المخطط والتصميم 3D</span> إلى أروع واقع تشطيب</>
          )}
        </h1>

        {/* Subtitle */}
        <p className="reveal text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          {isEn
            ? 'Explore our live video walkthroughs, high-end 2D & 3D architectural renders, and executed luxury fit-out projects delivered with the highest standards of precision and elegance.'
            : 'استكشف جولاتنا الحية بالفيديو، وتصاميمنا الهندسية 2D & 3D فائقة الواقعية، وتصفح أحدث مشاريع التشطيبات المنجزة على أرض الواقع بأدق المعايير وأفخم الخامات.'}
        </p>

        {/* Quick Jump Navigator Buttons */}
        <div className="reveal flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-12">
          <button
            onClick={() => scrollToSection('our-projects-section')}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500/30 to-amber-500/20 hover:from-emerald-500/40 hover:to-amber-500/30 text-amber-200 border border-amber-400/50 font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-950/40 cursor-pointer"
          >
            <span className="text-lg">🌟</span>
            <span>{isEn ? 'Signature Projects' : 'مشاريعنا الحصرية'}</span>
            <FiArrowDown className="text-xs opacity-70" />
          </button>

          <button
            onClick={() => scrollToSection('portfolio-videos')}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/40 font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-950/40 cursor-pointer"
          >
            <FiVideo className="text-emerald-400 text-lg" />
            <span>{isEn ? '🎬 Video Showcase & Tours' : '🎬 جولات الفيديو الحية'}</span>
            <FiArrowDown className="text-xs opacity-70" />
          </button>

          <button
            onClick={() => scrollToSection('portfolio-designs')}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-950/40 cursor-pointer"
          >
            <FiLayers className="text-amber-400 text-lg" />
            <span>{isEn ? '📐 2D & 3D Engineering Designs' : '📐 تصاميم ومخططات 2D & 3D'}</span>
            <FiArrowDown className="text-xs opacity-70" />
          </button>

          <button
            onClick={() => scrollToSection('portfolio-finishing')}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 border border-teal-500/40 font-bold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-950/40 cursor-pointer"
          >
            <FiCheckCircle className="text-teal-400 text-lg" />
            <span>{isEn ? '🔨 Real Executed Finishes' : '🔨 أعمال التشطيبات والتنفيذ'}</span>
            <FiArrowDown className="text-xs opacity-70" />
          </button>
        </div>

        {/* Quick Stats bar */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="text-center border-e border-white/10 last:border-none">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">+500</div>
            <div className="text-xs sm:text-sm text-white/70">{isEn ? 'Projects Completed' : 'مشروع تم تسليمه'}</div>
          </div>
          <div className="text-center border-e border-white/10 last:border-none">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">100%</div>
            <div className="text-xs sm:text-sm text-white/70">{isEn ? 'Deadlines Commitment' : 'التزام تام بالمواعيد'}</div>
          </div>
          <div className="text-center border-e border-white/10 last:border-none">
            <div className="text-2xl sm:text-3xl font-black text-teal-400 mb-1">3Ds / VR</div>
            <div className="text-xs sm:text-sm text-white/70">{isEn ? 'Photorealistic Renders' : 'تصاميم واقعية متطابقة'}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-300 mb-1">4K</div>
            <div className="text-xs sm:text-sm text-white/70">{isEn ? 'Video Walkthroughs' : 'جولات وتوثيق بالفيديو'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeroHeader;
