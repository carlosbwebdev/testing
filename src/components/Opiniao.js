import React, { useContext } from "react";
import styles from "../styles/components/Opiniao.module.css";
import { LanguageContext } from "../context/LanguageContext"; // Importar o contexto do idioma
import translations from "../utils/translations"; // Importar as traduções
import Carousel from "../components/Carousel";

const Opiniao = () => {
  const { language } = useContext(LanguageContext); // Consumir o contexto do idioma
  const { opiniaoTitle, opiniaoDescription } = translations[language]; // Obter as traduções com base no idioma

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>{opiniaoTitle}</h2>
        <p>{opiniaoDescription}</p>
      </div>
      {/* <Carousel /> */}
    </div>
  );
};

export default Opiniao;
