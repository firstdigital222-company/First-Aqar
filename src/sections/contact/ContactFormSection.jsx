import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';

const ContactFormSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useScrollReveal();

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="section section-dark bg-grid pt-[120px]" ref={ref}>
      <div className="glow-orb glow-orb-gold w-[500px] h-[500px] top-1/2 right-[-150px] -translate-y-1/2 opacity-15" />

      <div className="container relative z-1">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-badge">{t('contact.badge')}</span>
          <h1 className="section-title">
            {t('contact.title')}
          </h1>
          <p className="section-subtitle">
            {t('contact.sub')}
          </p>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10">
          {/* Form */}
          <div className="reveal">
            <div className="bg-white border border-primary/15 rounded-[24px] p-9 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
              <h2 className="text-text-main font-extrabold text-[1.2rem] mb-7">
                {t('contact.form_title')}
              </h2>

              {submitted ? (
                <div className="text-center p-[40px_20px] animate-[fadeIn_0.5s_ease]">
                  <div className="text-[3rem] mb-4">✅</div>
                  <h3 className="text-text-main font-bold text-[1.1rem] mb-2">
                    {t('contact.success')}
                  </h3>
                  <p className="text-text-muted">
                    {t('contact.success_sub')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex gap-4 flex-wrap">
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-text-muted text-[0.85rem] font-semibold mb-2">{t('contact.name')}</label>
                      <input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full p-[13px_16px] bg-[#F0F9F4] border border-primary/20 rounded-xl text-text-main text-[0.9rem] font-main outline-none transition-[border-color] duration-300 ease-in-out box-border focus:border-primary" />
                    </div>
                    <div className="flex-1 min-w-[200px]">
                      <label className="block text-text-muted text-[0.85rem] font-semibold mb-2">{t('contact.phone')}</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="+20 1XX XXX XXXX" className="w-full p-[13px_16px] bg-[#F0F9F4] border border-primary/20 rounded-xl text-text-main text-[0.9rem] font-main outline-none transition-[border-color] duration-300 ease-in-out box-border focus:border-primary" dir="ltr" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-text-muted text-[0.85rem] font-semibold mb-2">{t('contact.email')}</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" className="w-full p-[13px_16px] bg-[#F0F9F4] border border-primary/20 rounded-xl text-text-main text-[0.9rem] font-main outline-none transition-[border-color] duration-300 ease-in-out box-border focus:border-primary" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-text-muted text-[0.85rem] font-semibold mb-2">{t('contact.service')}</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full p-[13px_16px] bg-[#F0F9F4] border border-primary/20 rounded-xl text-text-main text-[0.9rem] font-main outline-none transition-[border-color] duration-300 ease-in-out box-border focus:border-primary appearance-none">
                      <option value="">{t('contact.service_select')}</option>
                      <option>{t('services.s1_title')}</option>
                      <option>{t('services.s2_title')}</option>
                      <option>{t('services.s3_title')}</option>
                      <option>{t('services.s4_title')}</option>
                      <option>{t('contact.service_s5')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-muted text-[0.85rem] font-semibold mb-2">{t('contact.message')}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="..." className="w-full p-[13px_16px] bg-[#F0F9F4] border border-primary/20 rounded-xl text-text-main text-[0.9rem] font-main outline-none transition-[border-color] duration-300 ease-in-out box-border focus:border-primary min-h-[120px] resize-y" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full p-3.75 bg-gradient-to-br from-primary-light to-primary-dark text-white border-none rounded-xl text-base font-bold cursor-pointer font-main transition-all duration-300 mt-1 hover:brightness-110">
                    {loading ? (
                      <span className="flex items-center gap-2 justify-center">
                        <span className="animate-spin inline-block">⟳</span>
                        {t('contact.sending')}
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 justify-center">
                        <FiSend size={18} />
                        {t('contact.submit')}
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="reveal-left flex flex-col gap-5">

            {/* Direct Contact */}
            <div className="bg-white border border-primary/15 rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <h3 className="text-text-main font-bold mb-5 text-base">
                {t('contact.direct')}
              </h3>
              {[
                { icon: <FaWhatsapp size={22} color="#25D366" />, label: t('contact.label_whatsapp'), value: '+20 1095854066', href: 'https://wa.me/201095854066', highlight: true },
                { icon: <FiPhone size={20} color="var(--primary)" />, label: t('contact.label_phone'), value: '+20 1095854066', href: 'tel:+201095854066' },
                { icon: <FiMail size={20} color="var(--primary)" />, label: t('contact.label_email'), value: 'info@firstaqar.com', href: 'mailto:info@firstaqar.com' },
                { icon: <FiMapPin size={20} color="var(--primary)" />, label: t('contact.label_address'), value: t('contact.address_value'), href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3.5 rounded-xl border no-underline mb-2.5 transition-all duration-300 ${item.highlight ? 'bg-[#25D366]/8 border-[#25D366]/20' : 'bg-primary/4 border-primary/15'
                    } hover:scale-[1.02]`}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.78rem] text-text-dim mb-0.5">{item.label}</div>
                    <div className="text-[0.9rem] font-semibold text-text-main">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-white border border-primary/15 rounded-[20px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
              <h3 className="text-text-main font-bold mb-4 text-base">
                {t('contact.hours')}
              </h3>
              {[
                { day: t('contact.hours_day1'), time: t('contact.hours_time1') },
                { day: t('contact.hours_day2'), time: t('contact.hours_time2') },
              ].map((h, i) => (
                <div key={i} className={`flex justify-between items-center py-2.5 ${i === 0 ? 'border-b border-primary/15' : ''}`}>
                  <span className="text-text-muted text-[0.88rem]">{h.day}</span>
                  <span className="text-primary font-semibold text-[0.88rem]">{h.time}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp Quick */}
            <motion.a
              href="https://wa.me/201234567890?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 p-[18px_28px] bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] rounded-[16px] text-white no-underline font-main overflow-hidden"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: '0 20px 50px rgba(37,211,102,0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'linear'
                }}
              />

              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-[16px] border-2 border-white/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              <div className="relative flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, -15, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: 'easeInOut'
                  }}
                >
                  <FaWhatsapp size={26} />
                </motion.div>

                <div className="flex flex-col">
                  <motion.span
                    className="font-bold text-[1rem] leading-tight text-white"
                    whileHover={{ letterSpacing: '0.5px' }}
                    transition={{ duration: 0.2 }}
                  >
                    {t('contact.chat_now')}
                  </motion.span>
                  <motion.span
                    className="text-[0.75rem] opacity-90 font-medium text-white"
                    animate={{ opacity: [0.9, 1, 0.9] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    {t('contact.chat_sub')}
                  </motion.span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
