// import "../styles/components/flickity.css";
import { useRef } from "react";
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

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={0}
      centeredSlides={true}
      className="mySwiper"
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
