import React, { useContext } from "react";
import Image from "next/image";
import Logo from "../../assets/logofinal.svg";
import styles from "../../styles/components/UI/nav.module.css";
import { LanguageContext } from "../../context/LanguageContext";

const Navbar = ({ toggleSidebar, sideBarState }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  console.log(language); // Adicione esta linha para verificar o idioma atual no console

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
            priority
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button onClick={toggleLanguage} className={styles.language}>
            {language === "pt" ? "EN" : "PT"}
          </button>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
