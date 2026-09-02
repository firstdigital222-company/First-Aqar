import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiPlay, FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import useScrollReveal from '../../hooks/useScrollReveal';

const PortfolioVideosSection = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const ref = useScrollReveal();

  const [activeIndex, setActiveIndex] = useState(2); // Start in the middle
  const [selectedVideo, setSelectedVideo] = useState(null);

  const isDirectVideo = (url) => {
    if (!url) return false;
    return (
      url.endsWith('.mp4') ||
      url.endsWith('.webm') ||
      url.includes('cloudinary.com') ||
      url.includes('video/upload')
    );
  };

  const videos = [
    {
      id: 'v1',
      titleAr: 'جولة فيديو حية — فيلا فاخرة التجمع الخامس',
      titleEn: 'Live Video Tour — Luxury Villa 5th Settlement',
      subtitleAr: 'تشطيب الترا سوبر لوكس',
      subtitleEn: 'Ultra Super Lux Finish',
      duration: '03:45',
      quality: '4K',
      locationAr: 'القاهرة الجديدة',
      locationEn: 'New Cairo',
      thumbnail: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254223/WhatsApp_Image_2026-06-03_at_11.20.54_AM_1.jpg',
      videoUrl: 'https://res.cloudinary.com/hjc7d6nr/video/upload/v1788254239/WhatsApp_Video_2026-06-03_at_11.20.53_AM_1.mp4',
    },
    {
      id: 'v2',
      titleAr: 'شقة دوبلكس 300م — الشيخ زايد',
      titleEn: 'Duplex 300m² — Sheikh Zayed',
      subtitleAr: 'تصميم وتشطيب مودرن',
      subtitleEn: 'Modern Design & Fit-out',
      duration: '02:50',
      quality: '4K',
      locationAr: 'الشيخ زايد',
      locationEn: 'Sheikh Zayed',
      thumbnail: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254187/WhatsApp_Image_2026-08-19_at_3.10.29_PM.jpg',
      videoUrl: 'https://res.cloudinary.com/hjc7d6nr/video/upload/v1788254209/WhatsApp_Video_2026-06-02_at_9.45.50_AM_4.mp4',
    },
    {
      id: 'v3',
      titleAr: 'مطعم وكافيه النيل — المعادي',
      titleEn: 'Nile Restaurant & Cafe — Maadi',
      subtitleAr: 'ديكورات وتجهيز تجاري',
      subtitleEn: 'Commercial Fit-out',
      duration: '04:15',
      quality: 'FHD',
      locationAr: 'المعادي',
      locationEn: 'Maadi',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
      videoUrl: 'https://res.cloudinary.com/hjc7d6nr/video/upload/v1788254223/WhatsApp_Video_2026-06-02_at_9.45.50_AM_6.mp4',
    },
    {
      id: 'v4',
      titleAr: 'مقر شركة ذكية — العاصمة الإدارية',
      titleEn: 'Smart Tech HQ — Capital City',
      subtitleAr: 'قواطع زجاج وعزل صوت',
      subtitleEn: 'Acoustic Glass Partitions',
      duration: '03:10',
      quality: '4K',
      locationAr: 'العاصمة الإدارية',
      locationEn: 'New Capital',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      videoUrl: 'https://res.cloudinary.com/hjc7d6nr/video/upload/v1788254223/WhatsApp_Video_2026-06-02_at_9.45.50_AM_6.mp4',
    },
    {
      id: 'v5',
      titleAr: 'مراحل صب وتركيب الرخام',
      titleEn: 'Marble & Flooring On-Site',
      subtitleAr: 'توثيق مراحل الموقع',
      subtitleEn: 'On-Site Execution',
      duration: '01:55',
      quality: '4K',
      locationAr: 'العاشر من رمضان',
      locationEn: '10th of Ramadan',
      thumbnail: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1000&q=80',
      videoUrl: 'https://res.cloudinary.com/hjc7d6nr/video/upload/v1788254223/WhatsApp_Video_2026-06-02_at_9.45.50_AM_6.mp4',
    },
    {
      id: 'v6',
      titleAr: 'شقة سكنية 190م — مدينة نصر',
      titleEn: '190m² Apartment — Nasr City',
      subtitleAr: 'أسقف جبسوم وإضاءة ليد',
      subtitleEn: 'Gypsum & LED Lighting',
      duration: '02:30',
      quality: 'FHD',
      locationAr: 'مدينة نصر',
      locationEn: 'Nasr City',
      thumbnail: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
      videoUrl: 'https://res.cloudinary.com/hjc7d6nr/video/upload/v1788254223/WhatsApp_Video_2026-06-02_at_9.45.50_AM_6.mp4',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Swipe / Drag Handler
  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      // Swiped Left
      isEn ? handleNext() : handlePrev();
    } else if (info.offset.x > threshold) {
      // Swiped Right
      isEn ? handlePrev() : handleNext();
    }
  };

  return (
    <section id="portfolio-videos" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-[#f4f7f5] text-[var(--text)] relative overflow-hidden select-none border-b border-[var(--border)]" ref={ref}>
      {/* Subtle Glow Effects for Light Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 font-bold text-xs sm:text-sm mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            {isEn ? '🎥 Video Walkthroughs' : '🎥 جولات الفيديو الحية'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1f18] tracking-tight">
            {isEn ? (
              <>Watch Our Work in <span className="text-[var(--primary)]">Live Action</span></>
            ) : (
              <>شاهد مشاريعنا <span className="text-[var(--primary)]">بالفيديو الحي</span></>
            )}
          </h2>
        </div>

        {/* 3D Coverflow Slider Showcase */}
        <div className="relative h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center overflow-visible">
          {videos.map((video, index) => {
            // Calculate relative offset from activeIndex
            const count = videos.length;
            let offset = index - activeIndex;
            // Handle wrap-around math for smooth circular indexing
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute 3D transforms based on offset
            const xTranslation = isEn ? offset * 250 : -offset * 250;
            const zIndex = 30 - Math.abs(offset) * 10;
            const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.68;
            const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.7 : 0.4;
            const rotateY = isEn ? offset * -12 : offset * 12;

            return (
              <motion.div
                key={video.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={{
                  x: xTranslation,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 25,
                }}
                onClick={() => {
                  if (isActive) {
                    setSelectedVideo(video);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className={`absolute w-[270px] sm:w-[320px] md:w-[350px] h-[430px] sm:h-[490px] md:h-[520px] rounded-[28px] overflow-hidden cursor-pointer shadow-2xl transition-shadow duration-300 ${isActive
                  ? 'border-2 border-emerald-600 shadow-[0_25px_60px_rgba(26,158,95,0.3)] ring-4 ring-emerald-500/20'
                  : 'border border-slate-300/80 shadow-lg hover:border-emerald-400'
                  }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={isEn ? video.titleEn : video.titleAr}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-black border border-white/10">
                    {video.quality}
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-semibold border border-white/10">
                    <FiClock className="text-[10px] text-emerald-400" />
                    {video.duration}
                  </span>
                </div>

                {/* Central Play Button on Active Card */}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-xl shadow-emerald-700/50 backdrop-blur-md transform transition-transform duration-300 hover:scale-110">
                      <FiPlay className="text-2xl translate-x-0.5 fill-current" />
                    </div>

                    {/* Drag Hint Pill on center */}
                    <div className="mt-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold tracking-widest text-white/90 border border-white/15">
                      {isEn ? '< DRAG >' : '< اسحب >'}
                    </div>
                  </div>
                )}

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col gap-2">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-white leading-tight mb-1">
                      {isEn ? video.titleEn : video.titleAr}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-white/80">
                      <span className="text-emerald-300 font-medium">
                        {isEn ? video.subtitleEn : video.subtitleAr}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-white/70">
                        <FiMapPin className="text-emerald-400" />
                        {isEn ? video.locationEn : video.locationAr}
                      </span>
                    </div>
                  </div>

                  {/* Sleek Pill Button */}
                  <div className="pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(video);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-white/15 hover:bg-[var(--primary)] text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md border border-white/20 hover:border-emerald-500 cursor-pointer shadow-md"
                    >
                      <FiPlay className="text-xs" />
                      <span>{isEn ? 'Watch Video' : 'مشاهدة الفيديو'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Left Arrow Button */}
          <button
            onClick={isEn ? handlePrev : handleNext}
            className="absolute left-2 sm:left-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[var(--primary)] text-slate-800 hover:text-white border border-slate-300 hover:border-emerald-500 backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl hover:scale-110"
            aria-label="Previous Slide"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={isEn ? handleNext : handlePrev}
            className="absolute right-2 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[var(--primary)] text-slate-800 hover:text-white border border-slate-300 hover:border-emerald-500 backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl hover:scale-110"
            aria-label="Next Slide"
          >
            <FiChevronRight size={22} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === i
                ? 'w-8 bg-[var(--primary)] shadow-sm'
                : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-[#0b1c15] text-white border border-emerald-500/30 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-scaleIn flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {selectedVideo.quality} • {selectedVideo.duration}
                </span>
                <span className="text-xs text-white/60 mx-1">|</span>
                <span className="text-xs text-white/80">
                  {isEn ? selectedVideo.titleEn : selectedVideo.titleAr}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              {isDirectVideo(selectedVideo.videoUrl || selectedVideo.embedUrl) ? (
                <video
                  src={selectedVideo.videoUrl || selectedVideo.embedUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={selectedVideo.embedUrl || selectedVideo.videoUrl}
                  title={isEn ? selectedVideo.titleEn : selectedVideo.titleAr}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Modal Footer with Direct Inquiry */}
            <div className="p-4 sm:p-5 bg-black/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-white">
                  {isEn ? selectedVideo.titleEn : selectedVideo.titleAr}
                </div>
                <div className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                  <FiMapPin /> {isEn ? selectedVideo.locationEn : selectedVideo.locationAr}
                </div>
              </div>

              <a
                href={`https://wa.me/201019688636?text=${encodeURIComponent(
                  `مرحباً فيرست عقار، أود الاستفسار عن تفاصيل فيديو مشروع: ${selectedVideo.titleAr}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-950 transition-all hover:scale-105"
              >
                <FaWhatsapp className="text-base" />
                <span>{isEn ? 'Inquire on WhatsApp' : 'تواصل عبر واتساب للمشروع'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioVideosSection;
