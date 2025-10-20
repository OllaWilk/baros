import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { NAV_ITEMS } from '../../utils/nav';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        {NAV_ITEMS.map((el) => (
          <li key={el.key}>
            <NavLink
              to={el.to}
              end={el.end}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              {el.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
