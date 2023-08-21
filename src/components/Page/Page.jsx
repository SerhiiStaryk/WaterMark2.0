import classes from './Page.module.css';

const Page = ({ state, children, imageSourse }) => (
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

export default Page;