import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import propTypes from 'prop-types';

const LoadAnimation = ({ children, direction = 'top' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation when the component mounts
    const animation = {
      opacity: 1,
      transition: { duration: 2, ease: 'easeInOut' }, // Adjust duration as needed
    };

    switch (direction) {
      case 'top':
        animation.y = 0;
        break;
      case 'bottom':
        animation.y = '100%';
        break;
      case 'left':
        animation.x = 0;
        break;
      case 'right':
        animation.x = '100%';
        break;
      default:
        animation.y = 0;
    }

    controls.start(animation);

    // Clear the timeout on component unmount
    return () => controls.stop();
  }, [controls, direction]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      {isVisible && children}
    </motion.div>
  );
};

LoadAnimation.propTypes = {
  children: propTypes.object,
  direction: propTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

export default LoadAnimation;
