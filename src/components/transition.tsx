import React from 'react';
import { motion } from 'motion/react';

const Transition = (OgComponent: React.FC) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className='slide-in'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className='slide-out'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default Transition;
