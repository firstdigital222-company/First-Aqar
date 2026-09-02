import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  FiMaximize2,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import useScrollReveal from '../../hooks/useScrollReveal';

const OurProjectsShowcaseSection = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const ref = useScrollReveal();

  const [activeProjectId, setActiveProjectId] = useState('p1');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Projects Data matching the 3 Google Drive projects
  const projects = [
    {
      id: 'p1',
      titleAr: 'تصميم شالية في السعودية — الدور الثاني',
      titleEn: 'Luxury Chalet Design in Saudi Arabia — 2nd Floor',
      taglineAr: 'تصميم معماري وداخلي 3D لشاليه راقي بإطلالات بانورامية وتراس مفتوح',
      taglineEn: 'High-end 3D Architectural & Interior Design for Luxury Chalet with Rooftop Terrace',
      country: '🇸🇦',
      locationAr: 'المملكة العربية السعودية',
      locationEn: 'Saudi Arabia',
      area: '220m²',
      scopeAr: 'تصميم 3D + مخططات 2D',
      scopeEn: '3D Design + 2D Blueprints',
      category: 'chalet',
      coverImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
      highlightsAr: [
        'تراس روف مفتوح مع مسبح إنفينيتي خاص',
        'صالون ومجلس عربي بروح مودرن معاصرة',
        'واجهات زجاجية دبل جلاس عازلة للحرارة',
        'إضاءات محيطية ليد مخفية للهدوء والاستجمام',
      ],
      highlightsEn: [
        'Open rooftop terrace with private infinity pool',
        'Contemporary Arabic majlis and luxury lounge',
        'Double-glazed thermal insulated curtain walls',
        'Concealed ambient LED lighting scheme',
      ],
      specs: [
        { labelAr: 'المساحة', labelEn: 'Area', val: '220 م²' },
        { labelAr: 'الدور', labelEn: 'Floor', val: 'الدور الثاني + روف' },
        { labelAr: 'النمط', labelEn: 'Style', val: 'مودرن لاكجري' },
        { labelAr: 'الحالة', labelEn: 'Status', val: 'تصميم معتمد 3D' },
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'إطلالة التراس الخارجي والمسبح الخاص بالدور الثاني',
          titleEn: '2nd Floor Rooftop Terrace & Infinity Pool View',
          tag: 'terrace',
          tagAr: 'التراس والمسبح',
          tagEn: 'Terrace & Pool',
        },
        {
          url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'الصالون والمجلس الرئيسي المفتوح مع زجاج بانورامي',
          titleEn: 'Main Open Lounge & Majlis with Panoramic Glass',
          tag: 'reception',
          tagAr: 'الصالون والمعيشة',
          tagEn: 'Lounge & Majlis',
        },
        {
          url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'منطقة المعيشة الدافئة مع تكسيات خشب طبيعي',
          titleEn: 'Warm Living Space with Natural Wood Louvers',
          tag: 'reception',
          tagAr: 'الصالون والمعيشة',
          tagEn: 'Lounge & Majlis',
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'ركن الجلسة العربية العصرية مع الإضاءة الليلية',
          titleEn: 'Modern Arabesque Corner with Night Ambient Glow',
          tag: 'reception',
          tagAr: 'الصالون والمعيشة',
          tagEn: 'Lounge & Majlis',
        },
        {
          url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'جناح النوم الماستر المودرن مع إطلالة مفتوحة',
          titleEn: 'Modern Master Suite with Open Landscape View',
          tag: 'bedroom',
          tagAr: 'غرفة الماستر',
          tagEn: 'Master Suite',
        },
        {
          url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'حمام ماستر فندقي بتشطيبات رخامية وزجاج سيكوريت',
          titleEn: 'Hotel-Grade Master Bath with Marble & Securit Glass',
          tag: 'details',
          tagAr: 'التفاصيل والحمام',
          tagEn: 'Details & Bath',
        },
        {
          url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'المنظور الخارجي للكتلة المعمارية والواجهات',
          titleEn: 'External 3D Perspective of Architectural Masses',
          tag: 'terrace',
          tagAr: 'التراس والمسبح',
          tagEn: 'Terrace & Pool',
        },
        {
          url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'جلسة الاسترخاء الخارجية والتنسيق النباتي',
          titleEn: 'Outdoor Lounge & Landscape Planters',
          tag: 'terrace',
          tagAr: 'التراس والمسبح',
          tagEn: 'Terrace & Pool',
        },
        {
          url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'مطبخ الشاليه المفتوح والأوبن بار العصري',
          titleEn: 'Open Concept Chalet Kitchen & Modern Breakfast Bar',
          tag: 'details',
          tagAr: 'التفاصيل والحمام',
          tagEn: 'Details & Bath',
        },
      ],
    },
    {
      id: 'p2',
      titleAr: 'مشروع تصميم دوبلكس في القاهره اتنين دور 250 متر',
      titleEn: 'Duplex Design Project in Cairo — 2 Floors 250m²',
      taglineAr: 'تصميم 3D فاخر للدورين مع بهو بارتفاع مضاعف وسلّم عائم عصري',
      taglineEn: 'Luxury 3D Design for 2-Story Duplex with Double-Height Foyer & Floating Staircase',
      country: '🇪🇬',
      locationAr: 'القاهرة — التجمع الخامس',
      locationEn: 'Cairo — 5th Settlement',
      area: '250m²',
      scopeAr: 'تصميم داخلي 3D + مخططات 2D',
      scopeEn: '3D Interior Design + Executive Plans',
      category: 'duplex',
      coverImage: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254231/WhatsApp_Image_2026-06-07_at_12.08.22_PM_3.jpg',
      highlightsAr: [
        'بهو استقبال ريسبشن بارتفاع مضاعف (Double Height)',
        'سلّم داخلي معلق بالزجاج السيكوريت والإضاءة المخفية',
        'توزيع هندسي ذكي يفصل منطقة الضيوف عن غرف المعيشة',
        'ماستر بد روم مع دريسنج روم متكامل وحمام خاص',
      ],
      highlightsEn: [
        'Grand double-height reception foyer',
        'Cantilevered floating staircase with securit glass & LED',
        'Smart architectural layout separating guest zones & suites',
        'Master bedroom with custom walk-in closet & ensuite bath',
      ],
      specs: [
        { labelAr: 'المساحة الإجمالية', labelEn: 'Total Area', val: '250 م²' },
        { labelAr: 'عدد الأدوار', labelEn: 'Floors', val: 'دورين متصلين' },
        { labelAr: 'النمط', labelEn: 'Style', val: 'نيوكلاسيك مودرن' },
        { labelAr: 'البرامج', labelEn: 'Software', val: '3Ds Max + Corona' },
      ],
      images: [
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254231/WhatsApp_Image_2026-06-07_at_12.08.22_PM_3.jpg',
          titleAr: 'الريسبشن المفتوح بارتفاع مضاعف مع إطلالة السلم العائم',
          titleEn: 'Double-Height Grand Reception with Floating Staircase',
          tag: 'reception',
          tagAr: 'الريسبشن والدور الأرضي',
          tagEn: 'Reception & Lower Floor',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254250/WhatsApp_Image_2026-06-07_at_12.08.20_PM_1.jpg',
          titleAr: 'تصميم صالون الاستقبال الفاخر مع الرخام الطبيعي',
          titleEn: 'Luxury Guest Salon Design with Natural Italian Marble',
          tag: 'reception',
          tagAr: 'الريسبشن والدور الأرضي',
          tagEn: 'Reception & Lower Floor',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254248/WhatsApp_Image_2026-06-07_at_12.08.22_PM_4.jpg',
          titleAr: 'غرفة السفرة وصالة الطعام العائلية المتصلة',
          titleEn: 'Interconnected Formal Dining Room & Family Space',
          tag: 'reception',
          tagAr: 'الريسبشن والدور الأرضي',
          tagEn: 'Reception & Lower Floor',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254241/WhatsApp_Image_2026-08-19_at_3.10.28_PM_2.jpg',
          titleAr: 'صالة المعيشة العلوية بالدور الثاني للخصوصية',
          titleEn: 'Upper Living Lounge on the 2nd Floor for Privacy',
          tag: 'upper',
          tagAr: 'الدور العلوي والأجنحة',
          tagEn: 'Upper Floor & Suites',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254242/WhatsApp_Image_2026-06-07_at_12.08.23_PM.jpg',
          titleAr: 'جناح غرفة النوم الرئيسية الماستر بالديكورات الذهبية',
          titleEn: 'Master Bedroom Suite with Gilded Neoclassic Accents',
          tag: 'upper',
          tagAr: 'الدور العلوي والأجنحة',
          tagEn: 'Upper Floor & Suites',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254239/WhatsApp_Image_2026-08-19_at_3.10.28_PM_1.jpg',
          titleAr: 'غرفة ملابس دريسنج روم مدمجة بوحدات إضاءة ذكية',
          titleEn: 'Integrated Walk-in Dressing Room with Smart Lighting',
          tag: 'upper',
          tagAr: 'الدور العلوي والأجنحة',
          tagEn: 'Upper Floor & Suites',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254232/WhatsApp_Image_2026-06-07_at_12.08.22_PM_5.jpg',
          titleAr: 'المطبخ المودرن مع رخام الكوارتز وخزائن بولي لاك',
          titleEn: 'Modern Kitchen with Quartz Marble & Poly-Lac Cabinets',
          tag: 'details',
          tagAr: 'التفاصيل والمطبخ',
          tagEn: 'Details & Kitchen',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254231/WhatsApp_Image_2026-06-07_at_12.08.21_PM_2.jpg',
          titleAr: 'حمام الضيوف بالدور الأرضي مع تجاليد رخامية',
          titleEn: 'Guest Powder Room on Lower Level with Marble Cladding',
          tag: 'details',
          tagAr: 'التفاصيل والمطبخ',
          tagEn: 'Details & Kitchen',
        },
        {
          url: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254224/WhatsApp_Image_2026-06-03_at_11.24.19_AM.jpg',
          titleAr: 'المخطط التنفيذي وتوزيع الفراغات 2D للدورين',
          titleEn: 'Executive 2D Floor Plan & Spatial Layout for Both Levels',
          tag: 'plans',
          tagAr: 'المخططات الهندسية',
          tagEn: 'Engineering Plans',
        },
      ],
    },
    {
      id: 'p3',
      titleAr: 'مشروع تنفيذ شقه 190 متر القاهره',
      titleEn: 'Turnkey Apartment Execution Project 190m² Cairo',
      taglineAr: 'تنفيذ وتشطيب سوبر لوكس على أرض الواقع بأفخم الخامات المعمارية',
      taglineEn: 'Turnkey Real-Life Super Deluxe Finishing & Fit-out with Premium Materials',
      country: '🇪🇬',
      locationAr: 'القاهرة — الشيخ زايد',
      locationEn: 'Cairo — Sheikh Zayed',
      area: '190m²',
      scopeAr: 'تنفيذ وتشطيب كامل تسليم مفتاح',
      scopeEn: 'Full Turnkey Execution & Finishing',
      category: 'execution',
      coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      highlightsAr: [
        'أرضيات بورسلين ستاتوريو إيطالي فرز أول مقاس كبير',
        'أسقف جبسوم بورد مع مسارات بروفايل ليد مغناطيسي',
        'تكسيات حوائط بديل خشب وبديل رخام UV مقاوم للخدش',
        'تأسيس كهرباء السويدي وسباكة بي آر معتمدة بضمان 10 سنوات',
      ],
      highlightsEn: [
        'Large-format Italian Statuario porcelain tiles',
        'Gypsum ceilings with magnetic recessed LED profiles',
        'Scratch-resistant UV marble & fluted wood wall panels',
        'El Sewedy cables & BR certified plumbing with 10-yr warranty',
      ],
      specs: [
        { labelAr: 'المساحة المنجزة', labelEn: 'Finished Area', val: '190 م²' },
        { labelAr: 'مستوى التشطيب', labelEn: 'Finishing Level', val: 'سوبر ديلوكس VIP' },
        { labelAr: 'مدة التنفيذ', labelEn: 'Execution Time', val: '60 يوماً' },
        { labelAr: 'الضمان', labelEn: 'Warranty', val: '10 سنوات شامل' },
      ],
      images: [
        {
          url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'الريسبشن بعد انتهاء التشطيب وتنسيق الإضاءة المغناطيسية',
          titleEn: 'Completed Reception with Modern Magnetic Track Lighting',
          tag: 'reception',
          tagAr: 'الريسبشن والصالة',
          tagEn: 'Reception & Hall',
        },
        {
          url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'صالون الاستقبال مع تجاليد الحوائط الخشبية وبديل الرخام',
          titleEn: 'Living Salon with Fluted Wood Slats & Marble Backdrops',
          tag: 'reception',
          tagAr: 'الريسبشن والصالة',
          tagEn: 'Reception & Hall',
        },
        {
          url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'مطبخ بولي لاك مدمج مقاوم للمياه والحرارة مع بلوم نمساوي',
          titleEn: 'Custom Built-in Poly-Lac Kitchen with Austrian Blum Hardware',
          tag: 'kitchen',
          tagAr: 'المطبخ والخدمات',
          tagEn: 'Kitchen & Services',
        },
        {
          url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'غرفة النوم الماستر بأرضيات باركيه HDF ألماني عازل',
          titleEn: 'Master Bedroom with German Acoustic HDF Wood Flooring',
          tag: 'bedroom',
          tagAr: 'غرف النوم',
          tagEn: 'Bedrooms',
        },
        {
          url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'غرفة المعيشة وغرفة الأطفال مع ألوان جوتن فينوماستيك',
          titleEn: 'Family Room & Kids Bedroom with Jotun Fenomastic Coat',
          tag: 'bedroom',
          tagAr: 'غرف النوم',
          tagEn: 'Bedrooms',
        },
        {
          url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'حمام ماستر فندقي مع شاور روم زجاج سيكوريت 10مم',
          titleEn: 'Hotel Bathroom with 10mm Tempered Glass Shower Enclosure',
          tag: 'bath',
          tagAr: 'الحمامات',
          tagEn: 'Bathrooms',
        },
        {
          url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'دقة تشطيب البانوهات الجدارية وكرانيش الفيوتك المضيئة',
          titleEn: 'Precision Wall Moldings & Illuminated Cornice Details',
          tag: 'reception',
          tagAr: 'الريسبشن والصالة',
          tagEn: 'Reception & Hall',
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85',
          titleAr: 'ممر الشقة والمداخل مع إضاءات سبوت لايت ليد ضد التوهج',
          titleEn: 'Hallway & Entrance with Anti-Glare Architectural Spotlights',
          tag: 'reception',
          tagAr: 'الريسبشن والصالة',
          tagEn: 'Reception & Hall',
        },
      ],
    },
  ];

  const currentProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  // Select Project
  const handleSelectProject = (id) => {
    setActiveProjectId(id);
    setLightboxIndex(null);
  };

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        if (isEn) {
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentProject.images.length - 1));
        } else {
          setLightboxIndex((prev) => (prev < currentProject.images.length - 1 ? prev + 1 : 0));
        }
      }
      if (e.key === 'ArrowRight') {
        if (isEn) {
          setLightboxIndex((prev) => (prev < currentProject.images.length - 1 ? prev + 1 : 0));
        } else {
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : currentProject.images.length - 1));
        }
      }
    },
    [lightboxIndex, currentProject.images.length, isEn]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const generateWhatsAppUrl = (projectName, imageTitle = '') => {
    const text = encodeURIComponent(
      isEn
        ? `Hello First Aqar, I am inquiring about the project "${projectName}" ${imageTitle ? `specifically: ${imageTitle}` : ''}. I'd like to get details/quotation.`
        : `السلام عليكم فيرست عقار، أود الاستفسار عن "${projectName}" ${imageTitle ? `بخصوص: (${imageTitle})` : ''} ومعرفة التفاصيل والتكلفة التقديرية.`
    );
    return `https://wa.me/201017772635?text=${text}`;
  };

  return (
    <section
      id="our-projects-section"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#061510] via-[#09221a] to-[#061510] text-white overflow-hidden"
      ref={ref}
    >
      {/* Background Lighting & Glow Orbs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1A9E5F_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold mb-4 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isEn ? '🌟 Signature Portfolios' : '🌟 مشاريعنا المنفذة والحصرية'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            {isEn ? (
              <>
                Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-300">Projects Album</span>
              </>
            ) : (
              <>
                معرض <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-300">مشاريعنا الاستثنائية</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/70 max-w-2xl mx-auto leading-relaxed">
            {isEn
              ? 'Browse detailed high-resolution image galleries for our three signature projects across Saudi Arabia & Cairo.'
              : 'اختر المشروع لاستعراض كامل ألبوم الصور بدقة عالية.'}
          </p>
        </div>

        {/* 1. Project Selector Cards (The 3 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10">
          {projects.map((proj) => {
            const isSelected = proj.id === activeProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelectProject(proj.id)}
                className={`relative text-start p-5 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden group border ${isSelected
                  ? 'bg-gradient-to-br from-emerald-950/90 via-[#0d2a20]/90 to-emerald-900/60 border-emerald-400/60 shadow-[0_12px_40px_rgba(26,158,95,0.25)] scale-[1.02]'
                  : 'bg-[#0a1e16]/60 hover:bg-[#0e271e]/80 border-emerald-500/15 hover:border-emerald-500/30'
                  }`}
              >
                {/* Active Indicator Top Accent Bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 animate-pulse" />
                )}

                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-2xl sm:text-3xl drop-shadow-md">{proj.country}</span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-bold transition-colors ${isSelected
                      ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                      : 'bg-emerald-500/10 text-emerald-300/80 border border-emerald-500/20'
                      }`}
                  >
                    {proj.images.length} {isEn ? 'HD Photos' : 'صور عالية الدقة'}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold leading-snug mb-2 transition-colors ${isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}
                >
                  {isEn ? proj.titleEn : proj.titleAr}
                </h3>

                <div className="flex items-center gap-2 text-xs text-emerald-300/80 font-medium">
                  <FiMapPin className="text-amber-400" />
                  <span>{isEn ? proj.locationEn : proj.locationAr}</span>
                  <span className="opacity-40">•</span>
                  <span>{proj.area}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Photo Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {currentProject.images.map((img, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                key={activeProjectId + '-' + index}
                onClick={() => setLightboxIndex(index)}
                className={`group relative bg-emerald-950/40 rounded-2xl overflow-hidden border border-emerald-500/20 cursor-pointer hover:border-emerald-400/60 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(26,158,95,0.25)] hover:-translate-y-1 ${index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                  }`}
              >
                {/* Photo Image */}
                <div
                  className={`relative overflow-hidden w-full ${index === 0
                    ? 'h-[320px] sm:h-[450px] lg:h-[500px]'
                    : 'h-[240px] sm:h-[260px]'
                    }`}
                >
                  <img
                    src={img.url}
                    alt={isEn ? img.titleEn : img.titleAr}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Subtle Hover Overlay with Center Maximize Icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/90 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <FiMaximize2 className="text-xl" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ================= FULL SCREEN LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {lightboxIndex !== null && currentProject.images[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Modal Header */}
            <div
              className="flex items-center justify-between text-white relative z-20 pb-3 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{currentProject.country}</span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-emerald-300">
                    {isEn ? currentProject.titleEn : currentProject.titleAr}
                  </h4>
                  <div className="text-xs text-white/60">
                    {lightboxIndex + 1} {isEn ? 'of' : 'من'} {currentProject.images.length}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={generateWhatsAppUrl(
                    isEn ? currentProject.titleEn : currentProject.titleAr,
                    isEn
                      ? currentProject.images[lightboxIndex]?.titleEn
                      : currentProject.images[lightboxIndex]?.titleAr
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow"
                >
                  <FaWhatsapp className="text-base" />
                  <span>{isEn ? 'Inquire on WhatsApp' : 'تواصل واتساب للاستفسار'}</span>
                </a>

                <button
                  onClick={() => setLightboxIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/80 text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <FiX size={22} />
                </button>
              </div>
            </div>

            {/* Center Stage & Nav Buttons */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev > 0 ? prev - 1 : currentProject.images.length - 1
                  )
                }
                className="absolute start-2 sm:start-6 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-emerald-500 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                {isEn ? <FiChevronLeft size={26} /> : <FiChevronRight size={26} />}
              </button>

              {/* Main Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                src={currentProject.images[lightboxIndex].url}
                alt={
                  isEn
                    ? currentProject.images[lightboxIndex].titleEn
                    : currentProject.images[lightboxIndex].titleAr
                }
                className="max-h-[70vh] max-w-[92vw] object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10"
              />

              {/* Next Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev < currentProject.images.length - 1 ? prev + 1 : 0
                  )
                }
                className="absolute end-2 sm:end-6 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-emerald-500 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                {isEn ? <FiChevronRight size={26} /> : <FiChevronLeft size={26} />}
              </button>
            </div>

            {/* Bottom Caption & Thumbnail Strip */}
            <div
              className="relative z-20 flex flex-col items-center gap-3 pt-3 border-t border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-center text-white text-sm sm:text-base font-bold max-w-3xl">
                {isEn
                  ? currentProject.images[lightboxIndex].titleEn
                  : currentProject.images[lightboxIndex].titleAr}
              </p>

              {/* Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
                {currentProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className={`shrink-0 w-14 sm:w-16 h-10 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${lightboxIndex === idx
                      ? 'border-emerald-400 scale-110 shadow-lg'
                      : 'border-white/15 opacity-40 hover:opacity-80'
                      }`}
                  >
                    <img
                      src={img.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurProjectsShowcaseSection;

