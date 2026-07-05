import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const DetailedServicesSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const servicesDetailed = [
    {
      id: 'finishing',
      icon: '🏗️',
      title: t('services.s1_title'),
      subtitle: isEn ? 'From walls to floors — everything in professional hands' : 'من الجدران للأرضيات — كل شيء في يد محترف',
      desc: t('services.s1_desc'),
      features: [
        isEn ? 'Apartment & villa finishing at different levels' : 'تشطيب شقق وفيلات بمستويات مختلفة',
        isEn ? 'Economy — Deluxe — Super Deluxe levels' : 'مستوى اقتصادي — لوكس — سوبر لوكس',
        isEn ? 'Painting and wallpaper works' : 'أحمال الدهانات والورق الحائط',
        isEn ? 'Ceramics, porcelain, and marble' : 'السيراميك والبورسلين والرخام',
        isEn ? 'Carpentry and doors' : 'أعمال النجارة والأبواب',
        isEn ? 'Plumbing and electrical installations' : 'أعمال الكهرباء والسباكة',
        isEn ? 'Gypsum ceilings and lighting' : 'أسقف جبسية وإضاءة',
        isEn ? 'Full supervision until handover' : 'إشراف كامل حتى التسليم',
      ],
      color: '#0bf56d',
      image: '/hero1.png',
      reverse: false,
    },
    {
      id: 'interior',
      icon: '🛋️',
      title: t('services.s2_title'),
      subtitle: isEn ? 'Comfortable and modern environment reflecting your personality' : 'بيئة مريحة وعصرية تعكس شخصيتك',
      desc: t('services.s2_desc'),
      features: [
        isEn ? 'Space analysis and study' : 'دراسة وتحليل المساحة',
        isEn ? 'Smart and functional space planning' : 'توزيع المساحات بشكل ذكي ووظيفي',
        isEn ? 'Color and material selections' : 'اختيار الألوان والخامات المناسبة',
        isEn ? 'Professional lighting layout' : 'تصميم الإضاءة الاحترافي',
        isEn ? 'Furniture and accessories selection' : 'اختيار الأثاث والإكسسوارات',
        isEn ? 'Kitchen and bathroom design' : 'تصميم المطابخ والحمامات',
        isEn ? 'Built-in cabinets design' : 'تصميم الخزائن المدمجة',
        isEn ? 'Full execution follow-up' : 'متابعة التنفيذ كاملة',
      ],
      color: '#7d4d90',
      image: '/hero3.png',
      reverse: true,
    },
    {
      id: 'exterior',
      icon: '🏢',
      title: t('services.s3_title'),
      subtitle: isEn ? 'Your facade is your identity to the world' : 'واجهتك هي بطاقة تعريفك للعالم',
      desc: t('services.s3_desc'),
      features: [
        isEn ? 'Modern facade design' : 'تصميم واجهات حديثة وعصرية',
        isEn ? 'Suitable facade materials selection' : 'اختيار مواد الواجهة المناسبة',
        isEn ? 'Landscaping and garden coordination' : 'لاندسكيب وتنسيق الحدائق',
        isEn ? 'Entrances and gates design' : 'تصميم المداخل والبوابات',
        isEn ? 'Professional exterior lighting' : 'إضاءة خارجية احترافية',
        isEn ? 'Swimming pools and water features' : 'حمامات سباحة وحدائق مائية',
        isEn ? 'Outdoor sitting areas' : 'مناطق جلوس خارجية',
        isEn ? 'Fountains and outdoor features' : 'نوافير وعناصر مائية',
      ],
      color: '#9b7b36',
      image: '/hero2.png',
      reverse: false,
    },
    {
      id: 'design3d',
      icon: '🎨',
      title: t('services.s4_title'),
      subtitle: isEn ? 'See your project before starting' : 'شوف مشروعك قبل ما تبدأ',
      desc: t('services.s4_desc'),
      features: [
        isEn ? 'Precise 2D technical drawings' : 'مخططات تنفيذية 2D دقيقة',
        isEn ? 'High-quality realistic 3D renders' : 'تصميمات 3D واقعية عالية الجودة',
        isEn ? 'Virtual reality tour inside the project' : 'جولة افتراضية داخل المشروع',
        isEn ? 'Professional visualization renders' : 'رندرات احترافية للعرض',
        isEn ? 'Unlimited modifications until satisfaction' : 'تعديلات غير محدودة حتى الرضا',
        isEn ? 'Multi-format file delivery' : 'تسليم ملفات بصيغ متعددة',
        isEn ? 'Electrical and plumbing layouts' : 'مخططات كهرباء وسباكة',
        isEn ? 'Full detailed technical contract' : 'تفصيل كامل للعقد التنفيذي',
      ],
      color: '#3498DB',
      image: '/hero3.png',
      reverse: true,
    },
  ];

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">{t('services.detail_badge')}</span>
          <h2 className="section-title">
            {t('services.detail_title').split(' ')[0]} <span className="highlight">{t('services.detail_title').substring(t('services.detail_title').indexOf(' '))}</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="flex flex-col gap-20">
          {servicesDetailed.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-14 items-center"
            >
              {/* Image */}
              <div className={`reveal-${service.reverse ? 'left' : 'right'} ${service.reverse ? 'order-1' : 'order-0'}`}>
                <div className="relative rounded-[24px] overflow-hidden border shadow-[0_20px_60px_rgba(0,0,0,0.1)]" style={{ borderColor: service.color + '30' }}>
                  <img src={service.image} alt={service.title} className="w-full h-[380px] object-cover block" />
                  {/* <div className="absolute bottom-5 right-5 w-[60px] h-[60px] rounded-[16px] border backdrop-blur-[10px] flex items-center justify-center" style={{ background: service.color + '22', borderColor: service.color + '40' }}>
                    <span className="text-[1.8rem]">{service.icon}</span>
                  </div> */}
                </div>
              </div>

              {/* Content */}
              <div className={`reveal-${service.reverse ? 'right' : 'left'} ${service.reverse ? 'order-0' : 'order-1'}`}>
                <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-[50px] text-[0.85rem] font-bold border mb-4" style={{ color: service.id === 'finishing' ? '#000' : (service.id === 'interior' || service.id === 'exterior' || service.id === 'design3d') ? '#fff' : service.color, borderColor: service.color + '40', backgroundColor: (service.id === 'interior' || service.id === 'exterior' || service.id === 'design3d') ? service.color : service.color + '12' }}>
                  {service.icon} {service.title}
                </span>
                <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold text-text-main leading-[1.3] mb-4">{service.subtitle}</h2>
                <p className="text-text-muted leading-[1.85] text-[0.95rem] mb-6">{service.desc}</p>

                <ul className="list-none grid grid-cols-2 gap-2.5 mb-7">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-muted text-[0.85rem]">
                      <FiCheckCircle size={16} className="flex-shrink-0" style={{ color: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-[50px] text-white text-[0.9rem] font-bold no-underline font-main transition-all duration-300 hover:brightness-110 shadow-md" style={{ background: `linear-gradient(135deg, ${service.color}CC, ${service.color}88)`, border: `1px solid ${service.color}40` }}>
                  <span>{t('services.btn_book')}</span>
                  {isEn ? <FiArrowRight size={16} /> : <FiArrowLeft size={16} />}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
