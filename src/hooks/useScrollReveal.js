import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Custom hook for scroll-reveal animations using IntersectionObserver.
 * @param {string} selector - CSS selector for elements to observe (default: '.reveal, .reveal-left, .reveal-right, .reveal-scale')
 * @param {object} options - IntersectionObserver options
 */
const useScrollReveal = (selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale', options = {}) => {
  const containerRef = useRef(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const defaultOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
      ...options,
    };

    const root = containerRef.current || document;
    const getElements = () =>
      root.querySelectorAll ? root.querySelectorAll(selector) : document.querySelectorAll(selector);

    const markInViewport = () => {
      const els = getElements();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport or partially visible
        if (rect.top < viewportHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
    };

    // Immediately mark elements that are already in viewport
    markInViewport();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, defaultOptions);

    const elements = getElements();
    elements.forEach((el) => observer.observe(el));

    // Handle React re-renders and language/direction flips
    const t1 = setTimeout(markInViewport, 50);
    const t2 = setTimeout(markInViewport, 250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [selector, i18n.language]);

  return containerRef;
};

export default useScrollReveal;
