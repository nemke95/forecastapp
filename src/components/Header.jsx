import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import logo from "../imgs/logo.png";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 180, transition: { duration: 1.5 } },
};

const Header = () => {
  const { setIsModalOpen } = useGlobalContext();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <nav className="header">
      <motion.img
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        src={logo}
        alt={logo}
        className="mr-4 h-full"
      />
      <motion.h4
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        style={{ marginLeft: "0px" }}
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 500 }}
      >
        Weather
      </motion.h4>
      <motion.button
        className="aboutBtn"
        whileHover={{ scale: 1.2 }}
        onClick={handleOpenModal}
      >
        About Project
      </motion.button>
    </nav>
  );
};

export default Header;
