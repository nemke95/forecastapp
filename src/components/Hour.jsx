import React, { useState, useRef, useEffect } from "react";
import {
  BiSolidRightArrow,
  BiSolidLeftArrow,
  BiSolidDownArrow,
} from "react-icons/bi";
import { Rain } from "react-rainfall";
import Snowfall from "react-snowfall";

const Hour = ({ h }) => {
  const [isTrue, setIsTrue] = useState(false);
  const refEl = useRef();
  const slicedTime = h.time.slice(10);
  const rain =
    h.chance_of_rain > 55 ? (
      <Rain numDrops={50} className="rainAndSnowAnimation" />
    ) : (
      ""
    );
  const snow =
    h.chance_of_snow > 65 ? <Snowfall className="rainAndSnowAnimation" /> : "";

  useEffect(() => {
    const handler = (e) => {
      if (!refEl.current.contains(e.target)) {
        setIsTrue(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  return (
    <div
      ref={refEl}
      className={`single-hour ${isTrue && "single-active-hour"}`}
      onClick={() => {
        setIsTrue(!isTrue);
      }}
    >
      <h2 className="flex items-center justify-center my-1">
        {isTrue ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
        <span className="mx-1.5">{slicedTime}</span>
        {isTrue ? <BiSolidDownArrow /> : <BiSolidLeftArrow />}
      </h2>
      {isTrue && (
        <div className="relative py-4 px-1">
          {rain}
          {snow}
          <div>
            <p>
              Temp: <span>{h.temp_c}°C</span> <br />
              feels like <span>{h.feelslike_c}°C</span>
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <img src={h.condition.icon} alt={h.condition.text} />
              <p>{h.condition.text}</p>
            </div>
          </div>
          <div>
            <p>
              % of rain: <span>{h.chance_of_rain}%</span>
            </p>
            {h.will_it_snow ? (
              <p>
                % of snow: <span>{h.chance_of_snow}%</span>
              </p>
            ) : (
              ""
            )}
            <p>
              wind: <span>{h.wind_kph}</span>
              kph
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hour;
