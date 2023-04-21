import React from "react";
import styles from "../styles/pages/passeios.module.css";
import Layout from "@/components/UI/Layout";
import Image from "next/image";
import passeioImg1 from "../assets/passeios/passeio4.jpg";
import passeioImg2 from "../assets/passeios/passeio2.jpg";
import passeioImg3 from "../assets/passeios/passeio3.jpg";
import passeioImg4 from "../assets/passeios/passeio4.jpg";
import passeioImg5 from "../assets/passeios/passeio5.jpg";

const Data = [
  {
    title: "Tour de 40 minutos",
    description:
      "Passeio realizado maioritariamente fora de estrada. Inicia nas nossas instalações e o percurso é realizado nas encostas de Arcos de Valdevez onde podem apreciar as lindas paisagens da nossa vila. Introdução á experiência de condução de Buggy.",
    image: passeioImg1,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "35€",
    duration: "40min",
    id: 1,
  },
  {
    title: "Tour de 60 minutos",
    description:
      "Inicia nas nossas instalações e o percurso é nas encostas de Arcos de Valdevez onde podem apreciar as lindas paisagens da nossa vila.Passeio bastante técnico.",
    image: passeioImg3,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "50€",
    duration: "60min",
    id: 2,
  },
  {
    title: "Tour de 100 minutos",
    description:
      "Passeio com alguma dificuldade. Onde o cliente aprecia a Natureza, animais selvagens e pode ir baloiçar no maior baloiço de Portugal. Passa no alto do Gião, onde se pode obter uma panorâmica de 360º e onde consegue observar o mar em Viana do Castelo, a Serra de Santa Eufémia em Espanha. Pode também observar algumas gravuras rupestres.",
    image: passeioImg4,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "80€",
    duration: "100min",
    id: 3,
  },
  {
    title: "Tour de 150 minutos",
    description:
      "Passeio de dificuldade média (55Km) Onde é possível aproveitar as paisagens adjacentes ao rio Lima (Ermelo, S.Jorge). Sendo a parte final do percurso mais rápido e radical.",
    image: passeioImg5,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "110€",
    duration: "150min",
    id: 4,
  },
  {
    title: "Tour de 180 minutos",
    description:
      "Passa nas imediações do PNPG tendo uma passagem próxima do Fojo da Cabrita, Lagoas da travanca, Cabreiro, Gondoriz. Apreciar a Natureza, paisagem e é um passeio radical, num total de 70 Km.",
    image: passeioImg2,
    video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    price: "140€",
    duration: "180min",
    id: 5,
  },
];

const Passeios = () => {
  const limitString = (string, limit) => {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    }
    return string;
  };

  return (
    <div>
      <Layout>
        <div className={styles.passeiosPage}>
          <div className={styles.title}>
            <h1>Tours</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className={styles.passeio}>
            {Data.map((passeio) => (
              <div className={styles.passeioCard} key={passeio.id}>
                <div className={styles.passeioCardTop}>
                  <Image src={passeio.image} alt={passeio.title} />
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
                    <p>{passeio.price}</p>
                  </div>
                  <div className={styles.passeioCardReservar}>
                    <button>Reservar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Passeios;
