import React, { useContext } from "react";
import styles from "../../styles/components/UI/SideBar.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { LanguageContext } from "../../context/LanguageContext";
import translations from "../../utils/translations";

const SideBar = ({ isOpen }) => {
  const { language } = useContext(LanguageContext);
  const { home, tours, contacts, reserve } = translations[language];

  return (
    <aside
      className={` ${styles.sideBar} ${isOpen ? styles.showSidebar : ""} `}
    >
      <nav className={` ${isOpen ? styles.sideBarAnimation : ""}`}>
        <Link href="/">{home}</Link>
        <Link href="/passeios">{tours}</Link>
        <Link href="/contactos">{contacts}</Link>
        <Link href="/passeios">{reserve}</Link>
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
