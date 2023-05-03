/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/components/ImageSlider.module.css";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [innerWidth, innerHeight]);
  return (
    <motion.div ref={carousel} className={styles.carousel}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.9}
        className={styles.carouselInner}
      >
        {images.map((image, index) => (
          <motion.div key={index}>
            <Image className={styles.item} alt="" src={image} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
