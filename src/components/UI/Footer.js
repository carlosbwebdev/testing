import React from "react";
import styles from "../../styles/components/UI/Footer.module.css";

const Footer = () => {
  //get the current year
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>
          ©{year} Desenvolvido por <a>Inovee Agência Digital</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
