import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import ModalReserve from "../ModalReserve";

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
    </>
  );
};

export default Layout;
