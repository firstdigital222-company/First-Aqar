import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const footerLinks = {
    pages: [
      { to: '/',         label: t('nav.home') },
      { to: '/services', label: t('nav.services') },
      { to: '/portfolio',label: t('nav.portfolio') },
      { to: '/about',    label: t('nav.about') },
      { to: '/faq',      label: t('nav.faq') },
      { to: '/contact',  label: t('nav.contact') },
    ],
    services: [
      t('services.s1_title'),
      t('services.s2_title'),
      t('services.s3_title'),
      t('services.s4_title'),
      isEn ? 'Landscaping & Gardens' : 'لاندسكيب وحدائق',
      isEn ? 'Project Supervision' : 'إشراف وإدارة مشاريع',
    ],
  };

  return (
    <footer className={`bg-[#F0F8F4] border-t border-primary/15 pt-20 pb-0 relative overflow-hidden ${isEn ? '[direction:ltr]' : '[direction:rtl]'}`}>
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary via-gold via-primary-dark to-transparent" />

      {/* Background Glow */}
      <div className={`absolute top-0 w-[400px] h-[300px] bg-[radial-gradient(circle,_rgba(46,204,113,0.06)_0%,_transparent_70%)] pointer-events-none ${
        isEn ? 'right-auto left-[20%]' : 'left-auto right-[20%]'
      }`} />

      <div className="container relative">
        {/* Main Footer Grid */}
        <div className={`grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-12 pb-[60px] ${isEn ? 'text-left' : 'text-right'}`}>

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-primary/12 to-primary-dark/20 border border-primary/20 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                  <path d="M8 32L8 18L20 8L32 18V32H24V24H16V32H8Z" fill="url(#footerLogoGrad)" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="8" y1="8" x2="32" y2="32">
                      <stop offset="0%" stopColor="#2ECC71" />
                      <stop offset="100%" stopColor="#0D5C4A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="text-[1.1rem] font-extrabold text-text-main">{t('brand')}</div>
                <div className="text-[0.75rem] text-primary font-semibold">{t('brand_sub')}</div>
              </div>
            </div>
            <p className="text-text-muted text-[0.9rem] leading-[1.8] mb-6 max-w-[280px]">
              {t('about_snippet.p1')}
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5">
              {[
                { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/201234567890', color: '#25D366' },
                { icon: <FaFacebook size={18} />, href: '#', color: '#1877F2' },
                { icon: <FaInstagram size={18} />, href: '#', color: '#E4405F' },
                { icon: <FaYoutube size={18} />, href: '#', color: '#FF0000' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-[10px] bg-primary/8 border border-primary/15 flex items-center justify-center text-text-muted no-underline transition-all duration-300 hover:text-white hover:bg-[var(--hover-bg)]"
                  style={{ '--hover-bg': social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Pages Column */}
          <div>
            <h3 className="text-base font-extrabold text-text-main mb-5 pb-3 border-b border-primary/15 flex items-center gap-2">
              {isEn ? 'Website Pages' : 'صفحات الموقع'}
            </h3>
            <ul className="list-none flex flex-col gap-2.5 p-0">
              {footerLinks.pages.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-2 text-text-muted text-[0.88rem] no-underline transition-colors duration-200 cursor-pointer hover:text-primary">
                    {isEn ? <FiArrowRight size={14} className="text-primary" /> : <FiArrowLeft size={14} className="text-primary" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-base font-extrabold text-text-main mb-5 pb-3 border-b border-primary/15 flex items-center gap-2">
              {t('services.badge').replace('⚡ ', '')}
            </h3>
            <ul className="list-none flex flex-col gap-2.5 p-0">
              {footerLinks.services.map((service, i) => (
                <li key={i} className="flex items-center gap-2 text-text-muted text-[0.88rem] no-underline transition-colors duration-200 cursor-pointer hover:text-primary">
                  {isEn ? <FiArrowRight size={14} className="text-primary" /> : <FiArrowLeft size={14} className="text-primary" />}
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-base font-extrabold text-text-main mb-5 pb-3 border-b border-primary/15 flex items-center gap-2">
              {t('contact.badge').replace('📞 ', '')}
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: <FaWhatsapp size={18} />, text: '+20 123 456 7890', href: 'https://wa.me/201234567890', color: '#25D366' },
                { icon: <FiPhone size={18} />, text: '+20 123 456 7890', href: 'tel:+201234567890', color: 'var(--primary)' },
                { icon: <FiMail size={18} />, text: 'info@firstaqar.com', href: 'mailto:info@firstaqar.com', color: 'var(--primary)' },
                { icon: <FiMapPin size={18} />, text: isEn ? 'Cairo, Egypt' : 'القاهرة، مصر', href: '#', color: 'var(--primary)' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-text-muted text-[0.9rem] no-underline transition-colors duration-200 hover:text-primary"
                >
                  <span className="flex-shrink-0" style={{ color: item.color }}>{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-[50px] text-[0.9rem] font-bold no-underline font-main hover:shadow-lg transition-all duration-300"
            >
              <FaWhatsapp size={16} />
              {t('contact.chat_now')}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between py-5 border-t border-primary/15 flex-wrap gap-2">
          <p className="text-text-dim text-[0.85rem]">
            {isEn ? `© ${new Date().getFullYear()} First Aqar — All Rights Reserved` : `© ${new Date().getFullYear()} فيرست عقار — جميع الحقوق محفوظة`}
          </p>
          <p className="text-text-dim text-[0.85rem]">
            {isEn ? 'Designed with ❤️ to transform spaces' : 'صُمّم بـ ❤️ لتحويل المساحات'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
