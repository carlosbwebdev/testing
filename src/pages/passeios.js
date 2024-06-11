import React, { useState, useContext, useEffect } from "react";
import styles from "../styles/pages/passeios.module.css";
import Layout from "@/components/UI/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { LanguageContext } from "../context/LanguageContext";
import translations from "@/utils/translations";

import ModalReserve from "@/components/ModalReserve";
import { DataPT } from "../constants/PasseiosComplPT";
import { DataEN } from "../constants/PasseiosComplEN";

const Passeios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPasseio, setSelectedPasseio] = useState(null);

  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(language === "pt" ? DataPT : DataEN);

  // Atualize os dados quando o idioma mudar
  useEffect(() => {
    setData(language === "pt" ? DataPT : DataEN);
  }, [language]);

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

  const { passeiosTitle, passeiosDescription, schedule } =
    translations[language];

  console.log(language);

  return (
    <div>
      <Layout>
        <Head>
          <title>
            {language === "pt"
              ? "Passeios | GoBuggy Arcos"
              : "Tours | GoBuggy Arcos"}
          </title>
          <meta name="description" content="Passeios | GoBuggy Arcos website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ModalReserve
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          passeio={selectedPasseio}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className={styles.passeiosPage}>
            <div className={styles.title}>
              <h1>{passeiosTitle}</h1>
              <p>{passeiosDescription}</p>
            </div>
            <div className={styles.passeio}>
              {data.length > 0 &&
                data.map((passeio) => (
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
                        <p>{passeio.price}/buggy</p>
                        <p>{passeio.duration}</p>
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
        </motion.div>
      </Layout>
    </div>
  );
};

export default Passeios;
