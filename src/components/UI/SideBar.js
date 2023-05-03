import React from "react";
import styles from "../../styles/components/UI/SideBar.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";

const SideBar = ({ isOpen }) => {
  return (
    <aside
      className={` ${styles.sideBar} ${isOpen ? styles.showSidebar : ""} `}
    >
      <nav className={` ${isOpen ? styles.sideBarAnimation : ""}`}>
        <Link href="/">Início</Link>
        <Link href="/passeios">Passeios</Link>
        <Link href="/contactos">Contactos</Link>
        <Link href="/passeios">Reserva Já</Link>
      </nav>
      <div className={`${isOpen ? styles.sidebarSocial : ""}`}>
        <Link href="https://www.facebook.com/">
          <Icon icon="entypo-social:facebook-with-circle" />
        </Link>
        <Link href="https://www.instagram.com/">
          <Icon icon="entypo-social:instagram-with-circle" />
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
