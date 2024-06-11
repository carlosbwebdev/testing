import Head from "next/head";
import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import HomeGallery from "@/components/HomeGallery";
import Map from "@/components/Map";
import Opiniao from "@/components/Opiniao";
import ReserveHome from "@/components/ReserveHome";
import Layout from "@/components/UI/Layout";
import HeroParallax from "@/components/HeroParallax";
import Servicos from "@/components/Servicos";
import Loader from "@/components/UI/Loader";
import SliderClientes from "@/components/SliderClientes";
import { LanguageContext } from "@/context/LanguageContext";

export default function Home() {
  const [animation, setAnimation] = useState(true);
  const [scroll, setScroll] = useState(false);

  const { language } = useContext(LanguageContext);

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
            <title>
              {language === "pt"
                ? "Página Inicial | GoBuggy Arcos"
                : "Home | GoBuggy Arcos"}{" "}
            </title>
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
