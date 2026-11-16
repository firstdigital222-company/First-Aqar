import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiMaximize2,
  FiX,
  FiLayers,
  FiCompass,
  FiFileText,
  FiShield,
  FiClock,
  FiCpu,
  FiGrid,
  FiBox,
  FiDollarSign,
  FiTool,
  FiTrendingUp,
  FiDownloadCloud,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const DetailedServicesSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTabPerService, setActiveTabPerService] = useState({});
  const [lightboxImg, setLightboxImg] = useState(null);

  // Set active sub-tab for a service
  const handleTabChange = (serviceId, tabName) => {
    setActiveTabPerService((prev) => ({
      ...prev,
      [serviceId]: tabName,
    }));
  };

  // WhatsApp number
  const whatsappNumber = '201095854066';

  // Engineering Core Services Data
  const servicesDetailed = [
    {
      id: 'design-2d3d',
      code: '01',
      icon: '🎨',
      badgeAr: 'التصميم المرئي & النمذجة الواقعية',
      badgeEn: '3D Visualization & Architectural Layouts',
      titleAr: 'تصميمات 2D و3D',
      titleEn: '2D & 3D Architectural Designs',
      taglineAr: 'شاهد مساحتك واقعاً ملموساً قبل أن تبدأ بأدق تفاصيل الديكور والإضاءة',
      taglineEn: 'Experience your space with hyper-realistic renders and precision layouts before building',
      descAr:
        'نحوّل أفكارك واحتياجاتك إلى نماذج ثلاثية الأبعاد فائقة الواقعية ومخططات ثنائية الأبعاد مدروسة بالمليمتر. تمكنك الخدمة من استكشاف الألوان، الخامات، الأثاث، ومسارات الحركة في بيئة واقعية تامة لتجنب أي أخطاء أو تكاليف غير محسوبة أثناء مرحلة التنفيذ.',
      descEn:
        'We turn your concepts into ultra-realistic 3D visualizations and millimeter-accurate 2D floor plans. This allows you to explore materials, lighting, furnishings, and spatial flow in a true-to-life environment, eliminating guesswork and costly redesigns.',
      color: '#1A9E5F',
      colorLight: '#2ECC71',
      bgGlow: 'rgba(26, 158, 95, 0.08)',
      image: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788254236/WhatsApp_Image_2026-08-19_at_3.10.27_PM_1.jpg',
      imageAltAr: 'تصميم 3D و2D رندر واقعي',
      imageAltEn: 'Realistic 3D Interior & 2D Render',
      featuresAr: [
        'رندرات ثلاثية الأبعاد 3D فائقة الدقة والواقعية (4K Ultra-HD) نهارية وليلية',
        'مخططات ثنائية الأبعاد (2D Floor Plans) مع توزيع ذكي للأثاث ومسارات الحركة',
        'لوحات اختيار وتنسيق الخامات والألوان (Mood Boards & Material Specs)',
        'دراسات إضاءة احترافية وتوزيع مفاتيح الإنارة والسبوتات الديكورية',
        'جولات افتراضية تفاعلية 360° بانورامية تتيح لك معايشة المساحة',
        'تعديلات واستشارات هندسية تفاعلية مرنة حتى الوصول للنتيجة المثالية',
        'مخططات الأسقف المعلقة وتفاصيل الجبس بورد ووحدات التكييف',
        'تصميمات تفصيلية لغرف النوم، المطابخ، الحمامات، والريسبشن الفاخر',
      ],
      featuresEn: [
        'Hyper-realistic day & night 4K 3D renders with cinematic lighting',
        'Precise 2D furniture layouts and dynamic spatial circulation plans',
        'Comprehensive mood boards and verified material specifications',
        'Professional architectural lighting distribution & fixture schedules',
        'Immersive 360° virtual tours for interactive spatial walkthroughs',
        'Interactive client review iterations to ensure 100% satisfaction',
        'Gypsum board ceiling layouts and HVAC diffuser coordination',
        'Custom bespoke designs for bedrooms, kitchens, baths, and living halls',
      ],
      deliverablesAr: [
        { label: 'ألبوم صور 3D فائقة الجودة 4K لكافة الفراغات', icon: <FiMaximize2 /> },
        { label: 'مخططات 2D تنفيذية بصيغتي AutoCAD (DWG) وPDF', icon: <FiLayers /> },
        { label: 'شيت توصيف الخامات وأكواد الدهانات المعتمدة', icon: <FiFileText /> },
        { label: 'رابط جولة افتراضية تفاعلية 360° للمشروع', icon: <FiCompass /> },
      ],
      deliverablesEn: [
        { label: '4K Ultra-HD 3D Render Portfolio from all angles', icon: <FiMaximize2 /> },
        { label: 'Executive 2D Floor Plans in AutoCAD (DWG) & PDF', icon: <FiLayers /> },
        { label: 'Approved Material Schedule & Paint Specification Sheet', icon: <FiFileText /> },
        { label: '360° Interactive Virtual Tour Link for easy sharing', icon: <FiCompass /> },
      ],
      software: ['3ds Max', 'Corona Renderer', 'V-Ray', 'AutoCAD', 'Revit Architecture', 'Photoshop'],
      processAr: [
        { step: '01', title: 'رفع المقاسات ودراسة الرغبات', desc: 'معاينة الموقع ومناقشة طراز التصميم وميزانية العميل' },
        { step: '02', title: 'المخطط المبدئي 2D', desc: 'توزيع المساحات والفرش لاعتماده وظيفياً' },
        { step: '03', title: 'النمذجة والرندر 3D', desc: 'بناء النموذج وإضافة الخامات والإضاءات الواقعية' },
        { step: '04', title: 'المراجعة والتسليم النهائي', desc: 'تطبيق التعديلات وتسليم الملفات بجودة الطباعة' },
      ],
      processEn: [
        { step: '01', title: 'Survey & Brief', desc: 'Site dimensions intake, architectural style selection & budget review' },
        { step: '02', title: '2D Layout Approval', desc: 'Functional space zoning and furniture movement planning' },
        { step: '03', title: '3D Modeling & Lighting', desc: 'Crafting textures, materials, and realistic rendering atmosphere' },
        { step: '04', title: 'Revisions & Handover', desc: 'Refining details and exporting full package in print-ready formats' },
      ],
      reverse: false,
    },
    {
      id: 'shop-drawing',
      code: '02',
      icon: '📐',
      badgeAr: 'المخططات التنفيذية & تنسيق الموقع',
      badgeEn: 'Executive Blueprints & MEP Coordination',
      titleAr: 'الشوب دروينج — Shop Drawing',
      titleEn: 'Shop Drawing & Working Details',
      taglineAr: 'الجسر الهندسي الحاسم بين التصميم النظري والتنفيذ الخالي من الأخطاء والتعارضات',
      taglineEn: 'The definitive engineering link turning conceptual plans into flawless zero-clash site execution',
      descAr:
        'نعد مخططات الورشة (Shop Drawings) التنفيذية والتفصيلية الدقيقة اللازمة لمهندسي الموقع وفرق المقاولات لكافة الأعمال المعمارية، الإنشائية، والالكتروميكانيكية (MEP). نقوم بحل كافة التعارضات مسبقاً (Clash Detection) وتحديد المناسيب والقطاعات الدقيقة لضمان سرعة الإنجاز ودقة التنفيذ.',
      descEn:
        'We produce millimeter-accurate executive shop drawings for site teams and general contractors across architectural, structural, and electro-mechanical (MEP) trades. Through proactive clash detection and detailed cross-sections, we ensure effortless site progress without rework.',
      color: '#2563EB',
      colorLight: '#3B82F6',
      bgGlow: 'rgba(37, 99, 235, 0.08)',
      image: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788692246/WhatsApp_Image_2026-06-20_at_5.23.53_PM.jpg',
      imageAltAr: 'مخطط شوب دروينج تنفيذي تفصيلي',
      imageAltEn: 'Executive Technical Shop Drawing Blueprint',
      featuresAr: [
        'مخططات شوب دروينج معمارية تنفيذية تفصيلية (قطاعات، واجهات، أسقف، تفاصيل فتحات)',
        'مخططات فرش الأرضيات والرخام والبورسلين وتحديد نقطة البداية (Tile Layout & Start Point)',
        'شوب دروينج متكامل للأعمال الكهروميكانيكية (MEP): تكييف، صحي، تغذية، إنارة وقوى',
        'كشف وحل التعارضات الهندسية (Clash Detection) بين الشبكات والخرسانات مسبقاً',
        'مخططات تفصيلية لأعمال النجارة، الألوميتال، التجاليد الخشبية والبانوهات الديكورية',
        'شوب دروينج إنشائي وتفريد حديد التسليح (Bar Bending Schedule - BBS)',
        'تفاصيل السلالم، المداخل، العزل المائي والحراري، والواجهات الخارجية',
        'تجهيز اللوحات التنفيذية للطباعة بمقاييس رسم معتمدة ومطابقة للكود',
      ],
      featuresEn: [
        'Comprehensive architectural shop drawings (sections, elevations, ceiling grids, opening schedules)',
        'Tile, marble, and parquet setting layouts with starting points and pattern alignment',
        'Full MEP coordination plans covering HVAC ductwork, plumbing, drainage, lighting & power',
        'Automated clash detection eliminating spatial conflicts before site mobilization',
        'Bespoke joinery, aluminum, glazing, and wall cladding fabrication drawings',
        'Structural shop drawings with certified Bar Bending Schedules (BBS)',
        'Waterproofing, thermal insulation, staircases, and facade anchor connection details',
        'Execution-ready drawing sheets structured according to international CAD standards',
      ],
      deliverablesAr: [
        { label: 'مجموعة لوحات AutoCAD (DWG) مفتوحة المصدر ومنسقة بالطبقات', icon: <FiLayers /> },
        { label: 'ملفات PDF عالية الدقة مجهزة بأختام التجهيز للتنفيذ الموقعي', icon: <FiFileText /> },
        { label: 'جداول تفريد حديد التسليح (BBS) وحصر القطع المعدنية', icon: <FiGrid /> },
        { label: 'تقرير فحص وحل التعارضات الهندسية (Clash Resolution Report)', icon: <FiShield /> },
      ],
      deliverablesEn: [
        { label: 'Cleanly layered AutoCAD (DWG) files compliant with site CAD standards', icon: <FiLayers /> },
        { label: 'Print-ready high-resolution vectorized PDF drawing sheets', icon: <FiFileText /> },
        { label: 'Certified Bar Bending Schedules (BBS) & fabrication takeoff sheets', icon: <FiGrid /> },
        { label: 'Multi-discipline Clash Detection & Resolution Summary Report', icon: <FiShield /> },
      ],
      software: ['AutoCAD', 'Revit MEP & Arch', 'Navisworks Manage', 'AutoCAD Structural Detailing'],
      processAr: [
        { step: '01', title: 'مراجعة المخططات التعاقدية', desc: 'مطابقة لوحات التصميم المعماري والإنشائي وكشف النواقص' },
        { step: '02', title: 'الرفع المساحي والتنسيق', desc: 'مطابقة الأبعاد على أرض الواقع وتنسيق المسارات المشتركة' },
        { step: '03', title: 'رسم التفاصيل والقطاعات', desc: 'إعداد تفاصيل الورشة بمقاييس رسم مكبرة دقيقة' },
        { step: '04', title: 'الاعتماد وتسليم الموقع', desc: 'إصدار اللوحات التنفيذية النهائية المعتمدة للمهندسين' },
      ],
      processEn: [
        { step: '01', title: 'Contract Drawings Audit', desc: 'Cross-verifying consultant designs to flag ambiguities' },
        { step: '02', title: 'Site Coordination', desc: 'Verifying on-site structural dimensions and cross-trade routes' },
        { step: '03', title: 'Detailing & Sections', desc: 'Drafting enlarged working details and connection sections' },
        { step: '04', title: 'Final Stamping & Handover', desc: 'Delivering site-ready approved packages to construction teams' },
      ],
      reverse: true,
    },
    {
      id: 'quantity-surveying',
      code: '03',
      icon: '📊',
      badgeAr: 'المقايسات الهندسية & ضبط التكاليف',
      badgeEn: 'BOQ Preparation & Cost Optimization',
      titleAr: 'حصر الكميات — Quantity Surveying',
      titleEn: 'Quantity Surveying & Cost Estimation',
      taglineAr: 'حماية استثماراتك والتحكم التام في ميزانية المشروع لمنع أي هدر أو تجاوزات مالية',
      taglineEn: 'Protecting your capital with airtight cost control, precise takeoffs, and transparent budgeting',
      descAr:
        'نقدم خدمات حصر الكميات وإعداد المقايسات التثمينية الدقيقة (Bill of Quantities - BOQ) لكافة بنود المشروع من الأعمال الترابية والخرسانية حتى أرقى التشطيبات. نقوم بتقدير التكاليف الفعلية بناءً على أسعار السوق الحالية، وتطبيق حلول الهندسة القيمة (Value Engineering) لترشيد المصروفات دون الإخلال بجودة البناء.',
      descEn:
        'We deliver comprehensive quantity takeoff and engineering cost estimation (BOQ) covering every project phase from earthworks and foundations to premium finishes. Based on current market rates and Value Engineering principles, we eliminate budget surprises and overspending.',
      color: '#C9A227',
      colorLight: '#E8B830',
      bgGlow: 'rgba(201, 162, 39, 0.08)',
      image: '/hero2.png',
      imageAltAr: 'حصر كميات ومقايسات هندسية دقيقة',
      imageAltEn: 'Quantity Surveying and Project Cost Management',
      featuresAr: [
        'إعداد جداول كميات ومقايسات تفصيلية (BOQ) مطابقة للمواصفات والأكواد الهندسية',
        'حصر كميات الأعمال الإنشائية: خرسانات مسلحة، حديد تسليح، وأعمال الحفر والردم والمباني',
        'حصر دقيق وشامل لأعمال التشطيبات: دهانات، أرضيات، أسقف، عزل مائي وحراري، وأعمال الديكور',
        'تسعير تقديري دقيق للمواد والمصنعيات بناءً على أحدث أسعار السوق الحالية',
        'تطبيق مبادئ الهندسة القيمة (Value Engineering) لتقليل التكاليف دون المساس بالجودة',
        'مراجعة وتدقيق مستخلصات المقاولين والموردين ومطابقتها هندسياً مع المنفذ على أرض الواقع',
        'إعداد كراسات الشروط والمواصفات الفنية المعتمدة للمناقصات والترسية',
        'توفير تقارير تدفق مالي وجداول صرف مرحلية (Cash Flow Projections) للمشروع',
      ],
      featuresEn: [
        'Standard-compliant Bill of Quantities (BOQ) itemized for clarity and bidding',
        'Detailed structural takeoffs: concrete volumes, rebar tonnage, excavation & masonry',
        'Complete architectural finishing takeoff: coatings, marble, tiles, plaster & waterproofing',
        'Accurate dynamic cost forecasting benchmarked against current local market prices',
        'Value Engineering assessments yielding actionable savings without compromising quality',
        'Rigorous contractor interim payment certificates (IPC) and invoice audits',
        'Preparation of tender documents, technical specifications, and contract scopes',
        'Project cash-flow projection charts aligned with execution milestones',
      ],
      deliverablesAr: [
        { label: 'شيتات إكسل هندسية تفصيلية (Dynamic BOQ) مترابطة بالمعادلات المحمية', icon: <FiFileText /> },
        { label: 'تقرير تفصيلي لتوزيع التكاليف والميزانية الإجمالية التقديرية', icon: <FiDollarSign /> },
        { label: 'شيتات حصر حديد التسليح وأحجام الخرسانات المنفذة بدقة', icon: <FiGrid /> },
        { label: 'نموذج تدقيق ومطابقة المستخلصات المالية للمقاولين', icon: <FiShield /> },
      ],
      deliverablesEn: [
        { label: 'Dynamic formula-linked Excel BOQ spreadsheets with full audit trail', icon: <FiFileText /> },
        { label: 'Detailed Cost Breakdown Structure (CBS) and financial feasibility report', icon: <FiDollarSign /> },
        { label: 'Rebar tonnage & structural element concrete takeoff tables', icon: <FiGrid /> },
        { label: 'Contractor payment reconciliation sheets and site verification logs', icon: <FiShield /> },
      ],
      software: ['MS Excel Advanced (VBA & Macros)', 'PlanSwift', 'Revit Quantity Takeoff', 'CostX'],
      processAr: [
        { step: '01', title: 'دراسة المخططات والمواصفات', desc: 'فحص اللوحات المعمارية والإنشائية والتفاصيل التعاقدية' },
        { step: '02', title: 'التفريغ الهندسي وحساب الكميات', desc: 'تطبيق معادلات الحصر بدقة رقمية صفرية الهامش' },
        { step: '03', title: 'التسعير ودراسة القيمة', desc: 'تحديث الأسعار واقتراح بدائل موفرة اقتصادياً' },
        { step: '04', title: 'إصدار المقايسة وكراسة الشروط', desc: 'تسليم ملفات BOQ جاهزة للطرح أو التعاقد الفوري' },
      ],
      processEn: [
        { step: '01', title: 'Drawing & Specs Intake', desc: 'Scrutinizing architectural, structural, and MEP tender documents' },
        { step: '02', title: 'Digital Takeoff Extraction', desc: 'Computing precise item quantities using specialized takeoff software' },
        { step: '03', title: 'Cost Analysis & Value Review', desc: 'Applying verified market pricing and cost-saving alternatives' },
        { step: '04', title: 'Tender BOQ Publishing', desc: 'Handing over turnkey bidding schedules and estimation sheets' },
      ],
      reverse: false,
    },
    {
      id: 'structural-arch',
      code: '04',
      icon: '🏛️',
      badgeAr: 'الهندسة المتكاملة & تراخيص البناء',
      badgeEn: 'Integrated Architecture & Civil Structural',
      titleAr: 'التصميمات الإنشائية والمعمارية',
      titleEn: 'Structural & Architectural Designs',
      taglineAr: 'تكامل هندسي يجمع بين الابتكار المعماري الحديث والأمان الإنشائي التام وفق أحدث الأكواد',
      taglineEn: 'Holistic engineering uniting modern architectural vision with uncompromising structural safety',
      descAr:
        'نقدم حلولاً هندسية متكاملة تبدأ من وضع الفكرة المعمارية وتخطيط المساحات والواجهات الخارجية بأسلوب إبداعي معاصر، وصولاً إلى التصميم والتحليل الإنشائي الكامل للأساسات، الأعمدة، والأسقف. نضمن أعلى معدلات الأمان ومقاومة الأحمال والزلازل مع ترشيد كميات الخرسانة والحديد وتجهيز ملفات التراخيص المعتمدة.',
      descEn:
        'We deliver integrated end-to-end design solutions, from initial architectural space allocation and striking contemporary facades to rigorous structural modeling of foundations, columns, and slabs. We maximize safety, earthquake resistance, and material efficiency while delivering fully approved permit drawings.',
      color: '#0D5C4A',
      colorLight: '#14B8A6',
      bgGlow: 'rgba(13, 92, 74, 0.08)',
      image: 'https://res.cloudinary.com/hjc7d6nr/image/upload/v1788691956/WhatsApp_Image_2026-06-21_at_11.07.04_AM_1.jpg',
      imageAltAr: 'تصميم إنشائي ومعماري معتمد',
      imageAltEn: 'Approved Structural & Architectural Design Showcase',
      featuresAr: [
        'تصميم معماري إبداعي يستغل كامل المساحة ويوفر حلولاً وظيفية وجمالية مبتكرة',
        'تصميم الواجهات الخارجية واللاندسكيب مع مراعاة التوجيه المناخي والإضاءة والتهوية',
        'نمذجة وتحليل إنشائي متقدم للأحمال الحية والميتة وأحمال الزلازل والرياح',
        'تصميم الأساسات السطحية والعميقة (خوازيق) بناءً على تقارير فحص التربة والجسات',
        'اختيار الأنظمة الإنشائية المثلى (Flat Slab, Solid Slab, Hollow Block, Steel Frames) بأعلى كفاءة',
        'إعداد النوتة الحسابية الإنشائية الشاملة والموثقة بنماذج التحليل بالبرامج الهندسية',
        'تجهيز المخططات الهندسية المعتمدة لاستخراج رخص البناء والاعتمادات الحكومية',
        'تناغم وتنسيق تام بين المعماري والإنشائي لتفادي أي أعمدة ساقطة أو تشوهات فراغية',
      ],
      featuresEn: [
        'Creative architectural concept development maximizing land utilization and functionality',
        'Bioclimatic exterior facade and landscape design optimizing daylighting and ventilation',
        'Advanced finite-element structural modeling for dead, live, wind, and seismic loads',
        'Deep and shallow foundation engineering tailored to geotechnical soil investigation reports',
        'Optimal structural system selection (Flat Slab, Solid Slab, Hollow Core, Steel Frames)',
        'Comprehensive structural calculation notes verified via certified engineering software',
        'Municipal building permit packages prepared strictly according to regional codes',
        'Zero architectural clash coordination ensuring seamless column and beam placement',
      ],
      deliverablesAr: [
        { label: 'مجموعة المخططات المعمارية الكاملة (مساقط، واجهات، قطاعات، مناسيب)', icon: <FiLayers /> },
        { label: 'اللوحات الإنشائية المعتمدة (محاور، أعمدة، أساسات، تسليح أسقف وسلالم)', icon: <FiGrid /> },
        { label: 'النوتة الحسابية الإنشائية الموثقة (Structural Calculation Note)', icon: <FiFileText /> },
        { label: 'ملف المخططات المجهزة لاستخراج رخصة البناء والاعتماد الهندسي', icon: <FiShield /> },
      ],
      deliverablesEn: [
        { label: 'Full Architectural Set (plans, elevations, cross-sections, roof & site plan)', icon: <FiLayers /> },
        { label: 'Certified Structural Sheets (grids, column schedules, foundations, slab rebar)', icon: <FiGrid /> },
        { label: 'Comprehensive Structural Calculation Note verified with ETABS & SAFE', icon: <FiFileText /> },
        { label: 'Complete municipal building permit submission dossier with engineer seals', icon: <FiShield /> },
      ],
      software: ['ETABS', 'SAP2000', 'SAFE', 'Revit Structural', 'AutoCAD', 'Prokon', 'CSI Column'],
      processAr: [
        { step: '01', title: 'دراسة الموقع وتقرير التربة', desc: 'تحليل قطعة الأرض، الاشتراطات البنائية، وتقرير الجسات' },
        { step: '02', title: 'التصميم المعماري الإبداعي', desc: 'بلورة المساقط الأفقية والواجهات وتوزيع الفراغات' },
        { step: '03', title: 'التحليل والتصميم الإنشائي', desc: 'نمذجة المبنى واختيار النظام الإنشائي وتصميم التسليح' },
        { step: '04', title: 'المراجعة واعتماد التراخيص', desc: 'إصدار المخططات والنوتة الحسابية المعتمدة للتنفيذ والترخيص' },
      ],
      processEn: [
        { step: '01', title: 'Site & Geotechnical Study', desc: 'Plot analysis, local zoning bylaws, and soil bore reports' },
        { step: '02', title: 'Architectural Innovation', desc: 'Developing space layouts, elevations, and functional massing' },
        { step: '03', title: 'Structural Analysis & Design', desc: 'Finite element building modeling, load simulation & rebar design' },
        { step: '04', title: 'Code Certification & Permitting', desc: 'Issuing certified blueprint dossier and calculation note for permits' },
      ],
      reverse: true,
    },
  ];

  // Filtering services
  const displayedServices =
    activeFilter === 'all'
      ? servicesDetailed
      : servicesDetailed.filter((s) => s.id === activeFilter);

  return (
    <section className="section section-dark bg-grid relative overflow-hidden py-24" ref={ref}>
      {/* Subtle Background Glows */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full blur-[110px] opacity-15"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
      />

      <div className="container relative z-[2]">
        {/* Section Header */}
        <div className="section-header reveal text-center max-w-[850px] mx-auto mb-14">
          <span className="section-badge inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-[0.85rem] font-bold bg-primary/10 border border-primary/25 text-primary">
            {t('services.detail_badge')}
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold text-text-main leading-[1.25] mb-4">
            {isEn ? (
              <>
                Specialized Engineering Services with{' '}
                <span className="highlight text-primary">Absolute Precision</span>
              </>
            ) : (
              <>
                خدمات هندسية وتصميمية متكاملة تضمن{' '}
                <span className="highlight text-primary">دقة التنفيذ وسلامة الاستثمار</span>
              </>
            )}
          </h2>
          <p className="text-text-muted text-[1.05rem] leading-[1.85] max-w-[760px] mx-auto">
            {isEn
              ? 'From conceptual architectural and photorealistic 3D visualization to shop drawings, BOQ quantity surveying, and certified structural engineering — we engineer excellence for every stage of your project.'
              : 'من النمذجة ثلاثية الأبعاد والرندرات الواقعية إلى الشوب دروينج وحصر الكميات والتصميمات الإنشائية والمعمارية المعتمدة — نقدم حلولاً هندسية دقيقة تحول أفكارك إلى واقع استثنائي بأعلى معايير الأمان والجودة.'}
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* 4 Value Pillars Strip */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            {
              icon: <FiCheckCircle size={22} className="text-primary" />,
              titleAr: 'دقة هندسية 100%',
              titleEn: '100% Engineering Accuracy',
              descAr: 'مخططات مطابقة للأكواد وصفر تعارضات',
              descEn: 'Zero-clash execution-ready files',
              color: '#1A9E5F',
            },
            {
              icon: <FiClock size={22} className="text-primary-light" />,
              titleAr: 'التزام صارم بالمواعيد',
              titleEn: 'Strict On-Time Handover',
              descAr: 'جداول تسليم مرحلية واضحة ومحددة',
              descEn: 'Reliable milestone schedule',
              color: '#2ECC71',
            },
            {
              icon: <FiTrendingUp size={22} className="text-gold" />,
              titleAr: 'ترشيد تكاليف وهندسة قيمة',
              titleEn: 'Value Engineering',
              descAr: 'حصر BOQ يمنع الهدر ويوفر ميزانيتك',
              descEn: 'Optimized budget & zero waste',
              color: '#C9A227',
            },
            {
              icon: <FiShield size={22} className="text-[#2563EB]" />,
              titleAr: 'اعتمادات وتراخيص معتمدة',
              titleEn: 'Certified Standards',
              descAr: 'مخططات جاهزة للتراخيص والتنفيذ الفوري',
              descEn: 'Full permit & compliance readiness',
              color: '#2563EB',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border-brand/40 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-primary/50 hover:shadow-md flex flex-col items-center text-center group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}15` }}
              >
                {item.icon}
              </div>
              <h4 className="text-[0.95rem] font-bold text-text-main mb-1">
                {isEn ? item.titleEn : item.titleAr}
              </h4>
              <p className="text-[0.8rem] text-text-muted leading-[1.6]">
                {isEn ? item.descEn : item.descAr}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Filter Navigation Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-14 animate-[fadeIn_0.5s_ease]">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-full text-[0.88rem] font-bold transition-all duration-300 cursor-pointer ${
              activeFilter === 'all'
                ? 'shadow-md shadow-primary/25'
                : 'bg-white border border-border-brand/60 text-[#0A1F18] hover:text-primary hover:border-primary hover:bg-primary/5 hover:shadow-sm'
            }`}
            style={{
              backgroundColor: activeFilter === 'all' ? '#1A9E5F' : '#ffffff',
              backgroundImage: activeFilter === 'all' ? 'linear-gradient(135deg, #1A9E5F, #0D5C4A)' : 'none',
              color: activeFilter === 'all' ? '#ffffff' : '#0A1F18',
              border: activeFilter === 'all' ? '1px solid #1A9E5F' : undefined,
              boxShadow: activeFilter === 'all' ? '0 6px 20px rgba(26, 158, 95, 0.35)' : undefined,
            }}
          >
            {isEn ? 'All Services (4)' : 'جميع الخدمات (4)'}
          </button>
          {servicesDetailed.map((srv) => {
            const isSelected = activeFilter === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveFilter(srv.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.88rem] font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'shadow-md'
                    : 'bg-white border border-border-brand/60 text-[#0A1F18] hover:text-primary hover:border-primary hover:bg-primary/5 hover:shadow-sm'
                }`}
                style={{
                  backgroundColor: isSelected ? srv.color : '#ffffff',
                  color: isSelected ? '#ffffff' : '#0A1F18',
                  border: isSelected ? `1px solid ${srv.color}` : undefined,
                  boxShadow: isSelected ? `0 6px 20px ${srv.color}35` : undefined,
                }}
              >
                <span>{srv.icon}</span>
                <span>{isEn ? srv.titleEn : srv.titleAr}</span>
              </button>
            );
          })}
        </div>

        {/* Services Showcase Cards */}
        <div className="flex flex-col gap-24">
          {displayedServices.map((service) => {
            const currentTab = activeTabPerService[service.id] || 'features';
            const whatsappMessage = encodeURIComponent(
              isEn
                ? `Hello First Aqar, I would like to inquire and request a quote regarding: ${service.titleEn}`
                : `مرحباً فيرست عقار، أود الاستفسار وطلب عرض سعر بخصوص خدمة: ${service.titleAr}`
            );

            return (
              <div
                key={service.id}
                id={service.id}
                className="relative bg-bg-card border rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.05)] transition-all duration-400 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                style={{ borderColor: `${service.color}30` }}
              >
                {/* Top Colored Accent Stripe */}
                <div
                  className="absolute top-0 inset-x-8 h-[3px] rounded-t-full"
                  style={{
                    background: `linear-gradient(90deg, ${service.color}, ${service.colorLight}, transparent)`,
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Visual Preview Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      service.reverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="sticky top-28 flex flex-col gap-4">
                      {/* Interactive Image Frame */}
                      <div
                        className="group relative rounded-2xl overflow-hidden border border-border-brand/40 shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer"
                        style={{ height: '360px' }}
                        onClick={() =>
                          setLightboxImg({
                            url: service.image,
                            title: isEn ? service.titleEn : service.titleAr,
                          })
                        }
                      >
                        <img
                          src={service.image}
                          alt={isEn ? service.imageAltEn : service.imageAltAr}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                        {/* Badge Tag */}
                        <div
                          className="absolute top-4 inset-inline-start-4 px-3.5 py-1.5 rounded-full backdrop-blur-md text-[0.78rem] font-bold text-white shadow-sm flex items-center gap-1.5"
                          style={{
                            background: `${service.color}CC`,
                            border: `1px solid ${service.colorLight}50`,
                          }}
                        >
                          <span>{service.icon}</span>
                          <span>{isEn ? service.badgeEn : service.badgeAr}</span>
                        </div>

                        {/* Click to Zoom Pill */}
                        <div className="absolute bottom-4 inset-inline-end-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[0.78rem] font-semibold flex items-center gap-1.5 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                          <FiMaximize2 size={14} />
                          <span>{isEn ? 'Preview' : 'تكبير المعاينة'}</span>
                        </div>

                        {/* Service Code Watermark */}
                        <div className="absolute bottom-3 inset-inline-start-4 text-white/30 text-[2.6rem] font-black leading-none font-mono select-none">
                          {service.code}
                        </div>
                      </div>

                      {/* Software Tools Tag Rack */}
                      <div className="bg-bg-card2 border border-border-brand/40 rounded-xl p-4">
                        <div className="text-[0.78rem] font-bold text-text-dim mb-2 flex items-center gap-1.5 uppercase tracking-wider">
                          <FiCpu size={14} className="text-primary" />
                          <span>{isEn ? 'Software & Engineering Tools' : 'البرامج والأدوات الهندسية المعتمدة'}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.software.map((sw, swi) => (
                            <span
                              key={swi}
                              className="px-2.5 py-1 bg-white border border-border-brand/40 rounded-lg text-[0.75rem] font-semibold text-text-main shadow-xs"
                            >
                              {sw}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Direct CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <Link
                          to="/contact"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white text-[0.9rem] font-bold transition-all duration-300 hover:brightness-110 shadow-md"
                          style={{
                            background: `linear-gradient(135deg, ${service.color}, ${service.colorLight})`,
                            boxShadow: `0 4px 18px ${service.color}40`,
                          }}
                        >
                          <span>{isEn ? 'Request Quote' : 'طلب عرض سعر'}</span>
                          {isEn ? <FiArrowRight size={16} /> : <FiArrowLeft size={16} />}
                        </Link>

                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white text-[0.9rem] font-bold bg-[#25D366] hover:bg-[#1fba57] transition-all duration-300 shadow-md shadow-[#25D366]/20"
                        >
                          <FaWhatsapp size={18} />
                          <span>{isEn ? 'WhatsApp' : 'واتساب'}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Information & Interactive Tabs (7 cols) */}
                  <div
                    className={`lg:col-span-7 flex flex-col ${
                      service.reverse ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Header Details */}
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-[1.4rem]"
                        style={{ backgroundColor: `${service.color}18` }}
                      >
                        {service.icon}
                      </span>
                      <div>
                        <span
                          className="text-[0.8rem] font-extrabold uppercase tracking-widest block"
                          style={{ color: service.color }}
                        >
                          {isEn ? service.badgeEn : service.badgeAr}
                        </span>
                        <h3 className="text-[clamp(1.5rem,2.8vw,2.1rem)] font-extrabold text-text-main leading-tight">
                          {isEn ? service.titleEn : service.titleAr}
                        </h3>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p
                      className="text-[0.98rem] font-bold mt-2 mb-3 leading-[1.6]"
                      style={{ color: service.color }}
                    >
                      {isEn ? service.taglineEn : service.taglineAr}
                    </p>

                    {/* Comprehensive Description */}
                    <p className="text-text-muted text-[0.95rem] leading-[1.85] mb-6">
                      {isEn ? service.descEn : service.descAr}
                    </p>

                    {/* Interactive Sub-Tabs Navigation */}
                    <div className="flex items-center gap-2 border-b border-border-brand/40 pb-3 mb-6 overflow-x-auto no-scrollbar">
                      {[
                        { id: 'features', labelAr: 'نطاق العمل والمميزات', labelEn: 'Scope & Features', icon: <FiCheckCircle size={15} /> },
                        { id: 'deliverables', labelAr: 'نواتج التسليم والمخرجات', labelEn: 'Deliverables', icon: <FiBox size={15} /> },
                        { id: 'process', labelAr: 'مراحل التنفيذ', labelEn: 'Work Stages', icon: <FiCompass size={15} /> },
                      ].map((tab) => {
                        const isTabActive = currentTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => handleTabChange(service.id, tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[0.84rem] font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                              isTabActive
                                ? 'text-white'
                                : 'text-text-muted bg-bg-card2 hover:text-text-main'
                            }`}
                            style={{
                              backgroundColor: isTabActive ? service.color : undefined,
                              boxShadow: isTabActive ? `0 4px 14px ${service.color}35` : undefined,
                            }}
                          >
                            <span>{tab.icon}</span>
                            <span>{isEn ? tab.labelEn : tab.labelAr}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab 1: Scope & Key Features */}
                    {currentTab === 'features' && (
                      <div className="animate-[fadeIn_0.35s_ease]">
                        <ul className="list-none p-0 m-0 grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                          {(isEn ? service.featuresEn : service.featuresAr).map((feat, fi) => (
                            <li
                              key={fi}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-bg-card2/70 border border-border-brand/30 text-[0.88rem] text-text-main leading-[1.6]"
                            >
                              <FiCheckCircle
                                size={17}
                                className="flex-shrink-0 mt-1"
                                style={{ color: service.color }}
                              />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tab 2: Deliverables */}
                    {currentTab === 'deliverables' && (
                      <div className="animate-[fadeIn_0.35s_ease] mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {(isEn ? service.deliverablesEn : service.deliverablesAr).map((deliv, di) => (
                            <div
                              key={di}
                              className="flex items-center gap-3 p-4 rounded-xl border border-border-brand/40 bg-white shadow-xs transition-all duration-200 hover:border-primary/40"
                            >
                              <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{
                                  backgroundColor: `${service.color}15`,
                                  color: service.color,
                                }}
                              >
                                {deliv.icon}
                              </div>
                              <span className="text-[0.88rem] font-bold text-text-main leading-[1.5]">
                                {deliv.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Work Process */}
                    {currentTab === 'process' && (
                      <div className="animate-[fadeIn_0.35s_ease] mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {(isEn ? service.processEn : service.processAr).map((step, si) => (
                            <div
                              key={si}
                              className="p-4 rounded-xl bg-bg-card2 border border-border-brand/40 flex flex-col gap-1.5"
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className="text-[0.75rem] font-mono font-extrabold px-2 py-0.5 rounded-md"
                                  style={{
                                    backgroundColor: `${service.color}20`,
                                    color: service.color,
                                  }}
                                >
                                  {step.step}
                                </span>
                              </div>
                              <h5 className="text-[0.92rem] font-bold text-text-main mt-1">
                                {step.title}
                              </h5>
                              <p className="text-[0.82rem] text-text-muted leading-[1.6]">
                                {step.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Footer Highlights */}
                    <div className="mt-auto pt-4 border-t border-border-brand/30 flex items-center justify-between flex-wrap gap-4 text-[0.85rem] text-text-muted">
                      <div className="flex items-center gap-2">
                        <FiShield size={16} className="text-primary" />
                        <span>
                          {isEn
                            ? 'Compliance guaranteed with regional and international codes'
                            : 'ضمان الدقة الهندسية والالتزام الكامل بالأكواد القياسية'}
                        </span>
                      </div>
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-1.5 font-bold hover:underline"
                        style={{ color: service.color }}
                      >
                        <span>{isEn ? 'View Related Projects' : 'شاهد نماذج من سابقة الأعمال'}</span>
                        {isEn ? <FiArrowRight size={14} /> : <FiArrowLeft size={14} />}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose First Aqar Engineering Banner */}
        <div className="reveal mt-20 bg-gradient-to-br from-[#0A1F18] to-[#0D5C4A] text-white rounded-[24px] p-8 sm:p-12 shadow-[0_20px_50px_rgba(13,92,74,0.25)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(46,204,113,0.18)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-1 max-w-[800px]">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-white text-[0.8rem] font-bold mb-4 backdrop-blur-sm">
              {isEn ? '🌟 Engineering Excellence' : '🌟 التميز الهندسي مع فيرست عقار'}
            </span>
            <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-extrabold mb-4 leading-[1.3]">
              {isEn
                ? 'Ready to bring your project to life with certified precision?'
                : 'جاهز لبدء مشروعك بحلول هندسية احترافية تضمن لك أدق تفاصيل النجاح؟'}
            </h3>
            <p className="text-white/85 text-[1rem] leading-[1.8] mb-8">
              {isEn
                ? 'Our experienced consultants and structural engineers are ready to assist you. Book a complimentary technical consultation and get tailored quotes for your requirements.'
                : 'فريقنا من المهندسين الاستشاريين والمصممين جاهز لمساعدتك في كل خطوة، بدءاً من المخططات المبدئية وحصر التكاليف وحتى الاعتماد والتنفيذ النهائي.'}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/contact" className="btn-gold font-bold">
                <span>{isEn ? 'Book Free Consultation' : 'احجز استشارة مجانية لمشروعك'}</span>
                {isEn ? <FiArrowRight size={18} /> : <FiArrowLeft size={18} />}
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold transition-all duration-300 backdrop-blur-sm"
              >
                <FaWhatsapp size={18} className="text-[#25D366]" />
                <span>{isEn ? 'Instant WhatsApp Chat' : 'محادثة فورية على الواتساب'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Preview */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease]"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-bg-card rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 inset-inline-end-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <FiX size={20} />
            </button>

            <img
              src={lightboxImg.url}
              alt={lightboxImg.title}
              className="w-full max-h-[80vh] object-contain block bg-black/20"
            />
            <div className="p-4 bg-bg-card border-t border-border-brand/30 flex items-center justify-between">
              <h4 className="text-[1rem] font-bold text-text-main">{lightboxImg.title}</h4>
              <span className="text-[0.8rem] text-text-dim">
                {isEn ? 'High Resolution Engineering Preview' : 'معاينة هندسية عالية الدقة'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DetailedServicesSection;
