import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const BeforeAfterSection = () => {
  const { t, i18n } = useTranslation();
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const revealRef = useScrollReveal();
  const isEn = i18n.language === 'en';

  const updateSlider = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pct;
    if (isEn) {
      const relativeX = clientX - rect.left;
      pct = Math.min(Math.max((relativeX / rect.width) * 100, 5), 95);
    } else {
      const relativeX = rect.right - clientX;
      pct = Math.min(Math.max((relativeX / rect.width) * 100, 5), 95);
    }
    setSliderPos(pct);
  }, [isEn]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  }, [isDragging, updateSlider]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSlider(e.touches[0].clientX);
  }, [isDragging, updateSlider]);

  const clipStyle = isEn
    ? { clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }
    : { clipPath: `inset(0 0 0 ${100 - sliderPos}%)` };

  const positionStyle = isEn
    ? { left: `${sliderPos}%` }
    : { right: `${sliderPos}%` };

  const handlePosStyle = isEn
    ? { left: `calc(${sliderPos}% - 28px)` }
    : { right: `calc(${sliderPos}% - 28px)` };

  return (
    <section className="section section-dark" ref={revealRef}>
      <div className="glow-orb glow-orb-green w-[500px] h-[400px] bottom-[-100px] right-[10%] opacity-25" />

      <div className="container relative z-1">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">{t('before_after.badge')}</span>
          <h2 className="section-title">
            {t('before_after.title')}
          </h2>
          <p className="section-subtitle">
            {t('before_after.sub')}
          </p>
          <div className="section-divider" />
        </div>

        {/* Slider Container */}
        <div className="reveal max-w-[900px] mx-auto">
          <div
            ref={containerRef}
            className="relative w-full pb-[56.25%] rounded-[24px] overflow-hidden cursor-col-resize select-none shadow-[0_20px_80px_rgba(0,0,0,0.5)] border border-border-brand [direction:ltr]"
            onMouseMove={handleMouseMove}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (Base) */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/after.png)' }} />

            {/* Before Image (Clip) */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(/before.png)',
                ...clipStyle,
                transition: isDragging ? 'none' : 'clip-path 0.05s',
              }}
            />

            {/* Labels */}
            <div className="absolute top-5 left-5 bg-[#1A9E5F]/90 text-white px-4 py-1.5 rounded-[50px] font-bold text-[0.85rem] z-10 backdrop-blur-[4px]">
              <span>{t('before_after.after')}</span>
            </div>
            <div className="absolute top-5 right-5 bg-[#ef4444]/90 text-white px-4 py-1.5 rounded-[50px] font-bold text-[0.85rem] z-10 backdrop-blur-[4px]">
              <span>{t('before_after.before')}</span>
            </div>

            {/* Divider Line */}
            <div className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold-light via-gold to-gold-light z-20 -translate-x-1/2 shadow-[0_0_15px_rgba(201,162,39,0.6)]" style={positionStyle} />

            {/* Drag Handle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 z-30 cursor-col-resize"
              style={handlePosStyle}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center shadow-[0_4px_20px_rgba(201,162,39,0.5)] border-3 border-white/30 animate-[goldGlow_2s_ease-in-out_infinite]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 12L4 8M8 12L4 16M8 12H4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12L20 8M16 12L20 16M16 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="flex items-center justify-center gap-8 mt-5 flex-wrap">
            <div className="flex items-center gap-2 text-text-muted text-[0.88rem] font-medium">
              <div className="w-3 h-3 rounded-full bg-[#ef4444] flex-shrink-0" />
              <span>{t('before_after.desc_before')}</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted text-[0.88rem] font-medium">
              <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
              <span>{t('before_after.desc_after')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
