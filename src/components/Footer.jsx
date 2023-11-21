import React from "react";
import { useGlobalContext } from "../context/context";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const { weather } = useGlobalContext();
  const { alerts, current, forecast, location } = weather || "";
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
{
  /* <a href="https://github.com/nemke95" target="_blank">
          <BsGithub />
        </a> */
}
