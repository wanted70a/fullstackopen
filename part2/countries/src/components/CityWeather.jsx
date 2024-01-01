import { useEffect } from "react";
import { getWeatherForCity } from "../api/api";
import { useState } from "react";

const CityWeather = ({ city }) => {
  const [weateher, setWerather] = useState();
  const icon = weateher?.weather[0].icon;
  const temp = Math.floor(weateher?.main.temp - 273.15);

  useEffect(() => {
    getWeatherForCity(city).then((data) => setWerather(data));
  }, [city]);
  return (
    <div>
      <h1>Weather in {city}</h1>
      <p>temperature is: {temp}</p>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
    </div>
  );
};

export default CityWeather;
