import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import HomeGallery from "@/components/HomeGallery";
import withLoader from "@/components/UI/WithLoader";
import Map from "@/components/Map";
import Opiniao from "@/components/Opiniao";
import ReserveHome from "@/components/ReserveHome";
import Layout from "@/components/UI/Layout";
import HeroParallax from "@/components/HeroParallax";
import Servicos from "@/components/Servicos";
import Loader from "@/components/UI/Loader";
import SliderClientes from "@/components/SliderClientes";
import ImageSlider from "@/components/ImageSlider";
import ImagaOne from "../assets/modalmap/modal1.jpg";
import ImagaTwo from "../assets/modalmap/modal2.jpg";
import ImagaThree from "../assets/modalmap/modal3.jpg";
import ImagaFour from "../assets/modalmap/modal4.jpg";
import ImagaFive from "../assets/modalmap/modal5.jpg";
import ImagaSix from "../assets/modalmap/modal6.jpg";

const images = [ImagaOne, ImagaTwo, ImagaThree, ImagaFour, ImagaFive, ImagaSix];
export default function Home() {
  const [animation, setAnimation] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  //loader
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 4000);
  }, []);

  return !animation ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <motion.div>
          <Head>
            <title>Página Inicial | GoBuggy Arcos </title>
            <meta
              name="description"
              content="Pagina inicial GoBuggy Arcos website"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <HeroParallax />
          <Servicos />
          <HomeGallery />
          <Opiniao />
          <SliderClientes />
          {/* <ImageSlider images={images} /> */}
          <Map />
          <ReserveHome />
        </motion.div>
      </Layout>
    </motion.div>
  ) : (
    <Loader />
  );
}
