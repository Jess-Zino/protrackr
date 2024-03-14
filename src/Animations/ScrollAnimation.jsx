import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollAnimation = ({ children, id, threshold = 0.5, direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById(id);

      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        // Check if the element is in the viewport
        if (scrollY > elementTop - window.innerHeight + elementHeight * threshold && scrollY < elementTop + elementHeight * (1 - threshold)) {
          // Element is in the viewport
          if (!isVisible) {
            setIsVisible(true);
            controls.start({ opacity: 1, x: direction === 'left' ? 0 : direction === 'right' ? 0 : '0%', y: direction === 'top' ? 0 : direction === 'bottom' ? 0 : '0%' });
          }
        } else {
          // Element is out of the viewport
          if (isVisible) {
            setIsVisible(false);
            controls.start({
              opacity: 0,
              x: direction === 'left' ? '-20%' : direction === 'right' ? '20%' : '0%',
              y: direction === 'top' ? '-20%' : direction === 'bottom' ? '20%' : '0%',
            });
          }
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id, isVisible, controls, threshold, direction]);

  return (
    <motion.div id={id} initial={{ opacity: 0, x: direction === 'left' ? '-20%' : direction === 'right' ? '20%' : '0%', y: direction === 'top' ? '-20%' : direction === 'bottom' ? '20%' : '0%' }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
