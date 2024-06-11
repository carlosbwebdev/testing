import React, { useContext } from "react";
import { motion } from "framer-motion";
import VimeoVideo from "@/components/VimeoVideo";
import { LanguageContext } from "@/context/LanguageContext";

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

  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.section}>
      <motion.div className={styles.gallery__header}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.4 }}
          variants={variants}
          className={styles.gallery__header__title}
        >
          <h2>
            {language === "pt" ? "Experiência Única" : "Unique Experience"}
          </h2>
        </motion.div>
      </motion.div>
      <VimeoVideo videoId={823393167} />
    </section>
  );
};

export default Servicos;
