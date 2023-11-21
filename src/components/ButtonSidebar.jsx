import React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import earth from "../imgs/earth.png";
import { RxThickArrowLeft } from "react-icons/rx";

const ButtonSidebar = () => {
  const { weather, value, setValue } = useGlobalContext();
  const days = weather.forecast.forecastday;
  const { date } = days[value] || "";

  const weekDays = ["Today", "Tomorrow", "The day after tomorrow"];
  let context = "";
  weekDays.map((days, index) => {
    if (index === new Date(date).getDay()) {
      context += days;
    }
  });

  return (
    <aside className="button-sidebar">
      <div className="backLink mt-2.5">
        <Link to="/" className="flex items-center justify-center">
          <RxThickArrowLeft className="icon" />
          back
        </Link>
      </div>
      <div className="button-container">
        {days.map((day, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setValue(index);
              }}
              className={`btn-day ${index === value && "active-btn-day"}`}
            >
              {weekDays[index]} <br />
              {day.date}
            </button>
          );
        })}
      </div>

      <img src={earth} className="earth" width="100%" alt="earth.png" />
    </aside>
  );
};

export default ButtonSidebar;
