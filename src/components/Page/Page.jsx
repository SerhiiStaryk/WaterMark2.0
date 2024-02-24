import React, { useContext } from 'react';

import classes from './Page.module.css';

import { AppContext } from '../../store/app-context';
import watarmarkImg from '../../assets/watermark_small.png';

const Page = ({ children }) => {
  const { pageSize, imageSourse, showWatermark } = useContext(AppContext);

  const { width, height } = pageSize.value;

  const style = {
    background: `url(${watarmarkImg})`
  };

  if (!showWatermark) {
    delete style.background;
  }

  return (
    <div
      className={classes.page}
      style={{
        width: `${width}cm`,
        height: `${height}cm`,
        background: `no-repeat center/100% 100% url(${imageSourse})`
      }}
    >
      <div
        style={style}
        className={classes.watermark}
      />
      {children}
    </div>
  );
};

export default Page;
