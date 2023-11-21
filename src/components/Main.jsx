import React from "react";
import WeatherLocation from "./WeatherLocation";
import WeatherInfo from "./WeatherInfo";
import { Route, Routes } from "react-router-dom";
import Modal from "./Modal";
import { useGlobalContext } from "../context/context";
import Error from "./Error";

const Main = () => {
  const { isModalOpen } = useGlobalContext();
  return (
    <div style={{ position: "relative" }}>
      {isModalOpen && <Modal />}

      <Routes>
        <Route path="/" element={<WeatherLocation />} />
        <Route path="/weatherInfo" element={<WeatherInfo />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Main;
