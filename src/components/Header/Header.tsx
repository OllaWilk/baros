import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  );
};
