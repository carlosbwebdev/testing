import Layout from "@/components/UI/Layout";
import React from "react";
import styles from "../styles/pages/contactos.module.css";
import Head from "next/head";

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
        <div className={styles.contactosPage}>
          <div className={styles.title}>
            <h1>Contactos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
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
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contactos;
