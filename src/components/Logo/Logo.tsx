import { Link } from 'react-router-dom';
import logo from '../../assets/logo_baros.png';
import styles from './Logo.module.scss';

export const Logo = () => (
  <Link to={'/'} className={styles.logo}>
    <img src={logo} alt={'logo'} className={styles.image} />
    <span className={styles.text}>BarOS</span>
  </Link>
);
