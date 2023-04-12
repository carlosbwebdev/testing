import React from "react";
import { motion } from "framer-motion";
import VimeoVideo from "@/components/VimeoVideo";

import styles from "../styles/components/Servicos.module.css";
const Servicos = () => {
  const variants = {
    offscreen: {
      opacity: 0,
      // scale: 0.1,
    },
    onscreen: {
      opacity: 1,
      // scale: 1,

      transition: {
        type: "easeIn",
        stiffness: 100,
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <section className={styles.section}>
      <motion.div className={styles.gallery__header}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={variants}
          className={styles.gallery__header__title}
        >
          <h2>Experiência Única</h2>
        </motion.div>
      </motion.div>
      <VimeoVideo videoId={285779587} />
    </section>
  );
};

export default Servicos;
