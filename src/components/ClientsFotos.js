import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/components/ClientsFotos.module.css";

const ClientsFotos = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__img}>
          <motion.img
            src="/clients/1.jpg"
            alt="clients"
            className={styles.img}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsFotos;
