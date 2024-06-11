import React, { useState, useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/components/HomeGallery.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Data } from "../constants/PASSEIOS";
import { DataEN } from "../constants/PASSEIOS_ENG";
import ModalReserve from "./ModalReserve";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../utils/translations";

const HomeGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPasseio, setSelectedPasseio] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const constants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const limitString = (string, limit) => {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    }
    return string;
  };

  const { language } = useContext(LanguageContext);
  const { galleryHeader, galleryDescription, viewAllTours, schedule } =
    translations[language];

  const data = language === "pt" ? Data : DataEN;

  return (
    <div>
      <ModalReserve
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        passeio={selectedPasseio}
      />
      <section className={styles.gallery}>
        <motion.div className={styles.gallery__header}>
          <motion.div className={styles.gallery__header__title}>
            <h2>{galleryHeader}</h2>
            <p>{galleryDescription}</p>
          </motion.div>

          <motion.div className={styles.gallery__header__right}>
            <div className={styles.gallery__header__right__link}>
              <div className={styles.gallery__header__right__link}>
                <Icon icon="mdi:map-search-outline" width="24" />
                <Link href="/passeios">{viewAllTours}</Link>
              </div>
            </div>
            <div className={styles.gallery__header__right__link}>
              <Icon icon="material-symbols:calendar-month-outline" width="24" />
              <p onClick={handleOpenModal}>{schedule}</p>
            </div>
          </motion.div>
        </motion.div>
        <div className={styles.gallery__container}>
          <div className={styles.passeio}>
            {data?.slice(0, 3).map((passeio) => (
              <motion.div
                variants={constants}
                initial="hidden"
                whileInView="visible"
                className={styles.passeioCard}
                key={passeio.id}
              >
                <div className={styles.passeioCardTop}>
                  <Image
                    src={passeio.image}
                    alt={passeio.title}
                    loading="eager"
                  />
                </div>
                <div className={styles.passeioCardMiddle}>
                  <div className={styles.passeioCardTitle}>
                    <h3>{passeio.title}</h3>
                  </div>
                  <div className={styles.passeioCardDescription}>
                    <p>{limitString(passeio.description, 380)}</p>
                  </div>
                </div>
                <div className={styles.passeioCardBottom}>
                  <div className={styles.passeioCardPrice}>
                    <p>{passeio.price}</p>/<p>{passeio.duration}</p>
                  </div>
                  <div className={styles.passeioCardReservar}>
                    <button
                      onClick={() => {
                        handleOpenModal();
                        setSelectedPasseio(passeio.title);
                      }}
                    >
                      {schedule}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeGallery;
