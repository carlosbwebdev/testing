import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarState = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={handleSidebarState} sideBarState={isOpen} />
      <SideBar isOpen={isOpen} toggleSidebar={handleSidebarState} />
      {children}
      <Footer />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.7,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
      >
        <a
          href="https://wa.me/934142058"
          className="whatsappFloat pulse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="logos:whatsapp-icon"
            className="faWhatsapp whatsappIcon"
          />
        </a>
      </motion.div>
    </>
  );
};

export default Layout;
