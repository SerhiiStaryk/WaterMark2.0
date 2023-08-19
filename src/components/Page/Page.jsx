import classes from './Page.module.css';
import { useState } from 'react';

const Page = ({ state, children }) => {
  const [imageSourse, setImageSrc] = useState('')
  // console.log(imageSourse)

  const changeBackgroundHandler =  (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImageSrc(url)
  }

  console.log('page state:', state);

  return (
    <>
      <div
        className={classes.page}
        style={{
          width: `${state.width}cm`,
          height: `${state.height}cm`,
          background: `no-repeat center/100% 100% url(${imageSourse})`,
        }}
      >
        <div className={classes.watermark} />
        {children}
      </div>
    </>
  );
}

export default Page;