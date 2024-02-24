import React, { useContext, useRef } from 'react';
import { motion } from 'framer-motion';

import { AppContext } from '../../../store/app-context';

import classes from './Draggable.module.css';

const Draggable = ({ children, parentWidthInCm, parentHeightInCm }) => {
  const { draggableSize } = useContext(AppContext);

  const constraintsRef = useRef();

  return (
    <motion.div
      ref={constraintsRef}
      style={{
        height: `${parentHeightInCm}cm`,
        overflow: 'hidden',
        width: `${parentWidthInCm}cm`
      }}
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className={classes.draggable}
        style={{
          height: `${draggableSize.height}cm`,
          width: `${draggableSize.width}cm`
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Draggable;
