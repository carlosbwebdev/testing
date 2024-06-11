import React, { useEffect, useState } from "react";
import styles from "../../styles/components/UI/Loader.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Logo from "../../assets/logofinal.svg";

const phrases = [
  "Aventura",
  "Fun",
  "Nature",
  "Natureza",
  "Speed",
  "Diversão",
  "Sunset",
  "Velocidade",
  "Landscapes",
  "Ação",
  "Paisagens",
  "Adventure",
  "Pôr Do Sol",
];

const Loader = () => {
  const [index, setIndex] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setExitAnimation(true);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!exitAnimation && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className={styles.loaderBackground}
        >
          <motion.div
            className={styles.loader}
            initial={{ opacity: 1 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            exit={{
              y: "-100%",
              opacity: 1,
              transition: { duration: 1.2 },
            }}
          >
            <motion.div>
              <Image
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                loading="eager"
                priority
              />
            </motion.div>
            {/* <div className={styles.line}></div> */}
            <motion.div className={styles.loaderText}>
              {phrases[index]}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
