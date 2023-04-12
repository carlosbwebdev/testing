import React from "react";
// import { motion } from "framer-motion";
import styles from "../styles/components/Opiniao.module.css";
// import Image from "next/image";
import Carousel from "../components/Carousel";
import Buggy from "../assets/homegallery/gallery1.jpg";

const ITEMS = [
  {
    id: 1,
    imageSrc: Buggy,
    name: "Nome 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia, nunc tortor aliquam nisl, eu aliquet nunc nisl eu ante.",
  },
  {
    id: 3,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia, nunc tortor aliquam nisl, eu aliquet nunc nisl eu ante.",
  },
  {
    id: 4,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia, nunc tortor aliquam nisl, eu aliquet nunc nisl eu ante.",
  },
  {
    id: 5,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia, nunc tortor aliquam nisl, eu aliquet nunc nisl eu ante.",
  },
  {
    id: 6,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia, nunc tortor aliquam nisl, eu aliquet nunc nisl eu ante.",
  },
  {
    id: 7,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia, nunc tortor aliquam nisl, eu aliquet nunc nisl eu ante.",
  },
  // adicione mais cards aqui
];
// console.log(ITEMS);
const Opiniao = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Experiências Fantásticas </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec ...
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Opiniao;
