import React, { useEffect } from "react";
import styles from "../../styles/components/UI/Navbar.module.css";

const Navbar = () => {
  //when the user scrolls down 400px down from the top of the document, the navbar will change color

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 400) {
  //       document.querySelector("header").style.backgroundColor =
  //         " rgb(34, 34, 34)";

  //       document.querySelector("header").style.transition = "all 0.5s ease";
  //     } else {
  //       document.querySelector("header").style.backgroundColor = "transparent";
  //       document.querySelector("header").style.transition = "all 0.5s ease";
  //     }
  //   });
  // }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLogo}>GoBuggy | Arcos</ul>
        <ul className={styles.navMenu}>Menu</ul>
      </nav>
    </header>
  );
};

export default Navbar;
