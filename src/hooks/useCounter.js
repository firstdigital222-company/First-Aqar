import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter hook - counts from 0 to target when element enters viewport
 * @param {number} target - The number to count up to
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Suffix to append (e.g., '+', '%')
 */
const useCounter = (target, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing function: easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref, display: `${count}${suffix}` };
};

export default useCounter;
