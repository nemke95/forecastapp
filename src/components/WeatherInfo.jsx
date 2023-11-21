import React from "react";
import ButtonSidebar from "./ButtonSidebar";
import DailyInfo from "./DailyInfo";
import TimeByHour from "./TimeByHour";

const WeatherInfo = () => {
  return (
    <>
      <div className="weatherInfo">
        <ButtonSidebar />
        <DailyInfo />
        <TimeByHour />
      </div>
    </>
  );
};

export default WeatherInfo;
