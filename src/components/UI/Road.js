import React from "react";
import styles from "../../styles/components/UI/Road.module.css";

const Road = () => {
  const lines = Array(10)
    .fill()
    .map((_, index) => (
      <div
        key={index}
        className={styles.line}
        style={{ left: `${index * 20}%` }}
      ></div>
    ));

  return <div className={styles.road}>{lines}</div>;
};

export default Road;
