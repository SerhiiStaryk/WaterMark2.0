import React, { useContext } from 'react';

import classes from './Page.module.css';

import watarmarkImg from '../../assets/watermark_small.png';
import { AppContext } from '../../store/app-context';

const Page = props => {
  const {
    state,
    children,
    imageSourse,
  } = props;

  const { showWatermark } = useContext(AppContext);

  const style = {
    background: `url(${watarmarkImg})`,
  };

  if (!showWatermark) {
    delete style.background;
  }

  return (
    <div
      className={classes.page}
      style={{
        width: `${state.width}cm`,
        height: `${state.height}cm`,
        background: `no-repeat center/100% 100% url(${imageSourse})`,
      }}
    >
      <div
        className={classes.watermark}
        style={style}
      />
      {children}
    </div>
  );
};

export default Page;
