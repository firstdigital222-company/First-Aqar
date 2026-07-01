import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-reveal animations using IntersectionObserver.
 * @param {string} selector - CSS selector for elements to observe (default: '.reveal, .reveal-left, .reveal-right, .reveal-scale')
 * @param {object} options - IntersectionObserver options
 */
const useScrollReveal = (selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale', options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, defaultOptions);

    const root = containerRef.current || document;
    const elements = root.querySelectorAll ? root.querySelectorAll(selector) : document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);

  return containerRef;
};

export default useScrollReveal;
