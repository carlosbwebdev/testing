import React from "react";
import Image from "next/image";
import Logo from "../../assets/logofinal.svg";
import styles from "../../styles/components/UI/nav.module.css";
const Navbar = ({ toggleSidebar, sideBarState }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navImg}>
          <Image
            src={Logo}
            alt="logo"
            onClick={() => {
              window.location.href = "/";
            }}
            loading="eager"
          />
        </div>
        <div
          onClick={toggleSidebar}
          className={`${
            !sideBarState ? styles.burgerMenuOpen : styles.burgerMenuClose
          }`}
        >
          <div className={styles.lineTop}></div>
          <div className={styles.lineMiddle}></div>
          <div className={styles.lineBottom}></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
