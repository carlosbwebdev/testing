import React from "react";
import styles from "../styles/components/SliderClients.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import ImagaOne from "../assets/modalmap/modal1.jpg";
import ImagaTwo from "../assets/modalmap/modal2.jpg";
import ImagaThree from "../assets/modalmap/modal3.jpg";
import ImagaFour from "../assets/modalmap/modal4.jpg";
import ImagaFive from "../assets/modalmap/modal5.jpg";
import ImagaSix from "../assets/modalmap/modal6.jpg";

const images = [
  { id: 1, url: ImagaOne },
  { id: 2, url: ImagaTwo },
  { id: 3, url: ImagaThree },
  { id: 4, url: ImagaFour },
  { id: 5, url: ImagaFive },
  { id: 6, url: ImagaSix },
];

const SliderClientes = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // centeredSlides={true}
        className={styles.mySwiper}
      >
        {images?.map((item) => (
          <SwiperSlide key={item.id} className={styles.slider}>
            <Image src={item.url} alt={""} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderClientes;
