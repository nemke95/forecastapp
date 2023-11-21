import React from "react";
import { useGlobalContext } from "../context/context";
import classnames from "classnames";

const AirQualilty = ({ quality }) => {
  const { weather } = useGlobalContext();
  const { current } = weather || "";

  let contextQuality = "";
  if (quality === 1) {
    contextQuality = "Good";
  } else if (quality === 2) {
    contextQuality = "Moderate";
  } else if (quality === 3) {
    contextQuality = "Moderate";
  } else if (quality === 4) {
    contextQuality = "Unhealthy for sensitive group";
  } else if (quality === 5) {
    contextQuality = "Very Unhealthy";
  } else if (quality >= 6) {
    contextQuality = "Hazardous";
  }

  const classes = classnames("px-3 py-1 border", {
    "border-lime-500/20 bg-lime-600/60 text-white text-center rounded-2xl p-2.5 mb-2.5":
      quality === 1,
    "border-green-900/20 bg-green-900/40 text-white text-center rounded-2xl p-2.5 mb-2.5":
      quality === 2,
    "border-yellow-400/20 bg-yellow-400/40 text-white text-center rounded-2xl p-2.5 mb-2.5":
      quality === 3,
    "border-yellow-400/20 bg-yellow-400/40 text-white text-center rounded-2xl p-2.5 mb-2.5":
      quality === 4,
    "border-yellow-800/20 bg-yellow-800/40 text-white text-center rounded-2xl p-2.5 mb-2.5":
      quality === 5,
    "border-yellow-950/20 bg-yellow-950/60 text-white text-center rounded-2xl p-2.5 mb-2.5":
      quality >= 6,
  });

  return (
    <div className={classes}>
      <h3>air quality</h3>
      <div className="flex justify-evenly">
        <h6>co: {current.air_quality.co}</h6>
        <h6>
          US - EPA standard quality: <span>{contextQuality}</span>
        </h6>
      </div>
    </div>
  );
};

export default AirQualilty;
