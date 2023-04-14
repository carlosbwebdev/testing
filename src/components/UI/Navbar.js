import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import styles from "../../styles/components/UI/nav.module.css";
import { motion } from "framer-motion";
const Navbar = ({ toggleSidebar, sideBarState }) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.7 }}
      className={styles.header}
    >
      <nav className={styles.nav}>
        <div className={styles.navImg}>
          <Image src={Logo} alt="logo" />
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
    </motion.header>
  );
};

export default Navbar;
