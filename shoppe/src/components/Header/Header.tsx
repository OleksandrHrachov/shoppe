import { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import search from "../../assets/search.png";
import basket from "../../assets/basket.png";
import profile from "../../assets/profile.png";
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <img className={styles.logo} src={logo} alt="SHOPPE" />
      </div>
      <nav className={styles.nav}>
        <div className={styles.navFirst}>
          <NavLink className={styles.navText} to="/">
            Shop
          </NavLink>
          <NavLink className={styles.navText} to="/blog">
            Blog
          </NavLink>
          <NavLink className={styles.navText} to="/story">
            Our Story
          </NavLink>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.navSecond}>
          <NavLink className={styles.navImg} to="/search">
            <img src={search} alt="SHOPPE" />
          </NavLink>
          <NavLink className={styles.navImg} to="/basket">
            <img src={basket} alt="SHOPPE" />
          </NavLink>
          <NavLink className={styles.navImg} to="/profile">
            <img src={profile} alt="SHOPPE" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
