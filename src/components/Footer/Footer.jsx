import classes from './Footer.module.css';

const Footer = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  return (
    <footer className={classes.footer}>© {year} Developed by Serhii Staryk</footer >
  );
}

export default Footer;