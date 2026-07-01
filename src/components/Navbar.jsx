import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [skipTransition, setSkipTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const dir = i18n.language === 'en' ? 'ltr' : 'rtl';
    const lang = i18n.language || 'ar';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    // Disable sidebar transition for one tick so direction flip doesn't flash the sidebar
    setSkipTransition(true);
    setIsOpen(false);
    i18n.changeLanguage(newLang);
    requestAnimationFrame(() => requestAnimationFrame(() => setSkipTransition(false)));
  };

  const navLinks = [
    { to: '/',         label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/portfolio',label: t('nav.portfolio') },
    { to: '/about',    label: t('nav.about') },
    { to: '/faq',      label: t('nav.faq') },
    { to: '/contact',  label: t('nav.contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-[1000] backdrop-blur-[20px] border-b border-primary/15 transition-all duration-400 ease-in-out animate-[navSlideIn_0.6s_ease] ${
          scrolled ? 'bg-[#fffffff7] shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'bg-[#ffffffe0] shadow-none'
        } ${i18n.language === 'en' ? '[direction:ltr]' : '[direction:rtl]'}`}
      >
        <div className="container flex items-center justify-between h-[75px]">
          {/* Logo */}
          <Link to="/" className="flex items-center no-underline" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png"
              alt="First Aqar Logo"
              className="h-[54px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center gap-1 hidden-mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-[50px] text-[0.9rem] font-semibold transition-all duration-300 no-underline font-main ${
                    isActive
                      ? 'text-white bg-gradient-to-br from-primary-light to-primary-dark border-none'
                      : 'text-[#1A3D2B] bg-transparent border border-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Language Switcher + CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Lang Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary/8 text-primary rounded-[50px] border border-border-brand cursor-pointer font-main transition-all duration-300"
            >
              <FiGlobe size={18} />
              <span className="font-bold text-[0.85rem]">{i18n.language === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-[50px] text-[0.9rem] font-bold no-underline font-main transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)] border-none cursor-pointer hidden-mobile"
            >
              <FaWhatsapp size={16} />
              <span>{t('hero.whatsapp')}</span>
            </a>

            <button
              onClick={() => setIsOpen((p) => !p)}
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/8 border border-primary/20 text-primary cursor-pointer show-mobile"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0a1f1880] z-[1100] backdrop-blur-[4px]"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 h-[100dvh] w-[min(320px,90vw)] bg-white shadow-[-4px_0_30px_rgba(0,0,0,0.1)] z-[1200] overflow-y-auto ${skipTransition ? '' : 'transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]'} ${
          i18n.language === 'en' ? 'right-auto left-0 border-r border-primary/15' : 'left-auto right-0 border-l border-primary/15'
        } ${isOpen ? 'translate-x-0' : i18n.language === 'en' ? '-translate-x-full' : 'translate-x-full'}`}
      >
        <div className="p-[24px_20px]">
          <div className="mb-8 flex items-center gap-3 pb-5 border-b border-border-brand">
            <div className="w-11 h-11 bg-gradient-to-br from-primary/12 to-primary-dark/20 border border-primary/20 rounded-xl flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                <path d="M8 32L8 18L20 8L32 18V32H24V24H16V32H8Z" fill="url(#logoGrad2)" />
                <defs>
                  <linearGradient id="logoGrad2" x1="8" y1="8" x2="32" y2="32">
                    <stop offset="0%" stopColor="#2ECC71" />
                    <stop offset="100%" stopColor="#0D5C4A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-text-main">{t('brand')}</div>
              <div className="text-[0.75rem] text-primary">{t('brand_sub')}</div>
            </div>
          </div>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3.5 mb-1 rounded-xl text-base font-semibold no-underline font-main transition-all duration-200 ${
                  isActive ? 'text-primary bg-primary/8' : 'text-text-main bg-transparent'
                } ${
                  i18n.language === 'en'
                    ? isActive
                      ? 'border-l-3 border-primary'
                      : 'border-l-3 border-transparent'
                    : isActive
                    ? 'border-r-3 border-primary'
                    : 'border-r-3 border-transparent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary/8 text-primary rounded-[50px] text-[0.9rem] font-bold no-underline font-main transition-all duration-300 border border-border-brand cursor-pointer"
            >
              <FiGlobe size={16} />
              <span>{i18n.language === 'en' ? 'تغيير إلى العربية' : 'Switch to English'}</span>
            </button>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-[50px] text-[0.9rem] font-bold no-underline font-main transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)] border-none cursor-pointer"
            >
              <FaWhatsapp size={16} />
              <span>{t('hero.whatsapp')}</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 901px) { .show-mobile { display: none !important; } }
      `}</style>
    </>
  );
};

export default Navbar;
