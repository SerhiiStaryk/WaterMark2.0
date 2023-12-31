/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

import { AppContext } from '../../../store/app-context';
import classes from './Draggable.module.css';

const Draggable = (
  {
    children,
    parentWidthInCm,
    parentHeightInCm,
  }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const { draggableSize } = useContext(AppContext);
  const { width, height } = draggableSize;

  const handleMouseDown = e => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = e => {
    if (isDragging) {
      const offsetX = e.clientX - startPosition.x;
      const offsetY = e.clientY - startPosition.y;

      // Calculate the new position in centimeters
      // Convert pixels to centimeters
      let newPositionX = position.x + (offsetX / 96) * width;
      // Convert pixels to centimeters
      let newPositionY = position.y + (offsetY / 96) * height;

      // Limit the X-coordinate within the parent width
      newPositionX = Math.max(0, Math.min(newPositionX, parentWidthInCm - width));
      // Limit the Y-coordinate within the parent height
      newPositionY = Math.max(0, Math.min(newPositionY, parentHeightInCm - height));

      setPosition({ x: newPositionX, y: newPositionY });
      setStartPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={classes.draggable}
      style={{
        top: `${position.y}cm`,
        left: `${position.x}cm`,
        width: `${draggableSize.width}cm`,
        height: `${draggableSize.height}cm`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default Draggable;
