import React from "react";
import { useGlobalContext } from "../context/context";
import AirQualilty from "./AirQualilty";
import { BsSunrise, BsSunset } from "react-icons/bs";
import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaTemperatureHalf,
} from "react-icons/fa6";
import { BsFillCloudRainFill, BsCloudSnowFill } from "react-icons/bs";
import { FaSnowflake } from "react-icons/fa";
import { Rain } from "react-rainfall";
import Snowfall from "react-snowfall";

import firstQuarter from "../imgs/moon/First Quarter.webp";
import foolMoon from "../imgs/moon/Full Moon.webp";
import lastQuarter from "../imgs/moon/Last Quarter.webp";
import newMoon from "../imgs/moon/New Moon.webp";
import waningGibbous from "../imgs/moon/Waning Gibbous.webp";
import waningCrescent from "../imgs/moon/Waning Crescent.webp";
import waxingCrescent from "../imgs/moon/Waxing Crescent.webp";
import waxingGibbous from "../imgs/moon/Waxing Gibbous.webp";
import locationCover from "../imgs/locationCover.jpg";

const moonArr = [
  firstQuarter,
  foolMoon,
  lastQuarter,
  newMoon,
  waningGibbous,
  waningCrescent,
  waxingCrescent,
  waxingGibbous,
];

const DailyInfo = () => {
  const { weather, value, photos } = useGlobalContext();
  const { alerts, current, location } = weather || "";
  const days = weather.forecast.forecastday;
  const { astro, day } = days[value] || "";

  const elClass = "flex bg-gray-800/60 rounded-2xl p-2.5 mb-2.5";
  const coverImg =
    photos[Math.floor(Math.random() * 9)]?.urls?.full || locationCover;

  const moonImg = moonArr.filter((m) => {
    let x = m.slice(15, -5);
    return x === astro.moon_phase;
  });

  const alertInformation = alerts.alert.map((alert, index) => {
    return (
      <div
        key={index}
        className="text-center my-2.5 mx-1 rounded-2xl p-1.5 bg-red-900/60"
      >
        <h3>alert: {alert.event}</h3>
        <p>{alert.desc}</p>
      </div>
    );
  });
  const rain = day.daily_chance_of_rain > 55 && (
    <Rain numDrops={50} className="rain" />
  );
  const snow =
    day.daily_chance_of_snow > 65 ? <Snowfall className="snow" /> : "";

  return (
    <section
      className="dailyInfo"
      style={{
        backgroundImage: `url(${coverImg})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {rain}
      {snow}
      <div className="dailyInfo-detail"></div>

      <h1 className="text-center">
        {location.name} <span>{current.temp_c}°C</span>
      </h1>

      <div
        className={`${elClass} justify-between text-center items-center flex-wrap`}
      >
        <div>
          <BsSunrise className="icon" /> Sunrise: <span>{astro.sunrise}</span>
        </div>
        <div>
          <BsSunset className="icon" /> Sunset <span>{astro.sunset}</span>
        </div>
      </div>

      <article
        className={`${elClass} justify-around flex-wrap items-center text-center`}
      >
        <div>
          <h2>~ {day.condition.text} ~</h2>
          <img
            src={day.condition.icon}
            alt={day.condition.text}
            style={{ width: "9em" }}
          />
        </div>
        <div className="mb-5 text-left">
          <div style={{ padding: "10px 0px" }}>
            <FaTemperatureArrowUp className="icon" /> Max daily temp:{" "}
            <span>{day.maxtemp_c} °C</span>
          </div>
          <div style={{ padding: "10px 0px" }}>
            <FaTemperatureArrowDown className="icon" /> Min daily temp:{" "}
            <span>{day.mintemp_c} °C</span>
          </div>
          <div style={{ paddingTop: "10px" }}>
            <FaTemperatureHalf className="icon" /> Average temp:{" "}
            <span>{day.avgtemp_c} °C</span>{" "}
          </div>
        </div>
      </article>

      <div className={`${elClass} justify-between p-4 flex-wrap items-stretch`}>
        <div style={{ padding: "10px 0px", margin: "0 auto" }}>
          <BsFillCloudRainFill className="icon" />
          Daily % of rain: <span>{day.daily_chance_of_rain} %</span>
        </div>
        <div style={{ padding: "10px 0px", margin: "0 auto" }}>
          <BsCloudSnowFill className="icon" />
          Daily % of snow: <span>{day.daily_chance_of_snow} %</span>{" "}
        </div>
        <div style={{ padding: "10px 0px", margin: "0 auto" }}>
          <FaSnowflake className="icon" />
          Snow fall: <span>{day.totalsnow_cm}</span>cm
        </div>
      </div>
      {alertInformation}

      <AirQualilty quality={current.air_quality["gb-defra-index"]} />

      <div
        className={`${elClass} justify-around flex-wrap items-center my-2.5 mx-0 py-1.5`}
      >
        <div style={{ padding: "10px 10px", lineHeight: "32px" }}>
          <h4>
            wind: <span>{current.wind_kph}</span>m/s
          </h4>
          <h4>
            wind direction: <span>{current.wind_dir}</span>
          </h4>
          <h4>
            wind degree: <span>{current.wind_degree}</span>
          </h4>
          <h4>
            wind gust: <span>{`${day.gust_kph || "0"}`}m/s</span>
          </h4>
        </div>
        <div style={{ padding: "10px 10px", lineHeight: "32px" }}>
          <h4>
            precipitation: <span>{current.precip_mm} mm</span>
          </h4>
          <h4>
            visibility: <span>{day.avgvis_km} km</span>
          </h4>
          <h4>
            uv: <span>{day.uv}</span>
          </h4>
          <h4>
            humidity: <span>{current.humidity}%</span>
          </h4>
          <h4>
            pressure: <span>{current.pressure_mb} mb</span>
          </h4>
        </div>
      </div>

      <div className={`${elClass} justify-between`}>
        <h2>
          Moonrise:<span>{astro.moonrise}</span>
        </h2>
        <h2 style={{ paddingLeft: "20px" }}>
          Moonset: <span>{astro.moonset} </span>
        </h2>
      </div>

      <div className={`${elClass} justify-around items-center`}>
        MoonPhase:{astro.moon_phase}
        <img src={moonImg} width={100} alt="Wanning " />
      </div>

      <p style={{ textAlign: "center" }}>
        moon illumination: {astro.moon_illumination}%
      </p>
    </section>
  );
};

export default DailyInfo;
