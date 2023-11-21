import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [weather, setWeather] = useState({
    alerts: { alert: [] },
    location: {},
    forecast: {
      forecastday: [{ astro: "", day: { condition: "" }, hour: [] }],
    },
    current: { condition: "", air_quality: {} },
  });
  const [city, setCity] = useState("Belgrade");
  const [photos, setPhotos] = useState([]);
  const [value, setValue] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const api_key = "e7900a6e534c420eba4171051231109";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=3&alerts=yes&aqi=yes`;
  // console.log(isLoading);

  const fetchWeather = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      const data = res.data;
      setWeather(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const fetchPhotos = async (term) => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${term}`,
        {
          headers: {
            Authorization:
              "Client-ID A_Vao-9FR613Je7Vs5ykRT-O-SCZNcMShlYZiIN_ExU",
          },
        }
      );
      setPhotos(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPhotos(city);
  }, [city]);

  return (
    <AppContext.Provider
      value={{
        weather,
        photos,
        setCity,
        value,
        setValue,
        isModalOpen,
        setIsModalOpen,
        isLoading,
        isError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
