import React from "react";
import styles from "../styles/components/Opiniao.module.css";
import Carousel from "../components/Carousel";

const Opiniao = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Experiências Fantásticas </h2>
        <p>
          Explore as aventuras vividas pelos nossos clientes através do nosso
          slider de fotos! Esta galeria apresenta momentos incríveis capturados
          pelos entusiastas dos nossos passeios de buggy em Arcos de Valdevez.
          Deixe-se inspirar pelas suas histórias e embarque na sua própria
          aventura connosco!
        </p>
      </div>
      {/* <Carousel /> */}
    </div>
  );
};

export default Opiniao;
