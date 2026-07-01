import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-brand relative overflow-hidden pt-[75px]">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-[radial-gradient(circle,_rgba(46,204,113,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="text-center relative z-1 p-[40px_24px]">
        {/* 404 Number */}
        <div className="text-[clamp(6rem,15vw,10rem)] font-black leading-none mb-2 flex justify-center gap-2">
          <span className="gradient-text">4</span>
          <span className="text-gold">0</span>
          <span className="gradient-text">4</span>
        </div>

        {/* Icon */}
        <div className="text-[3rem] mb-5 animate-[float_3s_ease-in-out_infinite] block">🏗️</div>

        {/* Text */}
        <h1 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-white mb-3">
          الصفحة غير موجودة
        </h1>
        <p className="text-text-muted text-base leading-[1.7] mb-9 max-w-[400px] mx-auto">
          يبدو أن هذه الصفحة غير موجودة أو تم نقلها. يمكنك العودة للصفحة الرئيسية.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/" className="btn-primary">
            <FiHome size={18} />
            <span>الصفحة الرئيسية</span>
          </Link>
          <Link to="/contact" className="btn-outline">
            <span>تواصل معنا</span>
            <FiArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
