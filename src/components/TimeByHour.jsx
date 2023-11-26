import React from "react";
import { useGlobalContext } from "../context/context";
import Hour from "./Hour";

const TimeByHour = () => {
  const { weather, value } = useGlobalContext();
  const days = weather.forecast.forecastday;
  const { hour } = days[value] || "";
  const currentDate = new Date();
  const timestamp = Math.floor(currentDate.getTime() / 1000);

  const renderedHours = hour.map((h, index) => {
    if (h.time_epoch + 3600 >= timestamp) {
      return <Hour h={h} key={index} />;
    }
  });
  return (
    <div className="hours-container">
      <h2 className="pb-4 pt-1.5 text-xl font-serif">~weather by hour~</h2>
      {renderedHours}
    </div>
  );
};

export default TimeByHour;
