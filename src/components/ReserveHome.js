import React from "react";
import styles from "../styles/components/ReserveHome.module.css";

const ReserveHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerCenter}>
        <h4>Reserve sua viagem</h4>
        <p>
          Não perca a oportunidade de viver uma experiência inesquecível nas
          montanhas de Arcos de Valdevez. Garanta já o seu lugar num dos nossos
          emocionantes passeios de buggy! Faça a sua reserva connosco!
        </p>
        <button
          onClick={() => {
            window.location.href = "/passeios";
          }}
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

export default ReserveHome;
