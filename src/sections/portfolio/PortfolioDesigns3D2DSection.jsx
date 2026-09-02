import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FiMaximize2,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiLayers,
  FiCompass,
  FiMapPin,
  FiCheck,
  FiGrid,
  FiArrowUpRight,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import useScrollReveal from '../../hooks/useScrollReveal';

const PortfolioDesigns3D2DSection = () => {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const ref = useScrollReveal();

  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { id: 'all', labelAr: 'جميع التصاميم', labelEn: 'All Designs' },
    { id: '3d-interior', labelAr: '3D داخلي', labelEn: '3D Interior' },
    { id: '3d-exterior', labelAr: '3D واجهات خارجية', labelEn: '3D Exterior' },
    { id: '2d-plans', labelAr: 'مخططات 2D', labelEn: '2D Blueprints' },
    { id: 'villas', labelAr: 'فلل ودوبلكس 3D', labelEn: 'Villas & Duplex' },
    { id: 'commercial', labelAr: 'تجاري ومطاعم', labelEn: 'Commercial' },
  ];

  const designs = [
    {
      id: 'd1',
      titleAr: 'تصميم 3D متكامل — صالون وريسبشن نيو كلاسيك فاخر',
      titleEn: 'Integrated 3D Render — Luxury Neoclassic Salon & Reception',
      category: '3d-interior',
      typeBadge: '3D Interior',
      software: '3Ds Max + Corona',
      styleAr: 'نيوكلاسيك فخم',
      styleEn: 'Luxury Neoclassic',
      area: '140m²',
      locationAr: 'القاهرة الجديدة — التجمع الخامس',
      locationEn: 'New Cairo — 5th Settlement',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تصميم ثلاثي الأبعاد دقيق لتوزيع الإضاءات والبانوهات الجدارية والأرضيات الرخامية مع اختيار دقيق لدرجات الألوان الملكية المتناسقة.',
      descriptionEn: 'Ultra-realistic 3D render illustrating wall moldings, marble flooring layouts, chandelier positions, and regal balanced palettes.',
      specsAr: ['بانوهات جدارية مذهبة', 'توزيع إضاءة ذكي', 'رخام كرارة أبيض', 'فرش مخصص'],
      specsEn: ['Gilded Wall Moldings', 'Smart Lighting Scheme', 'White Carrara Marble', 'Custom Luxury Furniture'],
    },
    {
      id: 'd2',
      titleAr: 'تصميم 3D واجهة فيلا مودرن مع لاندسكيب ومسبح إنفينيتي',
      titleEn: '3D Exterior Facade Villa with Modern Landscape & Infinity Pool',
      category: '3d-exterior',
      typeBadge: '3D Exterior',
      software: '3Ds Max + V-Ray',
      styleAr: 'مودرن معاصر',
      styleEn: 'Contemporary Modern',
      area: '620m²',
      locationAr: 'الشيخ زايد — بيفرلي هيلز',
      locationEn: 'Sheikh Zayed — Beverly Hills',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'دراسة دقيقة للكتل المعمارية وتداخل الزجاج العازل مع تكسيات الخشب الطبيعي والإضاءات الليلية للحديقة والمسبح.',
      descriptionEn: 'Precise architectural massing combining double-glazed curtain walls, thermo-wood cladding, and ambient night landscape lighting.',
      specsAr: ['واجهات زجاجية دبل جلاس', 'تكسيات خشب معالج', 'مسبح إنفينيتي', 'لاندسكيب إضاءة ليد'],
      specsEn: ['Double Glazed Facades', 'Treated Thermo-Wood', 'Infinity Pool', 'LED Landscape Scheme'],
    },
    {
      id: 'd3',
      titleAr: 'مخطط 2D معماري تفصيلي — توزيع مساحات فيلا دوبلكس 400م',
      titleEn: 'Detailed 2D Floor Plan — 400m² Duplex Architectural Layout',
      category: '2d-plans',
      typeBadge: '2D Blueprints',
      software: 'AutoCAD + Revit',
      styleAr: 'مخطط تنفيذي شامل',
      styleEn: 'Full Executive Plan',
      area: '400m²',
      locationAr: 'مدينة نصر — القاهرة',
      locationEn: 'Nasr City — Cairo',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'مخطط هندسي دقيق يوضح مسارات الحركة وتوزيع الغرف، الماستر بد روم مع الحمام والدريسنج، وفرش الريسبشن والخدمات باحترافية.',
      descriptionEn: 'Precise AutoCAD blueprint detailing circulation flow, room partitioning, master suite zoning with en-suite bath & walk-in closet.',
      specsAr: ['مخطط كهرباء وسباكة', 'توزيع فرش دقيق', 'استغلال 100% للمساحة', 'معتمد للتنفيذ'],
      specsEn: ['Electrical & Plumbing Plan', 'Exact Furniture Placement', 'Zero Wasted Space', 'Execution Approved'],
    },
    {
      id: 'd4',
      titleAr: 'تصور 3D جناح نوم ماستر مع دريسنج وحمام رخام زجاجي',
      titleEn: '3D Master Bedroom Suite with Walk-in Dressing & Marble Bath',
      category: '3d-interior',
      typeBadge: '3D Interior',
      software: '3Ds Max + Corona',
      styleAr: 'مودرن دافئ',
      styleEn: 'Warm Modern',
      area: '55m²',
      locationAr: 'العاشر من رمضان',
      locationEn: '10th of Ramadan City',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'غرفة نوم رئيسية تجمع بين الهدوء والأناقة، مع إضاءات خافتة مدمجة خلف السرير وخزائن زجاجية مضيئة للدريسنج روم.',
      descriptionEn: 'Master suite balancing tranquility and elegance with integrated headboard LEDs, acoustic panelling, and illuminated glass walk-in wardrobe.',
      specsAr: ['إضاءات مخفية دافئة', 'أرضيات باركيه HDF', 'دريسنج روم زجاجي', 'حمام ماستر مفتوح'],
      specsEn: ['Hidden Warm Strips', 'HDF Parquet Floors', 'Glass Walk-in Closet', 'En-suite Luxury Bath'],
    },
    {
      id: 'd5',
      titleAr: 'تصميم 3D لمطعم ولاونج سياحي بطابع بوهيمي فاخر',
      titleEn: '3D Concept for High-end Restaurant & Lounge — Boho Chic Style',
      category: 'commercial',
      typeBadge: '3D Commercial',
      software: '3Ds Max + Lumion',
      styleAr: 'بوهيمي نيو مودرن',
      styleEn: 'Boho Neo-Modern',
      area: '380m²',
      locationAr: 'المعادي — دجلة',
      locationEn: 'Maadi — Degla',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تصميم مبتكر يوفر أجواء استرخاء فريدة مع نباتات طبيعية، أثاث راقي مريح، وتوزيع إضاءة مسائية تمنح المكان فخامة استثنائية.',
      descriptionEn: 'Creative commercial layout blending lush greenery, cozy seating zones, and tailored mood lighting for prime hospitality vibe.',
      specsAr: ['بار رخام مضيء', 'توزيع طاولات مريح', 'أنظمة عزل صوتي', 'تراسل نباتي طبيعي'],
      specsEn: ['Illuminated Marble Bar', 'Spacious Seating Layout', 'Acoustic Ceiling', 'Live Biophilic Elements'],
    },
    {
      id: 'd6',
      titleAr: 'تصميم 3D واجهة قصر كلاسيك بالحجر الهاشمي والزخارف الملكية',
      titleEn: '3D Palace Classical Facade with Natural Stone & Royal Ornaments',
      category: '3d-exterior',
      typeBadge: '3D Exterior',
      software: 'Revit + 3Ds Max',
      styleAr: 'كلاسيك ملكي',
      styleEn: 'Royal Classic',
      area: '850m²',
      locationAr: 'القاهرة الجديدة — النرجس',
      locationEn: 'New Cairo — Al Narges',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'أعمدة كورنثية وتيجان منحوتة بدقة، مع نوافذ مقوسة وقبة زجاجية تعلو المدخل الرئيسي لإضفاء هيبة ملكية.',
      descriptionEn: 'Corinthian pillars, carved pediments, arched French windows, and an ornamental skylight dome crowning the grand foyer entrance.',
      specsAr: ['حجر هاشمي طبيعي', 'أعمدة كلاسيكية منحوتة', 'إضاءة واجهات ليلية', 'مدخل رئيسي فخم'],
      specsEn: ['Natural Hashmi Stone', 'Carved Classic Pillars', 'Architectural Uplighting', 'Grand Double-Height Foyer'],
    },
    {
      id: 'd7',
      titleAr: 'مخطط 2D مساحي وتنفيذي لمجمع مكاتب إدارية ذكية',
      titleEn: '2D Layout & Space Allocation for Smart Corporate Tech Offices',
      category: '2d-plans',
      typeBadge: '2D Blueprints',
      software: 'AutoCAD + BIM',
      styleAr: 'تخطيط مرن Agile',
      styleEn: 'Agile Workplace Layout',
      area: '520m²',
      locationAr: 'العاصمة الإدارية الجديدة',
      locationEn: 'New Administrative Capital',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'توزيع مساحات العمل المشتركة، مكاتب الإدارة التنفيذية، كبائن الاتصال الهادئة، وشبكات البنية التحتية الذكية.',
      descriptionEn: 'Agile open plan stations, C-suite executive suites, acoustic phone booths, and smart network routing layout.',
      specsAr: ['توزيع شبكات الداتا والكهرباء', 'مخطط السلامة ومكافحة الحريق', 'محطات عمل مرنة', 'عزل صوتي للقاعات'],
      specsEn: ['Data & MEP Routing', 'Fire Safety & Egress Plan', 'Modular Workstations', 'Acoustic Meeting Rooms'],
    },
    {
      id: 'd8',
      titleAr: 'تصميم 3D مطبخ مفتوح مودرن مع جزيرة رخامية ووحدات ذكية',
      titleEn: '3D Modern Open Kitchen Concept with Marble Island & Smart Storage',
      category: '3d-interior',
      typeBadge: '3D Interior',
      software: '3Ds Max + Corona',
      styleAr: 'مودرن مينيمال',
      styleEn: 'Minimal Modern',
      area: '32m²',
      locationAr: 'الشيخ زايد — الياسمين',
      locationEn: 'Sheikh Zayed — Al Yasmin',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تصميم مطبخ عصري مدمج الأجهزة بالكامل مع كاونتر رخام كوارتز مقاوم للخدش وخزائن بنظام الفتح باللمس بدون مقابض.',
      descriptionEn: 'Handleless push-to-open cabinetry, scratch-resistant quartz waterfall island, and seamlessly integrated built-in appliances.',
      specsAr: ['رخام كوارتز مضاد للبقع', 'خزائن بولي لاك مطفية', 'إضاءة أسفل الخزائن', 'أجهزة بلت إن مدمجة'],
      specsEn: ['Quartz Waterfall Counter', 'Matte Poly-Lac Cabinets', 'Under-cabinet Task LEDs', 'Integrated Built-in Appliances'],
    },
    {
      id: 'd9',
      titleAr: 'تصميم 3D فيلا تاون هاوس مودرن بالكامل (واجهات وتوزيع داخلي)',
      titleEn: '3D Full Townhouse Villa Concept (Facade + Interior Flow)',
      category: 'villas',
      typeBadge: '3D Villa Concept',
      software: '3Ds Max + Revit',
      styleAr: 'ألترا مودرن',
      styleEn: 'Ultra Modern',
      area: '340m²',
      locationAr: 'القاهرة الجديدة — هايد بارك',
      locationEn: 'New Cairo — Hyde Park',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تناغم كامل بين التصميم الخارجي والداخلي، مع حديقة خاصة واستغلال لسطح الروف كمنطقة شواء وجلسة عائلية مميزة.',
      descriptionEn: 'Seamless indoor-outdoor living flow with private garden patio and dedicated rooftop BBQ lounge deck.',
      specsAr: ['روف مع منطقة شواء', 'جراج سيارات مدمج', 'حديقة خاصة', 'واجهة زجاجية مزدوجة'],
      specsEn: ['Rooftop BBQ Lounge', 'Integrated Carport', 'Private Landscape Patio', 'Double-glazed Curtain Facade'],
    },
    {
      id: 'd10',
      titleAr: 'تصميم 3D حمام ماستر سبا مع حوض جاكوزي ورخام إمبراطور',
      titleEn: '3D Spa Master Bathroom with Free-standing Tub & Emperador Marble',
      category: '3d-interior',
      typeBadge: '3D Interior',
      software: '3Ds Max + Corona',
      styleAr: 'سبا فاخر',
      styleEn: 'Luxury Spa Style',
      area: '18m²',
      locationAr: 'القاهرة الجديدة — الرحاب',
      locationEn: 'New Cairo — Al Rehab',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تحويل الحمام إلى واحة استرخاء خاصة مع دش مطري مدمج بالسقف، أحواض حجرية، ومرايا بإضاءات ليد تاتش.',
      descriptionEn: 'Transforming master bath into a personal wellness sanctuary with ceiling rain shower, stone basins, and smart anti-fog LED mirrors.',
      specsAr: ['رخام إمبراطور دارك', 'شاور بوكس زجاج سيكوريت', 'مرايا ذكية تاتش', 'دش مطري مدمج بالسقف'],
      specsEn: ['Emperador Dark Marble', 'Securit Glass Shower', 'Smart Touch LED Mirror', 'Ceiling Rain Shower'],
    },
    {
      id: 'd11',
      titleAr: 'مخطط 2D تفصيلي لفرش وتوزيع ريسبشن مفتوح 3 قطع',
      titleEn: '2D Detailed Space Zoning & Furniture Layout for 3-Piece Reception',
      category: '2d-plans',
      typeBadge: '2D Blueprints',
      software: 'AutoCAD 2024',
      styleAr: 'توزيع فندقي',
      styleEn: 'Hotel-Grade Layout',
      area: '110m²',
      locationAr: 'المهندسين — الجيزة',
      locationEn: 'Mohandessin — Giza',
      image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تحديد دقيق لأماكن الصالون الرئيسي، غرفة الطعام، وركن المعيشة والتلفزيون مع الحفاظ على ممرات حركة واسعة ومريحة.',
      descriptionEn: 'Strategic partitioning of formal salon, dining hall, and living media corner ensuring uninterrupted open sightlines and walking paths.',
      specsAr: ['تحديد نقاط الكهرباء والإنارة', 'دراسة خطوط الرؤية', 'فصل منطقة السفرة', 'تحديد مكان المدفأة الديكورية'],
      specsEn: ['Electrical & Dimmer Sockets', 'Sightline Optimization', 'Dedicated Dining Zone', 'Electric Fireplace Alcove'],
    },
    {
      id: 'd12',
      titleAr: 'تصميم 3D لقاعة اجتماعات ومكتب رئيس مجلس إدارة تنفيذي',
      titleEn: '3D Executive Boardroom & CEO Office Suite with Wood Paneling',
      category: 'commercial',
      typeBadge: '3D Commercial',
      software: '3Ds Max + V-Ray',
      styleAr: 'أوفيس كلاسيك مودرن',
      styleEn: 'Modern Corporate Luxury',
      area: '90m²',
      locationAr: 'العاشر من رمضان — المنطقة الصناعية',
      locationEn: '10th of Ramadan — Industrial Zone',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85',
      descriptionAr: 'تصميم راقٍ يعكس قوة العلامة التجارية مع تجليد حوائط بخشب الجوز الطبيعي، طاولة اجتماعات رخامية، وأنظمة عرض تفاعلية.',
      descriptionEn: 'Prestigious corporate aesthetic featuring natural walnut acoustic wall slats, marble boardroom table, and integrated interactive video conference tech.',
      specsAr: ['تجليد حوائط خشب جوز', 'طاولة اجتماعات رخام', 'عزل صوتي فندقي', 'إضاءات خطية ماجنتيك'],
      specsEn: ['Walnut Wall Slats', 'Marble Boardroom Table', 'High Acoustic Rating', 'Magnetic Track Lighting'],
    },
  ];

  const filteredDesigns =
    activeFilter === 'all'
      ? designs
      : designs.filter((d) => d.category === activeFilter);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        isEn
          ? setLightboxIndex((prev) => (prev + 1) % filteredDesigns.length)
          : setLightboxIndex((prev) => (prev - 1 + filteredDesigns.length) % filteredDesigns.length);
      }
      if (e.key === 'ArrowLeft') {
        isEn
          ? setLightboxIndex((prev) => (prev - 1 + filteredDesigns.length) % filteredDesigns.length)
          : setLightboxIndex((prev) => (prev + 1) % filteredDesigns.length);
      }
    },
    [lightboxIndex, filteredDesigns.length, isEn]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentItem = lightboxIndex !== null ? filteredDesigns[lightboxIndex] : null;

  // 4 Preview slots
  const previewItems = filteredDesigns.slice(0, 4);
  const remainingCount = Math.max(0, filteredDesigns.length - 3);

  return (
    <section id="portfolio-designs" className="py-20 lg:py-28 bg-[var(--bg)] relative overflow-hidden" ref={ref}>
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Column 1: Title, Description, Filters & Features */}
          <div className="lg:col-span-6 reveal space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 dark:text-amber-400 font-bold text-xs sm:text-sm">
              <FiLayers className="text-amber-600 animate-pulse" />
              {isEn ? '📐 2D Blueprints & 3D Realistic Designs' : '📐 التصاميم الهندسية والمخططات 2D & 3D'}
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--text)] leading-tight">
              {isEn ? (
                <>Visualise Your Space in <span className="text-[var(--gold)]">Photorealistic 3D</span> Before Building</>
              ) : (
                <>شاهد منزلك أو مشروعك <span className="text-[var(--gold)]">بتقنية 3D الواقعية</span> قبل وضع أول مسمار</>
              )}
            </h2>

            {/* Description */}
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
              {isEn
                ? 'We provide certified 2D architectural distribution plans with extreme space accuracy, alongside ultra-realistic 3D renders showing every texture, lighting tone, and furniture detail before launching execution.'
                : 'نقدم لك مخططات 2D معمارية معتمدة لتوزيع المساحات بدقة متناهية، وتصاميم 3D فوتوريلستيك ثلاثية الأبعاد تظهر لك كل تفصيلة من الأثاث والإضاءة والخامات قبل بدء التنفيذ.'}
            </p>

            {/* Filter Pills */}
            <div className="pt-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
                <FiGrid className="text-amber-500" />
                {isEn ? 'Filter by Category:' : 'تصفح حسب تصنيف التصميم:'}
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  const count =
                    filter.id === 'all'
                      ? designs.length
                      : designs.filter((d) => d.category === filter.id).length;

                  return (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-gradient-to-r from-[var(--gold)] to-amber-600 text-white shadow-md shadow-amber-600/20 scale-105'
                          : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--gold)]/50 hover:bg-[var(--bg-card2)]'
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
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                  <FiCheck size={13} />
                </span>
                <span>{isEn ? 'Zero Wasted Space 100%' : 'توزيع هندسي 100% بدون هدر'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                  <FiCheck size={13} />
                </span>
                <span>{isEn ? '4K Ultra-Realistic Materials' : 'خامات وإضاءات واقعية 4K'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                  <FiCheck size={13} />
                </span>
                <span>{isEn ? 'Executive MEP Blueprints' : 'مخططات تنفيذية معتمدة'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text)]">
                <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                  <FiCheck size={13} />
                </span>
                <span>{isEn ? '3Ds Max + Corona & Revit' : 'أحدث برامج التصميم العالمية'}</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-3">
              <a
                href={`https://wa.me/201019688636?text=${encodeURIComponent(
                  'مرحباً فيرست عقار، أود طلب تصميم هندسي 2D / 3D لمشروعي.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-600/20 hover:scale-105 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                <span>{isEn ? 'Order Custom 3D Design' : 'اطلب تصميم هندسي لمشروعك'}</span>
                <FiArrowUpRight className="text-base" />
              </a>
            </div>
          </div>

          {/* Column 2: 4 Square Grid Photos with +N on 4th image */}
          <div className="lg:col-span-6 reveal delay-1">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 p-3 sm:p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl shadow-xl shadow-slate-900/5">
              {previewItems.map((item, idx) => {
                const isFourthSlot = idx === 3 && filteredDesigns.length > 4;

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

                    {/* Normal slot badges & hover info (slots 0, 1, 2 or slot 3 if exactly 4 images) */}
                    {!isFourthSlot ? (
                      <>
                        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none">
                          <span className="px-2 py-0.5 rounded-md bg-amber-500/90 text-white text-[10px] font-black backdrop-blur-md">
                            {item.typeBadge}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-black/60 text-amber-300 text-[10px] font-semibold backdrop-blur-md">
                            {item.software.split('+')[0]}
                          </span>
                        </div>

                        {/* Hover Zoom Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <div className="w-11 h-11 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg backdrop-blur-md">
                            <FiMaximize2 size={18} />
                          </div>
                        </div>

                        {/* Bottom title */}
                        <div className="absolute bottom-2.5 inset-x-2.5 text-white">
                          <h4 className="text-xs sm:text-sm font-bold line-clamp-1 group-hover:text-amber-300 transition-colors">
                            {isEn ? item.titleEn : item.titleAr}
                          </h4>
                          <span className="text-[10px] text-white/70 flex items-center gap-1 mt-0.5">
                            <FiMapPin className="text-amber-400 text-[10px]" />
                            {isEn ? item.locationEn : item.locationAr}
                          </span>
                        </div>
                      </>
                    ) : (
                      /* 4th Slot with "+N" Overlay */
                      <div className="absolute inset-0 bg-black/75 backdrop-blur-[6px] group-hover:bg-black/80 transition-all flex flex-col items-center justify-center text-white p-3 text-center">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <FiMaximize2 size={20} />
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-wider">
                          +{remainingCount}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white/90 mt-1">
                          {isEn ? 'View All Designs' : 'المزيد من التصاميم'}
                        </div>
                        <span className="text-[10px] text-white/60 mt-1">
                          {isEn ? `(${filteredDesigns.length} Photos)` : `(${filteredDesigns.length} تصميم)`}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SUPER PROFESSIONAL GALLERY LIGHTBOX MODAL
         ========================================================================= */}
      {lightboxIndex !== null && currentItem && (
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
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black">
                {currentItem.typeBadge}
              </span>
              <span className="text-xs text-white/70 font-mono hidden sm:inline-block">
                {currentItem.software}
              </span>
              <span className="text-xs text-amber-300 font-bold bg-white/10 px-2.5 py-0.5 rounded-full">
                {lightboxIndex + 1} / {filteredDesigns.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-white/90 line-clamp-1 max-w-[200px] sm:max-w-md text-end">
                {isEn ? currentItem.titleEn : currentItem.titleAr}
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
                  (prev) => (prev - 1 + filteredDesigns.length) % filteredDesigns.length
                )
              }
              className="absolute left-2 sm:left-6 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 hover:border-amber-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl hover:scale-110"
              aria-label="Previous Image"
            >
              <FiChevronLeft size={26} />
            </button>

            {/* Main Active Image with Smooth Keyframe Zoom View */}
            <div className="relative max-w-5xl max-h-[62vh] sm:max-h-[66vh] w-full flex items-center justify-center rounded-2xl overflow-hidden">
              <img
                key={currentItem.id}
                src={currentItem.image}
                alt={isEn ? currentItem.titleEn : currentItem.titleAr}
                className="max-h-[62vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-scaleIn transition-all duration-300"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev + 1) % filteredDesigns.length)
              }
              className="absolute right-2 sm:right-6 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-amber-500 hover:text-slate-950 text-white border border-white/20 hover:border-amber-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl hover:scale-110"
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
                  {isEn ? currentItem.titleEn : currentItem.titleAr}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-white/70">
                  <span className="flex items-center gap-1 text-amber-300">
                    <FiMapPin /> {isEn ? currentItem.locationEn : currentItem.locationAr}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-emerald-300">
                    <FiCompass /> {currentItem.area}
                  </span>
                  <span>•</span>
                  <span className="text-white/80">{isEn ? currentItem.styleEn : currentItem.styleAr}</span>
                </div>
              </div>

              {/* WhatsApp Request Button */}
              <a
                href={`https://wa.me/201019688636?text=${encodeURIComponent(
                  `مرحباً فيرست عقار، أود الاستفسار عن تصميم 2D / 3D لمشروع: ${currentItem.titleAr}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-950 transition-all hover:scale-105 shrink-0"
              >
                <FaWhatsapp className="text-base" />
                <span>{isEn ? 'Inquire for this Design' : 'طلب هذا التصميم عبر واتساب'}</span>
              </a>
            </div>

            {/* Thumbnail Carousel Filmstrip */}
            <div className="max-w-6xl mx-auto overflow-x-auto pb-1 flex items-center gap-2 scrollbar-thin scrollbar-thumb-amber-500/30">
              {filteredDesigns.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 transition-all duration-300 cursor-pointer ${
                    lightboxIndex === idx
                      ? 'ring-2 ring-amber-400 scale-105 opacity-100 shadow-md'
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

export default PortfolioDesigns3D2DSection;
