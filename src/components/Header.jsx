import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/components/_header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logoKasa} src='/logo-header.svg' alt='logo Kasa' />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
