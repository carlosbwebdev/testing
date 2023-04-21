import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components/HeroParallax.module.css";
import Image from "next/image";

import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";

const HeroParallax = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [400, 0], [400, 0]);
  const y2 = useTransform(scrollY, [100, 0], [10, 80]);

  return (
    <motion.main className={styles.main}>
      <motion.div className={styles.heroBg} style={{ y: 0, x: 0 }}>
        <motion.div
          className={styles.heroTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ y: y1, x: 0 }}
        >
          <h1>Aventura</h1>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.heroMove}
        style={{ y: y2, x: 0 }}
      ></motion.div>
    </motion.main>
  );
};

export default HeroParallax;
