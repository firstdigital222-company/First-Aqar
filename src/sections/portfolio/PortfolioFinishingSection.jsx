import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FiCheckCircle,
  FiMaximize2,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiCalendar,
  FiShield,
  FiCheck,
  FiGrid,
  FiArrowUpRight,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import useScrollReveal from '../../hooks/useScrollReveal';

const PortfolioFinishingSection = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const ref = useScrollReveal();

  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { id: 'all', labelAr: 'جميع أعمال التشطيب', labelEn: 'All Finishes' },
    { id: 'apartments', labelAr: 'شقق ودوبلكس', labelEn: 'Apartments' },
    { id: 'villas', labelAr: 'فلل وقصور', labelEn: 'Villas' },
    { id: 'commercial', labelAr: 'مطاعم وكافيهات', labelEn: 'Commercial' },
    { id: 'offices', labelAr: 'مقرات إدارية', labelEn: 'Offices' },
    { id: 'decor', labelAr: 'رخام وأسقف وإضاءة', labelEn: 'Marble & Decor' },
  ];

  const finishingProjects = [
    {
      id: 'f1',
      titleAr: 'تشطيب فيلا متكاملة الترا سوبر لوكس — التجمع الخامس',
      titleEn: 'Turnkey Luxury Villa Finishing — 5th Settlement, New Cairo',
      category: 'villas',
      levelAr: 'ألترا سوبر لوكس',
      levelEn: 'Ultra Super Lux',
      durationAr: 'مدة التنفيذ: 75 يوم',
      durationEn: 'Duration: 75 Days',
      area: '480m²',
      locationAr: 'القاهرة الجديدة — التجمع الخامس',
      locationEn: 'New Cairo — 5th Settlement',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تم تنفيذ التشطيب بالكامل بنظام تسليم المفتاح، وشمل أرضيات رخام ستاتوريو إيطالي، دهانات جوتن فينوماستيك، أسقف جبسوم بورد مع بيت نور مغناطيسي، وتكييف مركزي متكامل.',
      descriptionEn: 'Full turnkey execution featuring Italian Statuario marble floors, Jotun Fenomastic coatings, acoustic gypsum ceilings with magnetic profile lighting, and concealed central HVAC.',
      featuresAr: ['رخام ستاتوريو إيطالي', 'تكييف كونسيلد مخفي', 'سمارت هوم KNX', 'دهانات جوتن الأصلية'],
      featuresEn: ['Italian Statuario Marble', 'Concealed Duct HVAC', 'KNX Smart Automation', 'Original Jotun Coatings'],
    },
    {
      id: 'f2',
      titleAr: 'تنفيذ وتشطيب ريسبشن مفتوح وصالة معيشة ملكية — الشيخ زايد',
      titleEn: 'Open Grand Reception & Living Space Fit-out — Sheikh Zayed',
      category: 'apartments',
      levelAr: 'سوبر ديلوكس',
      levelEn: 'Super Deluxe',
      durationAr: 'مدة التنفيذ: 45 يوم',
      durationEn: 'Duration: 45 Days',
      area: '130m²',
      locationAr: 'الشيخ زايد — سوديك',
      locationEn: 'Sheikh Zayed — SODIC',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تنفيذ تجاليد خشبية فاخرة بديل الخشب وبديل الرخام، مع تظبيط مناسيب الأسقف وتركيب إضاءات سبوت لايت ليد موفرة للطاقة ولمسات ديكورية ذهبية.',
      descriptionEn: 'Premium wood slat paneling, engineered marble composite accents, leveled dropped ceilings with anti-glare architectural spotlights.',
      featuresAr: ['بديل خشب ورخام UV', 'إضاءات ضد التوهج', 'بانوهات كلاسيك', 'سيراميك كليوباترا فرز أول'],
      featuresEn: ['UV Marble & Wood Slat Paneling', 'Anti-Glare Spotlights', 'Classic Wall Moldings', 'Grade-A Porcelain Slabs'],
    },
    {
      id: 'f3',
      titleAr: 'تجهيز وتشطيب مطبخ عصري مدمج بتشطيبات ألمانية — المعادي',
      titleEn: 'German-Spec Modern Kitchen Fit-out — Maadi Sarayat',
      category: 'decor',
      levelAr: 'ألترا مودرن VIP',
      levelEn: 'Ultra Modern VIP',
      durationAr: 'مدة التنفيذ: 25 يوم',
      durationEn: 'Duration: 25 Days',
      area: '28m²',
      locationAr: 'القاهرة — المعادي السرايات',
      locationEn: 'Cairo — Maadi Sarayat',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تفصيل وتركيب وحدات مطبخ بولي لاك عالي اللمعان مقاوم للحرارة والرطوبة، مع مفصلات بلوم النمساوية الأصلية بسوفت كلوز ومسطح كوارتز نانو.',
      descriptionEn: 'High-gloss heat and humidity-proof Poly-Lac cabinetry, genuine Austrian Blum soft-close mechanisms, and nano-engineered quartz countertops.',
      featuresAr: ['مفصلات بلوم سوفت كلوز', 'كوارتز مضاد للبقع', 'إضاءة سينسور ذكية', 'توزيع صحي معتمد'],
      featuresEn: ['Austrian Blum Soft-Close', 'Stain-Proof Nano Quartz', 'Smart Sensor LEDs', 'Certified Plumbing Routes'],
    },
    {
      id: 'f4',
      titleAr: 'تشطيب حمام ماستر فندقي بالرخام الطبيعي والزجاج السيكوريت',
      titleEn: 'Hotel-Grade Master Bathroom Fit-out with Natural Marble & Securit Glass',
      category: 'decor',
      levelAr: 'VIP فندقي',
      levelEn: 'Hotel-Grade VIP',
      durationAr: 'مدة التنفيذ: 20 يوم',
      durationEn: 'Duration: 20 Days',
      area: '16m²',
      locationAr: 'مدينة نصر — مكرم عبيد',
      locationEn: 'Nasr City — Makram Ebeid',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'عزل مائي ألماني مزدوج مع اختبار 72 ساعة، كبائن شاور زجاج 10مم سيكوريت معالج، وخلاطات جروهي ألمانية مدفونة بالحائط.',
      descriptionEn: 'Double German elastomeric waterproofing tested for 72 hours, 10mm tempered safety glass shower enclosure, and concealed Grohe brassware.',
      featuresAr: ['عزل مائي معتمد 100%', 'خلاطات جروهي ألماني مدفونة', 'حوض رخام تفصيل', 'مرايا ليد تاتش مضادة للبخار'],
      featuresEn: ['Certified Waterproof Membrane', 'Concealed Grohe German Mixers', 'Custom Stone Basin', 'Anti-Fog Touch Mirror'],
    },
    {
      id: 'f5',
      titleAr: 'تشطيب وتجهيز مطعم وكافيه على الطراز الأوروبي — مدينة نصر',
      titleEn: 'European Style Restaurant & Cafe Turnkey Fit-out — Nasr City',
      category: 'commercial',
      levelAr: 'تجاري سوبر لوكس',
      levelEn: 'Commercial Super Lux',
      durationAr: 'مدة التنفيذ: 50 يوم',
      durationEn: 'Duration: 50 Days',
      area: '320m²',
      locationAr: 'القاهرة — مدينة نصر',
      locationEn: 'Cairo — Nasr City',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تنفيذ أعمال العزل الصوتي، شبكات الإطفاء والسلامة المعتمدة، الأرضيات الإيبوكسية والبورسلين عالي التحمل، والديكورات المعدنية الذهبية.',
      descriptionEn: 'Acoustic treatment, civil defense approved fire suppression network, heavy-duty commercial porcelain and bespoke gold-coated brass trim.',
      featuresAr: ['عزل صوتي متطور', 'شبكة إطفاء حريق معتمدة', 'أرضيات شديدة التحمل', 'ديكورات حديد مشغول وذهب'],
      featuresEn: ['Advanced Acoustic Layer', 'Civil Defense Approved Fire System', 'High-Traffic Flooring', 'Bespoke Brass & Steel Works'],
    },
    {
      id: 'f6',
      titleAr: 'تشطيب مقر شركة ومكاتب إدارية متطورة — العاشر من رمضان',
      titleEn: 'Corporate Tech Headquarters & Executive Offices — 10th of Ramadan',
      category: 'offices',
      levelAr: 'إداري فئة أ (Class A)',
      levelEn: 'Class-A Corporate',
      durationAr: 'مدة التنفيذ: 60 يوم',
      durationEn: 'Duration: 60 Days',
      area: '450m²',
      locationAr: 'العاشر من رمضان — بجوار البنك الأهلي',
      locationEn: '10th of Ramadan — Next to NBE',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'قواطع زجاجية سيكوريت عازلة للصوت، أسقف بلاطات جبسية معلقة 60x60 مع توزيع إضاءة مريحة للعين، وأرضيات موكيت مكتبي تركي مقاوم للحريق.',
      descriptionEn: 'Acoustic glass partitions, 60x60 dropped acoustic grid tiles with eye-friendly flicker-free LED panels, and fire-retardant heavy-traffic modular carpet.',
      featuresAr: ['قواطع زجاج سيكوريت عازل', 'شبكات داتا وكاميرات', 'موكيت مكتبي مقاوم للحريق', 'تكييف مركزي متوازن'],
      featuresEn: ['Acoustic Glass Partitions', 'Cat6 Data & CCTV Setup', 'Fire-Retardant Carpet Tiles', 'Balanced Central Climate Control'],
    },
    {
      id: 'f7',
      titleAr: 'تشطيب غرفة نوم رئيسية ماستر بأرضيات باركيه طبيعي وإضاءات خافتة',
      titleEn: 'Master Bedroom Suite with Natural Parquet Flooring & Ambient LEDs',
      category: 'apartments',
      levelAr: 'ألترا سوبر لوكس',
      levelEn: 'Ultra Super Lux',
      durationAr: 'مدة التنفيذ: 30 يوم',
      durationEn: 'Duration: 30 Days',
      area: '42m²',
      locationAr: 'القاهرة الجديدة — الياسمين',
      locationEn: 'New Cairo — Al Yasmin',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تنفيذ بانوهات جدارية ناعمة بدهانات قطيفة مهدئة للأعصاب، أرضيات باركيه HDF ألماني عالي المقاومة، وستائر كهربائية مدمجة بالجبسوم بورد.',
      descriptionEn: 'Subtle wall mouldings in velvety calming hues, German AC5 heavy-traffic HDF parquet, and motorized ceiling-recessed drapery tracks.',
      featuresAr: ['باركيه HDF ألماني AC5', 'ستائر سمارت مدمجة بالجبس', 'عزل صوتي للأبواب', 'دهانات صحية مضادة للبكتيريا'],
      featuresEn: ['German HDF Parquet AC5', 'Smart Recessed Curtain Tracks', 'Acoustic Door Seals', 'Anti-Bacterial Eco Paints'],
    },
    {
      id: 'f8',
      titleAr: 'تشطيب بهو ومدخل قصر كلاسيكي بالأعمدة الرخامية والزخارف الجبسية',
      titleEn: 'Palatial Entrance Foyer with Classical Marble Columns & Handcrafted Gypsum',
      category: 'villas',
      levelAr: 'ملكي فاخر VIP',
      levelEn: 'Royal Palatial VIP',
      durationAr: 'مدة التنفيذ: 90 يوم',
      durationEn: 'Duration: 90 Days',
      area: '210m²',
      locationAr: 'الشيخ زايد — رويال سيتي',
      locationEn: 'Sheikh Zayed — Royal City',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'نحت يدوي دقيق للزخارف الكلاسيكية والكرانيش والقباب، مع ووترجيت رخامي مخصص لمركز البهو ودرابزين حديد فيرفورجيه مطلي بماء الذهب.',
      descriptionEn: 'Hand-carved classical gypsum mouldings, customized center waterjet marble rosette medallion, and hand-forged wrought iron staircase with gold leaf.',
      featuresAr: ['ووترجيت رخام تفصيل', 'كرانيش جبس فرنسي يدوي', 'حديد مشغول بماء الذهب', 'إنارة ثريات كريستال'],
      featuresEn: ['Bespoke Waterjet Marble Medallion', 'French Handcrafted Gypsum', 'Gold-Leaf Wrought Iron', 'Heavy Crystal Chandelier Anchors'],
    },
    {
      id: 'f9',
      titleAr: 'تنفيذ أسقف معلقة مودرن مع شبكة ماجنتيك تراك لايت وإضاءة خطية',
      titleEn: 'Modern Suspended Ceilings with Magnetic Track Light & Linear Profiles',
      category: 'decor',
      levelAr: 'ألترا مودرن',
      levelEn: 'Ultra Modern',
      durationAr: 'مدة التنفيذ: 18 يوم',
      durationEn: 'Duration: 18 Days',
      area: '160m²',
      locationAr: 'القاهرة الجديدة — النرجس',
      locationEn: 'New Cairo — Al Narges',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'ألواح جبسوم بورد كناوف أصلية مقاومة للحريق والرطوبة، مع مسارات ماجنتيك تراك تتيح تحريك وتغيير الإضاءات بحرية تامة.',
      descriptionEn: 'Genuine Knauf moisture and fire-rated gypsum board with recessed magnetic track rails allowing full freedom of spotlight repositioning.',
      featuresAr: ['جبسوم بورد كناوف الأصلي', 'مسارات ماجنتيك قابلة للتعديل', 'شريط ليد كوف لايت 24V', 'معالجة فواصل فايبر جلاس'],
      featuresEn: ['Original Knauf Gypsum Board', 'Modular Magnetic Tracks', '24V Anti-flicker Cove LEDs', 'Fiberglass Mesh Joint Sealing'],
    },
    {
      id: 'f10',
      titleAr: 'تشطيب شقة سكنية 220م متكاملة — العاشر من رمضان',
      titleEn: '220m² Full Apartment Finishing — 10th of Ramadan City',
      category: 'apartments',
      levelAr: 'سوبر لوكس',
      levelEn: 'Super Lux',
      durationAr: 'مدة التنفيذ: 40 يوم',
      durationEn: 'Duration: 40 Days',
      area: '220m²',
      locationAr: 'العاشر من رمضان — المجاورة 33',
      locationEn: '10th of Ramadan — District 33',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تأسيس كهرباء السويدي معتمد، سباكة الشريف وضمان 10 سنوات، أرضيات بورسلين 120x60 ليزر كت، ودهانات ناعمة متناسقة.',
      descriptionEn: 'Certified El-Sewedy copper wiring, El-Sherif PPR piping with 10-year warranty, 120x60 rectified laser-cut porcelain, and sleek palette.',
      featuresAr: ['أسلاك كهرباء السويدي معتمدة', 'سباكة بضمان 10 سنوات', 'بورسلين ليزر كت 120x60', 'أبواب خشب موسكي وقشرة أرو'],
      featuresEn: ['Certified El-Sewedy Wiring', '10-Year Guaranteed Plumbing', 'Laser-Cut 120x60 Porcelain', 'Oak Veneered Solid Core Doors'],
    },
    {
      id: 'f11',
      titleAr: 'تجهيز صالة استقبال وضيافة VIP لمركز طبي ومختبرات تخصصية',
      titleEn: 'VIP Reception & Patient Lounge Fit-out for Specialized Medical Center',
      category: 'commercial',
      levelAr: 'طبي معتمد',
      levelEn: 'Medical Grade Clean',
      durationAr: 'مدة التنفيذ: 35 يوم',
      durationEn: 'Duration: 35 Days',
      area: '180m²',
      locationAr: 'حلوان — القاهرة',
      locationEn: 'Helwan — Cairo',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'دهانات طبية مضادة للبكتيريا وسهلة التعقيم، أرضيات فينيل طبي هوموجينوس بدون فواصل، وكاونتر استقبال رخامي مضيء.',
      descriptionEn: 'Anti-bacterial wipeable clinical wall coatings, seamless homogeneous medical vinyl flooring, and backlit translucent reception desk.',
      featuresAr: ['فينيل طبي مقاوم للبكتيريا', 'دهانات طبية قابلة للغسيل', 'تكييف هيبا فلتر طبي', 'كاونتر رخام مضيء'],
      featuresEn: ['Anti-Bacterial Homogeneous Vinyl', 'Sterilizable Washable Coatings', 'HEPA-Filtered Ventilation', 'Backlit Translucent Reception'],
    },
    {
      id: 'f12',
      titleAr: 'تشطيب فيلا توين هاوس مع تنسيق تراس خارجي وجلسة برمجولا',
      titleEn: 'Twin-House Villa Finishing with Outdoor Pergola Patio & Decking',
      category: 'villas',
      levelAr: 'سوبر لوكس VIP',
      levelEn: 'Super Lux VIP',
      durationAr: 'مدة التنفيذ: 55 يوم',
      durationEn: 'Duration: 55 Days',
      area: '310m²',
      locationAr: 'القاهرة الجديدة — زيزينيا',
      locationEn: 'New Cairo — Zizinia',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تشطيب داخلي متكامل مع تنفيذ أرضيات خشب WPC خارجية للتراس المقاوم للشمس والأمطار، وبرمجولا خشبية مودرن بإضاءات ليد.',
      descriptionEn: 'Comprehensive interior finishing combined with outdoor weather-resistant WPC composite decking and modern pergola with integrated lights.',
      featuresAr: ['أرضيات WPC ضد العوامل الجوية', 'برمجولا خشبية مودرن', 'تأسيس كامل للسباكة والكهرباء', 'تسليم على المفتاح'],
      featuresEn: ['Weatherproof WPC Decking', 'Modern Illuminated Pergola', 'Complete MEP Execution', 'Turnkey Handover'],
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? finishingProjects
      : finishingProjects.filter((p) => p.category === activeFilter);

  // Keyboard Navigation for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        isEn
          ? setLightboxIndex((prev) => (prev + 1) % filteredProjects.length)
          : setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
      }
      if (e.key === 'ArrowLeft') {
        isEn
          ? setLightboxIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
          : setLightboxIndex((prev) => (prev + 1) % filteredProjects.length);
      }
    },
    [lightboxIndex, filteredProjects.length, isEn]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentProject = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  // 4 Preview Slots
  const previewItems = filteredProjects.slice(0, 4);
  const remainingCount = Math.max(0, filteredProjects.length - 3);

  return (
    <section id="portfolio-finishing" className="py-20 lg:py-28 bg-[var(--bg-card2)] relative overflow-hidden border-t border-[var(--border)]" ref={ref}>
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Reversed 2-Column Grid Layout: Photos on the left, Text & Filters on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Column 1 (Visuals / 4 Square Grid Photos on the Left in RTL) */}
          <div className="lg:col-span-6 order-2 lg:order-1 reveal delay-1">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 p-3 sm:p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl shadow-xl shadow-slate-900/5">
              {previewItems.map((item, idx) => {
                const isFourthSlot = idx === 3 && filteredProjects.length > 4;

                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-slate-950 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={isEn ? item.titleEn : item.titleAr}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:via-black/10 transition-colors" />

                    {/* Regular Preview Slot */}
                    {!isFourthSlot ? (
                      <>
                        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                          <span className="px-2 py-0.5 rounded-md bg-teal-600/90 text-white text-[10px] font-black backdrop-blur-md">
                            {isEn ? item.levelEn : item.levelAr}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-black/60 text-emerald-300 text-[10px] font-semibold backdrop-blur-md">
                            {item.area}
                          </span>
                        </div>

                        {/* Hover Zoom Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <div className="w-11 h-11 rounded-full bg-white/90 text-teal-950 flex items-center justify-center shadow-lg backdrop-blur-md">
                            <FiMaximize2 size={18} />
                          </div>
                        </div>

                        {/* Bottom Title */}
                        <div className="absolute bottom-2.5 inset-x-2.5 text-white">
                          <h4 className="text-xs sm:text-sm font-bold line-clamp-1 group-hover:text-teal-300 transition-colors">
                            {isEn ? item.titleEn : item.titleAr}
                          </h4>
                          <span className="text-[10px] text-white/70 flex items-center gap-1 mt-0.5">
                            <FiMapPin className="text-teal-400 text-[10px]" />
                            {isEn ? item.locationEn : item.locationAr}
                          </span>
                        </div>
                      </>
                    ) : (
                      /* 4th Slot with "+N" Overlay */
                      <div className="absolute inset-0 bg-black/75 backdrop-blur-[6px] group-hover:bg-black/80 transition-all flex flex-col items-center justify-center text-white p-3 text-center">
                        <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <FiMaximize2 size={20} />
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-teal-400 tracking-wider">
                          +{remainingCount}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white/90 mt-1">
                          {isEn ? 'View All Finishes' : 'المزيد من التشطيبات'}
                        </div>
                        <span className="text-[10px] text-white/60 mt-1">
                          {isEn ? `(${filteredProjects.length} Projects)` : `(${filteredProjects.length} مشروع منجز)`}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2 (Text, Description, Filters & CTA on the Right in RTL) */}
          <div className="lg:col-span-6 order-1 lg:order-2 reveal space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-700 dark:text-teal-400 font-bold text-xs sm:text-sm">
              <FiCheckCircle className="text-teal-600 animate-pulse" />
              {isEn ? '🔨 Real Executed Fit-out Projects' : '🔨 أعمال التشطيبات والتنفيذ على أرض الواقع'}
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text)] leading-tight">
              {isEn ? (
                <>Flawless Execution with <span className="text-[var(--primary)]">Super Deluxe Quality</span></>
              ) : (
                <>تشطيبات واقعية <span className="text-[var(--primary)]">بأعلى معايير الدقة والضمان</span></>
              )}
            </h2>

            {/* Description */}
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
              {isEn
                ? 'Browse our extensive gallery of completed residential, commercial, and corporate finishing projects executed strictly on time with certified materials and ongoing engineering supervision.'
                : 'تصفح باقة من أحدث الشقق والفلل والمطاعم والمقرات التي قمنا بتشطيبها وتسليمها بالكامل بخامات معتمدة وضمان حقيقي وإشراف هندسي مستمر.'}
            </p>

            {/* Filter Pills */}
            <div className="pt-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
                <FiGrid className="text-teal-600" />
                {isEn ? 'Filter by Project Type:' : 'تصفح حسب نوع مشروع التشطيب:'}
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  const count =
                    filter.id === 'all'
                      ? finishingProjects.length
                      : finishingProjects.filter((p) => p.category === filter.id).length;

                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-gradient-to-r from-teal-600 to-[var(--primary)] text-white shadow-md shadow-teal-700/20 scale-105'
                          : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)] hover:border-teal-500/50 hover:bg-[var(--bg)]'
                      }`}
                    >
                      <span>{isEn ? filter.labelEn : filter.labelAr}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                        isActive ? 'bg-black/25 text-white' : 'bg-black/5 text-[var(--text-dim)]'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-teal-500/15 text-teal-600 flex items-center justify-center shrink-0">
                  <FiShield size={13} />
                </span>
                <span>{isEn ? '10-Year Guaranteed Execution' : 'ضمان هندسي معتمد حتى 10 سنوات'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-teal-500/15 text-teal-600 flex items-center justify-center shrink-0">
                  <FiShield size={13} />
                </span>
                <span>{isEn ? 'Certified Grade-A Materials' : 'خامات معتمدة فرز أول بالكامل'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-teal-500/15 text-teal-600 flex items-center justify-center shrink-0">
                  <FiShield size={13} />
                </span>
                <span>{isEn ? '100% Strict Handover Deadlines' : 'التزام صارم بمواعيد التسليم'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-teal-500/15 text-teal-600 flex items-center justify-center shrink-0">
                  <FiShield size={13} />
                </span>
                <span>{isEn ? 'Turnkey Ready-to-Live Handover' : 'تسليم على المفتاح جاهز للسكن'}</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-3">
              <a
                href={`https://wa.me/201019688636?text=${encodeURIComponent(
                  'مرحباً فيرست عقار، أود الاستفسار وطلب مقايسة تشطيب لمشروعي.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-[var(--primary)] hover:from-teal-700 hover:to-[var(--primary-dark)] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-teal-700/20 hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                <span>{isEn ? 'Get Finishing Quote' : 'احصل على مقايسة تشطيب لمشروعك'}</span>
                <FiArrowUpRight className="text-base" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SUPER PROFESSIONAL GALLERY LIGHTBOX MODAL
         ========================================================================= */}
      {lightboxIndex !== null && currentProject && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between animate-fadeIn text-white select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar: Title, Counter, Badges & Close Button */}
          <div
            className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-black/50 relative z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-teal-500 text-slate-950 text-xs font-black">
                {isEn ? currentProject.levelEn : currentProject.levelAr}
              </span>
              <span className="text-xs text-emerald-300 font-medium hidden sm:inline-block">
                {isEn ? currentProject.durationEn : currentProject.durationAr}
              </span>
              <span className="text-xs text-teal-300 font-bold bg-white/10 px-2.5 py-0.5 rounded-full">
                {lightboxIndex + 1} / {filteredProjects.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-white/90 line-clamp-1 max-w-[200px] sm:max-w-md text-end">
                {isEn ? currentProject.titleEn : currentProject.titleAr}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 hover:text-white text-white/90 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close Lightbox"
              >
                <FiX size={22} />
              </button>
            </div>
          </div>

          {/* Main Showcase Stage with Next / Prev Arrows */}
          <div
            className="relative flex-grow flex items-center justify-center p-2 sm:p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Arrow */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
                )
              }
              className="absolute left-2 sm:left-6 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-teal-500 hover:text-slate-950 text-white border border-white/20 hover:border-teal-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl hover:scale-110"
              aria-label="Previous Image"
            >
              <FiChevronLeft size={26} />
            </button>

            {/* Main Active Image */}
            <div className="relative max-w-5xl max-h-[62vh] sm:max-h-[66vh] w-full flex items-center justify-center rounded-2xl overflow-hidden">
              <img
                key={currentProject.id}
                src={currentProject.image}
                alt={isEn ? currentProject.titleEn : currentProject.titleAr}
                className="max-h-[62vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-scaleIn transition-all duration-300"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev + 1) % filteredProjects.length)
              }
              className="absolute right-2 sm:right-6 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-teal-500 hover:text-slate-950 text-white border border-white/20 hover:border-teal-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl hover:scale-110"
              aria-label="Next Image"
            >
              <FiChevronRight size={26} />
            </button>
          </div>

          {/* Bottom Info Details & Thumbnails Strip */}
          <div
            className="p-4 sm:p-5 border-t border-white/10 bg-black/70 relative z-20 space-y-3.5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Specs & WhatsApp Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 max-w-6xl mx-auto">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {isEn ? currentProject.titleEn : currentProject.titleAr}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-white/70">
                  <span className="flex items-center gap-1 text-teal-300">
                    <FiMapPin /> {isEn ? currentProject.locationEn : currentProject.locationAr}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-emerald-300">
                    <FiCalendar /> {currentProject.area}
                  </span>
                  <span>•</span>
                  <span className="text-white/80">
                    {isEn ? currentProject.levelEn : currentProject.levelAr}
                  </span>
                </div>
              </div>

              {/* WhatsApp Request Button */}
              <a
                href={`https://wa.me/201019688636?text=${encodeURIComponent(
                  `مرحباً فيرست عقار، أود الاستفسار عن باقة تشطيب مماثلة لمشروع: ${currentProject.titleAr}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-teal-950 transition-all hover:scale-105 shrink-0"
              >
                <FaWhatsapp className="text-base" />
                <span>{isEn ? 'Request Similar Finishing' : 'طلب مقايسة تشطيب مماثلة عبر واتساب'}</span>
              </a>
            </div>

            {/* Thumbnail Carousel Filmstrip */}
            <div className="max-w-6xl mx-auto overflow-x-auto pb-1 flex items-center gap-2 scrollbar-thin scrollbar-thumb-teal-500/30">
              {filteredProjects.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 transition-all duration-300 cursor-pointer ${
                    lightboxIndex === idx
                      ? 'ring-2 ring-teal-400 scale-105 opacity-100 shadow-md'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                >
                  <img
                    src={thumb.image}
                    alt={thumb.id}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioFinishingSection;
