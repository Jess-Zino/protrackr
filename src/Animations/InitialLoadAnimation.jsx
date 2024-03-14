import  { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import propTypes from 'prop-types';
const InitialLoadAnimation = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation when the component mounts
    controls.start({ opacity: 1, y: 0, transition: { duration: 2, ease: 'easeInOut' } }); // Adjust duration as needed

    // Clear the timeout on component unmount
    return () => controls.stop();
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0, y: '-20%' }} animate={controls}>
      {isVisible && children}
    </motion.div>
  );
};

export default InitialLoadAnimation;
InitialLoadAnimation.prototype ={
    children:propTypes.object
}