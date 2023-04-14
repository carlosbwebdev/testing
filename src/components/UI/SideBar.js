import React from "react";
import styles from "../../styles/components/UI/SideBar.module.css";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={` ${styles.sideBar} ${isOpen ? styles.showSidebar : ""} `}
    >
      <nav className={` ${isOpen ? styles.sideBarAnimation : ""}`}>
        <a href="">Home</a>
        <a href="">Passeios</a>
        <a href="">Contactos</a>
        <a href="">Reserva Já</a>
      </nav>
    </aside>
  );
};

export default SideBar;
