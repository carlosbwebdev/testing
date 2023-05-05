import React, { useEffect, useState, useRef } from "react";
import styles from "../../styles/components/UI/CustomCursor.module.css";

import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentPhrase, setCurrentPhrase] = useState("Roda a roda!");

  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${position.x}px`;
      cursorRef.current.style.top = `${position.y}px`;
    }
  }, [position]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // console.log(scrollY, position);

      if (scrollY < 100) {
        setCurrentPhrase("Roda a roda!");
      } else if (scrollY >= 300 && scrollY < 1300) {
        setCurrentPhrase("");
      } else if (scrollY >= 1800 && scrollY < 2500) {
        setCurrentPhrase("Aventura-te");
      } else if (scrollY >= 3600 && scrollY < 4200) {
        setCurrentPhrase("Magia");
      } else {
        setCurrentPhrase("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 5 }}
      ref={cursorRef}
      className={styles.customCursor}
    >
      <div className={styles.cursorText}>{currentPhrase}</div>
    </motion.div>
  );
};

export default CustomCursor;
