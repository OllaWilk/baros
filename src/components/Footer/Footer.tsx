import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="https://linkedin.com/in/alex-wilk">Hi, I'm Alex and checkout my portfolio </Link>
    </footer>
  );
};
