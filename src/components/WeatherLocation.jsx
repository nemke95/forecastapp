import React from "react";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import Form from "./Form";
import { motion } from "framer-motion";
import { Rain } from "react-rainfall";
import Snowfall from "react-snowfall";
import locationCover from "../imgs/locationCover.jpg";
import bgCover from "../imgs/bgCover.jpg";

const WeatherLocation = () => {
  const { photos, weather } = useGlobalContext();
  const { current, location } = weather || "";
  const localTime = location?.localtime?.slice(10);
  const lastImg =
    photos[Math.floor(Math.random() * 9)]?.urls?.full || locationCover;
  const days = weather.forecast.forecastday;
  const { day } = days[0] || "";

  let background = "";
  if (photos.length < 8) {
    background = <img src={bgCover} className="bgCover" alt="bgCover" />;
  } else {
    background = (
      <div className="photosContainer">
        {photos.map((photo) => {
          return (
            <div key={photo.id} className="singlePhoto">
              <img src={photo.urls.regular} alt="photo" />
            </div>
          );
        })}
      </div>
    );
  }

  const rain = day.daily_chance_of_rain > 55 && (
    <Rain numDrops={50} className="rain" />
  );

  const snow =
    day.daily_chance_of_snow > 65 ? <Snowfall className="snow" /> : "";

  const locationElementClass =
    "bg-zinc-900/80 w-fit border rounded-2xl m-auto mb-1.5 px-2.5 py-1.5";

  return (
    <>
      <section className="weatherLocation">
        <Form />
        <div
          className="location text-center rounded-2xl"
          style={{
            backgroundImage: `url(${lastImg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-gray-800/40 rounded-2xl pt-1.5 pb-2.5 relative">
            {rain}
            {snow}
            <h1 className={`${locationElementClass} mt-2.5`}>
              Location: <span>{location.name}</span>
            </h1>
            <h5 className={locationElementClass}>
              <span>{location.region}</span>
            </h5>
            <div
              className={`${locationElementClass} flex justify-around items-center `}
            >
              <img src={current.condition.icon} alt={current.condition.text} />
              <h3>{current.condition.text}</h3>
            </div>
            <h1 className={locationElementClass}>
              Temp:{" "}
              <span>
                {current.temp_c}°C ({current.temp_f}F)
              </span>
            </h1>
            <h3 className={locationElementClass}>
              Feels like:{" "}
              <span>
                {current.feelslike_c}°C ({current.feelslike_f}F)
              </span>
            </h3>
            <p className={locationElementClass}>Local time: {localTime}</p>
            <h5 className={locationElementClass}>
              lat: {location.lat} & lon: {location.lon}
            </h5>
            <h6 className={locationElementClass}>
              <span>{location.country}</span>
            </h6>
          </div>
        </div>

        {background}

        <motion.div
          initial={{ y: "100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          style={{ textAlign: "center" }}
        >
          <Link to="weatherInfo" className="link">
            See details for next 3 days
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default WeatherLocation;
