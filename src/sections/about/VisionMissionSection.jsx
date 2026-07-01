import React from 'react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const VisionMissionSection = () => {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal();
  const isEn = i18n.language === 'en';

  const visionItems = [
    {
      icon: '👁️',
      title: isEn ? 'Our Vision' : 'رؤيتنا',
      text: isEn 
        ? 'To be one of the leading companies in the field of design and finishing by providing innovative solutions and exceptional quality that make a real difference in our clients\' lives.'
        : 'أن نكون من الشركات الرائدة في مجال التصميم والتشطيب من خلال تقديم حلول مبتكرة وجودة استثنائية تُحدث فارقاً حقيقياً في حياة عملائنا.',
      color: '#2ECC71',
    },
    {
      icon: '🎯',
      title: isEn ? 'Our Mission' : 'رسالتنا',
      text: isEn 
        ? 'Achieving complete client satisfaction by executing projects that reflect their needs and exceed expectations, while maintaining the highest quality standards and commitment to schedules.'
        : 'تحقيق رضا العميل الكامل من خلال تنفيذ مشاريع تعكس احتياجاته وتفوق توقعاته، مع الحفاظ على أعلى معايير الجودة والالتزام بالمواعيد.',
      color: '#C9A227',
    },
  ];

  const values = [
    { icon: '⭐', label: isEn ? 'Quality' : 'الجودة', desc: isEn ? 'We do not compromise on quality at any stage of work' : 'لا نساوم على الجودة في أي مرحلة من مراحل العمل' },
    { icon: '🤝', label: isEn ? 'Commitment' : 'اللتزام', desc: isEn ? 'We commit to schedules and agreements, respecting the client\'s time' : 'نلتزم بالمواعيد والاتفاقيات ونحترم وقت العميل' },
    { icon: '💡', label: isEn ? 'Innovation' : 'الابتكار', desc: isEn ? 'We follow latest trends and provide creative custom solutions' : 'نتابع أحدث الاتجاهات ونقدّم حلولاً إبداعية مميزة' },
    { icon: '💎', label: isEn ? 'Transparency' : 'الشفافية', desc: isEn ? 'Honest communication and full clarity at every single step' : 'تواصل صريح ووضوح كامل في كل خطوة من خطوات العمل' },
    { icon: '🏆', label: isEn ? 'Excellence' : 'التميز', desc: isEn ? 'We always strive to exceed expectations and deliver the best' : 'نسعى دائماً لتجاوز التوقعات وتقديم الأفضل' },
    { icon: '❤️', label: isEn ? 'Attention' : 'الاهتمام', desc: isEn ? 'We treat every single project as if it was our personal one' : 'كل مشروع نتعامل معه كأنه مشروعنا الشخصي' },
  ];

  const timelineSteps = [
    { year: '2016', title: isEn ? 'The Start' : 'البداية', desc: isEn ? 'Launch of First Aqar with a small team and a big dream to change finishing concepts' : 'انطلاق فيرست عقار بفريق صغير وحلم كبير في تغيير مفهوم التشطيبات' },
    { year: '2018', title: isEn ? 'Expansion' : 'التوسع', desc: isEn ? 'Expanded to include interior and exterior design and recruited professional designers' : 'توسعنا لنشمل خدمات التصميم الداخلي والخارجي وضمنا فريق من المصممين المحترفين' },
    { year: '2020', title: isEn ? 'Innovation' : 'الابتكار', desc: isEn ? 'Launched 3D visualization and virtual tour services for our projects' : 'أطلقنا خدمة التصميم الـ3D والجولات الافتراضية لمشاريعنا' },
    { year: '2022', title: isEn ? 'Leadership' : 'الريادة', desc: isEn ? 'Passed 300 successful projects and earned client trust in various governorates' : 'تجاوزنا 300 مشروع ناجح وحصلنا على ثقة عملائنا في مختلف المحافظات' },
    { year: '2024', title: isEn ? 'The Present' : 'الحاضر', desc: isEn ? 'Today we serve our clients with an integrated team of engineers, designers, and technicians' : 'اليوم نخدم عملاءنا بفريق متكامل من المهندسين والمصممين والفنيين المحترفين' },
  ];

  return (
    <section className="section section-dark bg-dots" ref={ref}>
      <div className="container">
        {/* Vision & Mission */}
        <div className="section-header reveal">
          <span className="section-badge">🧭 {isEn ? 'Our Focus' : 'توجهاتنا'}</span>
          <h2 className="section-title">
            {isEn ? 'Vision &' : 'رؤيتنا'} <span className="highlight">{isEn ? 'Mission' : 'رسالتنا'}</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-6">
          {visionItems.map((item, i) => (
            <div key={i} className={`glass-card reveal delay-${i + 1} p-9 border-t-3`} style={{ borderTopColor: item.color }}>
              <div className="text-[2.5rem] mb-4">{item.icon}</div>
              <h3 className="text-[1.3rem] font-extrabold text-text-main mb-3">{item.title}</h3>
              <p className="text-text-muted leading-[1.85] text-[0.95rem]">{item.text}</p>
              <div className="w-[50px] h-[3px] rounded-[4px] mt-5" style={{ backgroundColor: item.color }} />
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="section-header reveal">
            <span className="section-badge">💎 {isEn ? 'Values' : 'قيمنا'}</span>
            <h2 className="section-title">
              {isEn ? 'Values We' : 'القيم التي'} <span className="gold">{isEn ? 'Believe In' : 'نؤمن بها'}</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
            {values.map((v, i) => (
              <div key={i} className={`dark-card reveal delay-${i + 1} p-[28px_24px] text-center`}>
                <div className="text-[2rem] mb-3">{v.icon}</div>
                <h3 className="text-base font-bold text-text-main mb-2">{v.label}</h3>
                <p className="text-text-muted text-[0.85rem] leading-[1.7]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Timeline */}
        <div className="mt-20">
          <div className="section-header reveal">
            <span className="section-badge">📅 {isEn ? 'Our Story' : 'قصتنا'}</span>
            <h2 className="section-title">
              {isEn ? 'Our Journey' : 'رحلتنا'} <span className="highlight">{isEn ? 'Over the Years' : 'عبر السنوات'}</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="max-w-[700px] mx-auto relative">
            {timelineSteps.map((step, i) => (
              <div key={i} className={`reveal delay-${i + 1} flex items-start gap-5 mb-8 relative`}>
                <div className="min-w-[60px] text-center">
                  <span className="gradient-text text-[1.1rem] font-black">{step.year}</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0 mt-[3px] shadow-[0_0_12px_rgba(46,204,113,0.5)]" />
                <div className="flex-1 bg-bg-card border border-primary/15 rounded-xl p-[16px_20px] shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                  <h4 className="text-text-main font-bold mb-1.5">{step.title}</h4>
                  <p className="text-text-muted text-[0.88rem] leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
