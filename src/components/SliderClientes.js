import React from "react";
import styles from "../styles/components/SliderClients.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import Imagem1 from "../assets/slider/sliderfoto-1.jpg";
import Imagem2 from "../assets/slider/sliderfoto-2.jpg";
import Imagem3 from "../assets/slider/sliderfoto-3.jpg";
import Imagem4 from "../assets/slider/sliderfoto-4.jpg";
import Imagem5 from "../assets/slider/sliderfoto-5.jpg";
import Imagem6 from "../assets/slider/sliderfoto-6.jpg";
import Imagem7 from "../assets/slider/sliderfoto-7.jpg";
import Imagem8 from "../assets/slider/sliderfoto-8.jpg";
import Imagem9 from "../assets/slider/sliderfoto-9.jpg";
import Imagem10 from "../assets/slider/sliderfoto-10.jpg";
import Imagem11 from "../assets/slider/sliderfoto-11.jpg";
import Imagem12 from "../assets/slider/sliderfoto-12.jpg";
import Imagem13 from "../assets/slider/sliderfoto-13.jpg";
import Imagem14 from "../assets/slider/sliderfoto-14.jpg";
import Imagem15 from "../assets/slider/sliderfoto-15.jpg";
import Imagem16 from "../assets/slider/sliderfoto-16.jpg";
import Imagem17 from "../assets/slider/sliderfoto-17.jpg";
import Imagem18 from "../assets/slider/sliderfoto-18.jpg";
import Imagem19 from "../assets/slider/sliderfoto-19.jpg";
import Imagem20 from "../assets/slider/sliderfoto-20.jpg";
import Imagem21 from "../assets/slider/sliderfoto-21.jpg";
import Imagem22 from "../assets/slider/sliderfoto-22.jpg";
import Imagem23 from "../assets/slider/sliderfoto-23.jpg";
import Imagem24 from "../assets/slider/sliderfoto-24.jpg";

const SliderImages = [
  { id: 1, url: Imagem1 },
  { id: 2, url: Imagem2 },
  { id: 3, url: Imagem3 },
  { id: 4, url: Imagem4 },
  { id: 5, url: Imagem5 },
  { id: 6, url: Imagem6 },
  { id: 7, url: Imagem7 },
  { id: 8, url: Imagem8 },
  { id: 9, url: Imagem9 },
  { id: 10, url: Imagem10 },
  { id: 11, url: Imagem11 },
  { id: 12, url: Imagem12 },
  { id: 13, url: Imagem13 },
  { id: 14, url: Imagem14 },
  { id: 15, url: Imagem15 },
  { id: 16, url: Imagem16 },
  { id: 17, url: Imagem17 },
  { id: 18, url: Imagem18 },
  { id: 19, url: Imagem19 },
  { id: 20, url: Imagem20 },
  { id: 21, url: Imagem21 },
  { id: 22, url: Imagem22 },
  { id: 23, url: Imagem23 },
  { id: 24, url: Imagem24 },
];

const SliderClientes = () => {
  return (
    <div>
      <Swiper
        // spaceBetween={30}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={20}
        centeredSlides={true}
        className={styles.mySwiper}
      >
        {SliderImages?.map((item) => (
          <SwiperSlide key={item.id} className={styles.slider}>
            <Image src={item.url} alt={""} loading="eager" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderClientes;
