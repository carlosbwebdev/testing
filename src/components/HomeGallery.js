import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import styles from "../styles/components/HomeGallery.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

import Gallery__item__1 from "../assets/homegallery/gallery1.jpg";
import Gallery__item__2 from "../assets/homegallery/gallery2.jpg";

const HomeGallery = () => {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  const variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "easeIn",
        stiffness: 100,
        duration: 0.7,
        delay: 0.2,
      },
    },
  };
  const variantsBottom = {
    offscreen: {
      opacity: 0,

      y: 100,
    },
    onscreen: {
      opacity: 1,
      // y: 10,
      y: 0,

      transition: {
        type: "easeIn",
        stiffness: 100,
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <div>
      <section className={styles.gallery}>
        <motion.div className={styles.gallery__header}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
            className={styles.gallery__header__title}
          >
            <h2>Divertimento</h2>
            <p>
              Os nossos passeios turisticos são uma forma divertida de conhecer
              a natureza.
            </p>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={variants}
            className={styles.gallery__header__right}
          >
            <div className={styles.gallery__header__right__link}>
              <div className={styles.gallery__header__right__link}>
                <Icon icon="mdi:map-search-outline" width="24" />
                <p>Ver todos os passeios</p>
              </div>
            </div>
            <div className={styles.gallery__header__right__link}>
              <Icon icon="material-symbols:calendar-month-outline" width="24" />
              <p>Agendar</p>
            </div>
          </motion.div>
        </motion.div>
        <div className={styles.gallery__container}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={variantsBottom}
            className={`${styles.gallery__item} ${
              isHovering1
                ? styles.gallery__item__text
                : styles.gallery__item__text__hide
            }`}
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
          >
            <div className={styles.gallery__item__img}>
              <Image src={Gallery__item__1} alt="gallery1" />
            </div>
            <div>
              <h3>Logo</h3>
              <p>Descricao do passeio</p>
            </div>
          </motion.div>
          {/* ============== Item 2 ============= */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={variantsBottom}
            className={`${styles.gallery__item} ${
              isHovering2
                ? styles.gallery__item__text
                : styles.gallery__item__text__hide
            }`}
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
          >
            <div className={styles.gallery__item__img}>
              <Image src={Gallery__item__2} alt="gallery1" />
            </div>
            <div>
              <h3>Logo</h3>
              <p>Descricao do passeio</p>
            </div>
          </motion.div>
          {/* ============== Item 3 ============= */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={variantsBottom}
            className={`${styles.gallery__item} ${
              isHovering3
                ? styles.gallery__item__text
                : styles.gallery__item__text__hide
            }`}
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
          >
            <div className={styles.gallery__item__img}>
              <Image src={Gallery__item__1} alt="gallery1" />
            </div>
            <div>
              <h3>Logo</h3>
              <p>Descricao do passeio</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeGallery;
