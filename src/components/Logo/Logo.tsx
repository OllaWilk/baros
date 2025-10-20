import logo from '../../assets/logo_baros.png';
import styles from './Logo.module.scss';

export const Logo = () => (
  <div className={styles.logo}>
    <img src={logo} alt={'logo'} className={styles.image} />
    <span className={styles.text}>BarOS</span>
  </div>
);
