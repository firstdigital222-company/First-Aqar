import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const FAQItem = ({ faq, isOpen, onToggle, isEn }) => (
  <div
    className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-border-hover bg-primary/4' : 'border-border-brand bg-bg-card'
      }`}
  >
    <button
      className={`w-full flex items-center gap-4 p-5 bg-none border-none cursor-pointer font-main ${isEn ? 'flex-row-reverse' : 'flex-row'
        }`}
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className={`text-text-main font-bold text-[0.95rem] flex-1 ${isEn ? 'text-left' : 'text-right'}`}>
        {faq.question}
      </span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[1.3rem] transition-all duration-300 flex-shrink-0 font-light ${isOpen ? 'rotate-45 bg-primary text-white' : 'rotate-0 bg-primary/10 text-primary'
        }`}>
        +
      </div>
    </button>

    <div className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
      <div className={`p-[0_24px_20px] leading-[1.85] text-[0.9rem] flex flex-col gap-1 ${isEn ? 'text-left' : 'text-right'}`}>
        {faq.answer.split('\n').map((line, i) => (
          <p
            key={i}
            className={`${line.startsWith('•') ? 'mb-1 text-text-main' : 'mb-0 text-text-muted'} ${(!isEn && line.startsWith('•')) ? 'pr-2' : ''
              } ${(isEn && line.startsWith('•')) ? 'pl-2' : ''
              }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const FAQAccordionSection = () => {
  const { t, i18n } = useTranslation();
  const [openId, setOpenId] = useState(null);
  const [activeCategory, setActive] = useState('all');
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const categories = [
    { id: 'all', label: isEn ? 'All' : 'الكل' },
    { id: 'finish', label: isEn ? 'Finishing' : 'التشطيبات' },
    { id: 'design', label: isEn ? 'Design' : 'التصميم' },
    { id: 'price', label: isEn ? 'Pricing' : 'الأسعار' },
    { id: 'warranty', label: isEn ? 'Warranty' : 'الضمان' },
    { id: 'contact', label: isEn ? 'Contact' : 'التواصل' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'finish',
      question: isEn ? 'How long does a finishing project take?' : 'كم مدة تنفيذ مشروع التشطيب؟',
      answer: isEn
        ? 'Project duration varies by size and finishing standard. Usually a small apartment (100-120m²) at Deluxe level takes 45 to 60 days, and a villa takes 3 to 6 months. Actual duration is determined after site inspection and contract signature.'
        : 'مدة التنفيذ تختلف حسب حجم المشروع ومستوى التشطيب. عادةً الشقة الصغيرة (100-120م²) بمستوى لوكس تستغرق من 45 إلى 60 يوماً، والفيلا تستغرق من 3 إلى 6 أشهر. يتم تحديد المدة الفعلية بعد المعاينة وتوقيع العقد.',
    },
    {
      id: 2,
      category: 'finish',
      question: isEn ? 'What are the available finishing levels?' : 'ما هي مستويات التشطيب المتاحة؟',
      answer: isEn
        ? 'We offer 3 levels:\n• Economy: good materials at reasonable prices\n• Deluxe: premium materials and elegant finish\n• Super Deluxe: top materials and the highest level of finishing\nYou can learn the details of each level in the first meeting.'
        : 'نقدّم 3 مستويات:\n• الاقتصادي: مواد جيدة بأسعار معقولة\n• اللوكس: مواد متميزة وتشطيب راقٍ\n• السوبر لوكس: أرقى المواد وأعلى مستوى تشطيب\nيمكنك معرفة تفاصيل كل مستوى وأسعاره في الاجتماع الأول.',
    },
    {
      id: 3,
      category: 'design',
      question: isEn ? 'Can the design be modified after starting?' : 'هل يمكن التعديل على التصميم بعد البدء؟',
      answer: isEn
        ? 'Yes, absolutely! We ensure your full satisfaction. We offer unlimited modifications during the design stage before proceeding to execution. After starting execution, minor edits are possible but may affect timeline and cost.'
        : 'نعم بالتأكيد! نحرص على رضاك الكامل. نوفر تعديلات غير محدودة على مرحلة التصميم قبل الانتقال للتنفيذ. بعد بدء التنفيذ، التعديلات الطفيفة ممكنة لكن قد تؤثر على الجدول الزمني والتكلفة.',
    },
    {
      id: 4,
      category: 'design',
      question: isEn ? 'How long does a 3D design take to prepare?' : 'كم يستغرق وقت إعداد التصميم الـ3D؟',
      answer: isEn
        ? 'A full 3D design for a medium apartment takes 7 to 14 business days. This includes: 2D layouts, 3D visualizations, and a virtual tour. Time depends on project size and complexity.'
        : 'التصميم الـ3D الكامل لشقة متوسطة يستغرق من 7 إلى 14 يوم عمل. يشمل ذلك: مخططات 2D، تصميمات ثلاثية الأبعاد، وجولة افتراضية. يتوقف الوقت على حجم المشروع وتعقيده.',
    },
    {
      id: 5,
      category: 'price',
      question: isEn ? 'How is the price determined?' : 'كيف يتم تحديد السعر؟',
      answer: isEn
        ? 'Pricing is determined after field inspection based on:\n• Project area\n• Required finishing level\n• Chosen materials\n• Additional requested works\nWe offer a detailed and transparent quotation before contract signature.'
        : 'السعر يتحدد بعد المعاينة الميدانية وفقاً لـ:\n• مساحة المشروع\n• مستوى التشطيب المطلوب\n• المواد المختارة\n• الأعمال الإضافية المطلوبة\nنقدّم عرض سعر مفصّل وشفاف قبل توقيع العقد.',
    },
    {
      id: 6,
      category: 'price',
      question: isEn ? 'Is there a free consultation?' : 'هل يوجد استشارة مجانية؟',
      answer: isEn
        ? 'Yes! The first consultation is completely free. We visit you on site, study the space, and discuss your needs and budget. Then we provide you with a comprehensive quote with no obligation.'
        : 'نعم! الاستشارة الأولى مجانية تماماً. نزورك في الموقع، ندرس المساحة، ونناقش احتياجاتك وميزانيتك. بعدها نقدّم لك عرضاً متكاملاً دون أي التزام.',
    },
    {
      id: 7,
      category: 'warranty',
      question: isEn ? 'What is the quality warranty provided?' : 'ما هو ضمان الجودة المقدّم؟',
      answer: isEn
        ? 'We offer a comprehensive warranty on all finishing works for one year from handover date. The warranty covers:\n• Painting works\n• Flooring and ceramics\n• Gypsum ceilings\n• All electrical and plumbing works'
        : 'نقدّم ضمان شامل على جميع أعمال التشطيب لمدة سنة من تاريخ التسليم. يشمل الضمان:\n• أعمال الدهانات\n• الأرضيات والسيراميك\n• الأسقف الجبسية\n• جميع الأعمال الكهربائية والسباكة',
    },
    {
      id: 8,
      category: 'warranty',
      question: isEn ? 'Do you fully supervise the execution?' : 'هل تشرفون على التنفيذ كاملاً؟',
      answer: isEn
        ? 'Yes, we offer full execution supervision. You will have a dedicated follow-up engineer for your project who communicates with you regularly and sends weekly progress reports with photos.'
        : 'نعم، نقدّم خدمة الإشراف الكامل على التنفيذ. يكون لديك مهندس متابعة مخصص لمشروعك يتواصل معك بشكل دوري ويبعث تقارير تقدّم أسبوعية مع صور توثيق.',
    },
    {
      id: 9,
      category: 'contact',
      question: isEn ? 'How can I contact your team?' : 'كيف يمكنني التواصل مع فريقكم؟',
      answer: isEn
        ? 'You can contact us via:\n• WhatsApp: for immediate response\n• Phone: during working hours\n• Contact Form on the website\n• Email\nWe commit to responding within 24 hours maximum.'
        : 'يمكنك التواصل معنا عبر:\n• واتساب: للرد الفوري\n• الهاتف: خلال أوقات العمل\n• نموذج التواصل على الموقع\n• البريد الإلكتروني\nنلتزم بالرد خلال 24 ساعة كحد أقصى.',
    },
    {
      id: 10,
      category: 'contact',
      question: isEn ? 'Do you work outside Cairo?' : 'هل تعملون خارج القاهرة؟',
      answer: isEn
        ? 'Yes! We work across all governorates of Egypt. We have specialized teams that can reach any site. For projects outside Cairo, special arrangements are coordinated according to the nature of each project.'
        : 'نعم! نعمل في جميع محافظات مصر. لدينا فرق عمل متخصصة تستطيع الوصول لأي موقع. للمشاريع خارج القاهرة يتم تنسيق ترتيبات خاصة حسب طبيعة كل مشروع.',
    },
  ];

  const filtered = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="section section-dark" ref={ref}>
      <div className="glow-orb glow-orb-green w-[600px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container relative z-1">
        <div className="section-header reveal">
          <span className="section-badge">{t('faq.badge')}</span>
          <h2 className="section-title">
            {t('faq.title')}
          </h2>
          <p className="section-subtitle">
            {t('faq.sub')}
          </p>
          <div className="section-divider" />
        </div>

        {/* Category Filter */}
        <div className="reveal flex gap-2.5 flex-wrap justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.25 rounded-[50px] text-[0.85rem] font-semibold cursor-pointer transition-all duration-300 font-main ${activeCategory === cat.id
                ? 'bg-gradient-to-br from-primary-light to-primary-dark text-white border-none'
                : 'bg-primary/6 text-text-muted border border-border-brand'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="reveal max-w-[800px] mx-auto flex flex-col gap-3">
          {filtered.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              isEn={isEn}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center mt-16">
          <p className="text-text-muted mb-5">
            {t('faq.more')}
          </p>
          <Link to="/contact" className="btn-primary">
            <span>{t('faq.btn')}</span>
            {isEn ? <FiArrowRight FiArrowLeft size={18} /> : <FiArrowLeft size={18} />}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordionSection;
