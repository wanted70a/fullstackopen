import axios from "axios";
const api_key = import.meta.env.VITE_WEATHER_APIKEY;

export const getCountryByName = (name) => {
  return axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    .then((response) => response.data);
};

export const getWeatherForCity = (city) => {
  return axios
    .get(
      `https://openweathermap.org/data/2.5/find?q=${city}&appid=${api_key}&units=metric`
    )
    .then((data) => data.data.list[0]);
};
