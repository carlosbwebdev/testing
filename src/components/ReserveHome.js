import React, { useContext } from "react";
import styles from "../styles/components/ReserveHome.module.css";
import { LanguageContext } from "../context/LanguageContext"; // Importar o contexto do idioma
import translations from "../utils/translations"; // Importar as traduções

const ReserveHome = () => {
  const { language } = useContext(LanguageContext); // Consumir o contexto do idioma
  const { reserveHomeTitle, reserveHomeDescription } = translations[language]; // Obter as traduções com base no idioma

  return (
    <div className={styles.container}>
      <div className={styles.containerCenter}>
        <h4>{reserveHomeTitle}</h4>
        <p>{reserveHomeDescription}</p>
        <button
          onClick={() => {
            window.location.href = "/passeios";
          }}
        >
          {translations[language].reserveNow}
        </button>
      </div>
    </div>
  );
};

export default ReserveHome;
