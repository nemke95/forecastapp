import React from "react";
import { useGlobalContext } from "../context/context";

const Footer = () => {
  const { weather } = useGlobalContext();
  const { current } = weather || "";
  return (
    <footer className="footer">
      <p
        style={{ textAlign: "center", color: "whitesmoke", paddingTop: "25px" }}
      >
        Last updated: {current.last_updated}
      </p>
      <p style={{ textAlign: "center", color: "whitesmoke" }}>
        Author: Nemanja Karan
      </p>
    </footer>
  );
};

export default Footer;
