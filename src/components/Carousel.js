// import "../styles/components/flickity.css";
import styles from "../styles/components/Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import Buggy from "../assets/homegallery/gallery1.jpg";

const ITEMS = [
  {
    id: 1,
    imageSrc: Buggy,
    name: "Nome 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    id: 2,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia,",
  },
  {
    id: 3,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia,",
  },
  {
    id: 4,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia,",
  },
  {
    id: 5,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia, ",
  },
  {
    id: 6,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia,",
  },
  {
    id: 7,
    imageSrc: Buggy,
    name: "Nome 2",
    text: "Pellentesque euismod, nisl vel tincidunt lacinia,",
  },
  // adicione mais cards aqui
];

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      // centeredSlides={true}
      className={styles.mySwiperCard}
    >
      {ITEMS?.map((item) => (
        <SwiperSlide key={item.id} className={styles.card}>
          <Image src={item.imageSrc} alt={item.name} />
          <p>{item.text}</p>
          <h5>{item.name}</h5>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
