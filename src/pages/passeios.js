import React, { useState } from "react";
import styles from "../styles/pages/passeios.module.css";
import Layout from "@/components/UI/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import passeioImg1 from "../assets/passeios/passeio4.jpg";
import passeioImg2 from "../assets/passeios/passeio2.jpg";
import passeioImg3 from "../assets/passeios/passeio3.jpg";
import passeioImg4 from "../assets/passeios/passeio4.jpg";
import passeioImg5 from "../assets/passeios/passeio5.jpg";
import ModalReserve from "@/components/ModalReserve";

export const Data = [
  {
    title: "Básico",
    description:
      "Passeio realizado maioritariamente fora de estrada. Inicia nas nossas instalações e o percurso é realizado nas encostas de Arcos de Valdevez onde podem apreciar as lindas paisagens da nossa vila. Introdução á experiência de condução de Buggy.",
    image: passeioImg1,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "35€",
    duration: "40min",
    id: 1,
  },
  {
    title: "Por Maus Caminhos",
    description:
      "Inicia nas nossas instalações e o percurso é nas encostas de Arcos de Valdevez onde podem apreciar as lindas paisagens da nossa vila.Passeio bastante técnico.",
    image: passeioImg3,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "50€",
    duration: "60min",
    id: 2,
  },
  {
    title: "Baloiço Do Mezio",
    description:
      "Passeio com alguma dificuldade. Onde o cliente aprecia a Natureza, animais selvagens e pode ir baloiçar no maior baloiço de Portugal. Passa no alto do Gião, onde se pode obter uma panorâmica de 360º e onde consegue observar o mar em Viana do Castelo, a Serra de Santa Eufémia em Espanha.",
    image: passeioImg4,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "80€",
    duration: "100min",
    id: 3,
  },
  {
    title: "Do Lima Ao Gião",
    description:
      "Passeio de dificuldade média (55Km) Onde é possível aproveitar as paisagens adjacentes ao rio Lima (Ermelo, S.Jorge). Sendo a parte final do percurso mais rápido e radical.",
    image: passeioImg5,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "110€",
    duration: "150min",
    id: 4,
  },
  {
    title: "Longa Distância",
    description:
      "Passa nas imediações do PNPG tendo uma passagem próxima do Fojo da Cabrita, Lagoas da travanca, Cabreiro, Gondoriz. Apreciar a Natureza, paisagem e é um passeio radical, num total de 70 Km.",
    image: passeioImg2,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "140€",
    duration: "180min",
    id: 5,
  },
  {
    title: "O Dia Todo",
    description:
      "Imagina um dia inteiro 120 km de percurso maioritariamente fora de estrada, com paisagens espetaculares, percursos fora do comum, num ambiente de aventura. Inclui almoço em restaurante típico, ou seja, comida tradicional aliada às nossas paisagens típicas. Uma experiência brutal…",
    image: passeioImg4,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "A combinar",
    duration: "Dia Inteiro",
    id: 6,
  },
];

const Passeios = () => {
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

  return (
    <div>
      <Head>
        <title>Passeios | GoBuggy Arcos </title>
        <meta name="description" content="Passeios | GoBuggy Arcos website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
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
          className={styles.passeiosPage}
          <div className={styles.title}>
            <h1>Passeios</h1>
            <p>
              Descubra a beleza natural e a riqueza cultural de Arcos de
              Valdevez enquanto explora as deslumbrantes montanhas a bordo dos
              nossos buggies confortáveis e seguros.
            </p>
          </div>
          <div className={styles.passeio}>
            {Data.map((passeio) => (
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
                      Reservar
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Passeios;
