import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFloat = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  // Position based on language direction
  const positionClasses = isRtl ? 'left-6 md:left-8' : 'right-6 md:right-8';

  return (
    <div className={`fixed bottom-6 md:bottom-8 z-[999] ${positionClasses} pointer-events-none`}>
      <motion.a
        href="https://wa.me/201095854066"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 overflow-visible"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        {/* Pulsing Outer Rings */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 pointer-events-none scale-110" />
        
        {/* Secondary glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25D366] to-[#075E54] opacity-50 blur-md -z-10 animate-pulse" />

        <FaWhatsapp className="w-8 h-8 md:w-9 md:h-9 relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
