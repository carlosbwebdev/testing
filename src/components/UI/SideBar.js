import React from "react";
import styles from "../../styles/components/UI/SideBar.module.css";
import Link from "next/link";

const SideBar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={` ${styles.sideBar} ${isOpen ? styles.showSidebar : ""} `}
    >
      <nav className={` ${isOpen ? styles.sideBarAnimation : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/passeios">Passeios</Link>
        <Link href="/contactos">Contactos</Link>
        <Link href="#">Reserva Já</Link>
      </nav>
    </aside>
  );
};

export default SideBar;
