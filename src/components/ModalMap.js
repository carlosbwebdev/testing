import React from "react";
import Image from "next/image";
import styles from "../styles/components/ModalMap.module.css";
import { motion } from "framer-motion";

const ModalMap = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sectionModal}
    >
      <Image src={image} alt="foto" loading="eager" />
    </motion.div>
  );
};

export default ModalMap;
