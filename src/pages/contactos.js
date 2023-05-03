import Layout from "@/components/UI/Layout";
import React from "react";
import styles from "../styles/pages/contactos.module.css";
import Head from "next/head";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Contactos = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Contactos | GoBuggy Arcos </title>
          <meta
            name="description"
            content="Contactos | GoBuggy Arcos website"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={styles.contactosPage}
        >
          <div className={styles.title}>
            <h1>Contactos</h1>
            <p>
              Entre em contacto connosco para esclarecer dúvidas, obter
              informações adicionais ou agendar o seu passeio de buggy em Arcos
              de Valdevez. Estamos à disposição para ajudá-lo a planear a sua
              aventura e garantir que tenha uma experiência memorável.
            </p>
          </div>

          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="Telefone">Telefone</label>
              <input type="text" name="Telefone" id="Telefone" />
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Enviar</button>
            </div>
            <div className={styles.info}>
              <h2>Informações de contacto</h2>
              <p>
                <strong>Endereço: </strong>
                <a href="https://www.google.com/maps?q=41.86496387475182, -8.385042275378403">
                  Caminho de Nunide Nº86 4970-071 Arcos de Valdevez
                </a>
                <br />
                <strong>Telefone:</strong>{" "}
                <a href="tel:+351 934 142 058">+351 934 142 058</a> <br />
                <strong>Email: </strong>
                <a
                  href="mailto:gobuggyarcos@gmail.com"
                  className={styles.email}
                >
                  gobuggyarcos@gmail.com
                </a>
              </p>
              <div className={styles.infoSocial}>
                <p>
                  Siga-nos também nas redes sociais para se manter atualizado
                  sobre as nossas últimas notícias, ofertas especiais e eventos:
                </p>

                <ul>
                  <li>
                    <Link href="https://www.facebook.com/">
                      <Icon icon="entypo-social:facebook-with-circle" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/">
                      <Icon icon="entypo-social:instagram-with-circle" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Contactos;
